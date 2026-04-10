import axios from 'axios';
import db, { RAG_CONFIG } from './src/lib/database.js';

/**
 * Searches the vector database for the most relevant context
 */
async function search(query) {
  try {
    console.log(`\n🧠 Generating embedding for query: "${query}"...`);
    
    // 1. Convert user question to vector
    const response = await axios.post(RAG_CONFIG.OLLAMA_API, {
      model: RAG_CONFIG.EMBEDDING_MODEL,
      prompt: query
    });
    const queryVector = JSON.stringify(response.data.embedding);

    console.log(`🔍 Searching RAG database...`);

    // 2. Perform Cosine Similarity search using pgvector (<=> operator)
    // We limit to 3 results to see how well the chunking strategy works
    const results = await db('stack_knowledge')
      .select('content', 'metadata')
      .orderByRaw(`embedding <=> ?::vector`, [queryVector])
      .limit(RAG_CONFIG.TOP_K);

    console.log("\n✅ RAG Search Results:");
    if (results.length > 0) {
      results.forEach((result, index) => {
        // Parse metadata if it comes back as a string from the pg driver
        const meta = typeof result.metadata === 'string' ? JSON.parse(result.metadata) : result.metadata;
        
        console.log(`\n--- Result ${index + 1} | Source: ${meta.filename} (Chunk ${meta.chunk_index + 1}/${meta.total_chunks}) ---`);
        console.log(result.content);
        console.log("-----------------------------------------");
      });
    } else {
      console.log("⚠️ No relevant knowledge found in the database.");
    }

  } catch (error) {
    console.error("❌ Search error:", error.message);
  } finally {
    // Close the centralized database connection pool
    await db.destroy();
  }
}

// Get the question from command line arguments
const userQuery = process.argv.slice(2).join(' ') || "What is the project stack?";
search(userQuery);