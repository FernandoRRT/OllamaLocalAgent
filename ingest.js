import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Import the centralized database connection
import db, { RAG_CONFIG } from './src/lib/database.js';

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the documentation folder (relative to project root)
const DOCS_DIR = path.join(__dirname, 'docs_stack');

/**
 * Recursively retrieves all markdown files from a directory
 */
function getFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
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
 * Advanced Recursive Text Splitter
 * Prevents Ollama 500 errors by breaking down giant text/code blocks.
 */
function chunkText(text, maxChunkSize = RAG_CONFIG.MAX_CHUNK_SIZE) {
  const paragraphs = text.split('\n\n');
  const chunks = [];
  let currentChunk = '';

  for (const p of paragraphs) {
    if (p.length > maxChunkSize) {
      if (currentChunk.trim()) {
        chunks.push(currentChunk.trim());
        currentChunk = '';
      }

      const lines = p.split('\n');
      let currentLineChunk = '';

      for (const line of lines) {
        if ((currentLineChunk.length + line.length) > maxChunkSize && currentLineChunk.length > 0) {
          chunks.push(currentLineChunk.trim());
          currentLineChunk = '';
        }

        if (line.length > maxChunkSize) {
          if (currentLineChunk.trim()) {
            chunks.push(currentLineChunk.trim());
            currentLineChunk = '';
          }
          for (let i = 0; i < line.length; i += maxChunkSize) {
            chunks.push(line.slice(i, i + maxChunkSize));
          }
        } else {
          currentLineChunk += line + '\n';
        }
      }
      if (currentLineChunk.trim()) chunks.push(currentLineChunk.trim());

    } else {
      if ((currentChunk.length + p.length) > maxChunkSize && currentChunk.length > 0) {
        chunks.push(currentChunk.trim());
        currentChunk = '';
      }
      currentChunk += p + '\n\n';
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

/**
 * Reads, chunks, and generates embeddings for a single file
 */
async function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(DOCS_DIR, filePath);

  if (!content.trim()) return;

  const chunks = chunkText(content);
  console.log(`🤖 Processing: ${relativePath} (${chunks.length} chunks)`);

  try {
    // 1. DELETE and REPLACE STRATEGY
    await db('stack_knowledge')
      .where(db.raw("metadata->>'filename' = ?", [relativePath]))
      .del();

    // 2. Process each chunk
    for (const [index, chunk] of chunks.entries()) {
      const response = await axios.post(RAG_CONFIG.OLLAMA_API, {
        model: RAG_CONFIG.EMBEDDING_MODEL,
        prompt: chunk
      });

      const embedding = response.data.embedding;

      await db('stack_knowledge').insert({
        content: chunk,
        metadata: JSON.stringify({
          source: 'documentation',
          filename: relativePath,
          category: relativePath.split(path.sep)[0],
          chunk_index: index,
          total_chunks: chunks.length
        }),
        embedding: db.raw('?::vector', [JSON.stringify(embedding)])
      });
    }

    console.log(`✅ Inserted ${chunks.length} chunks for ${relativePath}`);

  } catch (error) {
    if (error.response) {
      console.error(`❌ Ollama Error in chunk from ${relativePath}: Status ${error.response.status}`, error.response.data);
    } else {
      console.error(`❌ DB/System Error in ${relativePath}:`, error.message);
    }
  }
}

/**
 * Main execution function
 */
async function run() {
  console.log("🚀 Starting Bulk Ingestion with Chunking...");

  const allFiles = getFiles(DOCS_DIR);
  console.log(`Found ${allFiles.length} markdown files.\n`);

  for (const file of allFiles) {
    await processFile(file);
  }

  console.log("\n✅ Ingestion complete!");
  await db.destroy();
}

run();