const knex = require('knex');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const OLLAMA_API = 'http://127.0.0.1:11434/api/embeddings';
const EMBEDDING_MODEL = 'nomic-embed-text';
const DOCS_DIR = path.join(__dirname, 'docs_stack');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'postgres',
    password: 'pswroot',
    database: 'rag_knowledge'
  }
});

/**
 * Recursively gets all markdown files from a directory
 */
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

/**
* Divides the text into chunks based on paragraph breaks (\n\n)
* so as not to cut off sentences or code in the middle.
 */
function chunkText(text, maxChunkSize = 2000) {
  const paragraphs = text.split('\n\n');
  const chunks = [];
  let currentChunk = '';

  for (const p of paragraphs) {
    // If the current paragraph added to the current chunk would exceed the limit, save the chunk and start a new one
    if ((currentChunk.length + p.length) > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = '';
    }
    currentChunk += p + '\n\n';
  }
  
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks;
}

async function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(DOCS_DIR, filePath);

  if (!content.trim()) return;

  // 1. Slicing (Chunking)
  const chunks = chunkText(content);
  console.log(`🤖 Processing: ${relativePath} (${chunks.length} chunks)`);

  try {
    // 2. DELETE and REPLACE STRATEGY 
    // Since a file now has multiple chunks, we delete the old ones before inserting the new ones.
    await db('stack_knowledge')
      .where(db.raw("metadata->>'filename' = ?", [relativePath]))
      .del();

    // 3. Process each chunk individually
    for (const [index, chunk] of chunks.entries()) {
      
      // Generate the embedding for this specific chunk
      const response = await axios.post(OLLAMA_API, {
        model: EMBEDDING_MODEL,
        prompt: chunk
      });

      const embedding = response.data.embedding;

      await db('stack_knowledge').insert({
        content: chunk,
        metadata: JSON.stringify({
          source: 'documentation',
          filename: relativePath,
          category: relativePath.split(path.sep)[0],
          chunk_index: index, // Helps to know the original order of the file
          total_chunks: chunks.length
        }),
        embedding: db.raw('?::vector', [JSON.stringify(embedding)])
      });
    }
    
    console.log(`✅  Inserted ${chunks.length} chunks for ${relativePath}`);
    
  } catch (error) {
    console.error(`❌ Error processing ${relativePath}:`, error.message);
  }
}

async function run() {
  console.log("🚀 Starting Bulk Ingestion with Chunking...");
  
  const allFiles = getFiles(DOCS_DIR);
  console.log(`found ${allFiles.length} markdown files.\n`);

  for (const file of allFiles) {
    await processFile(file);
  }

  console.log("\n✅ Ingestion complete!");
  await db.destroy();
}

run();