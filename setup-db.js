import db from './src/lib/database.js';

async function setupDatabase() {
  console.log("🛠️ Starting database configuration...");
  
  try {
    // 1. Enable the vector search extension in PostgreSQL
    await db.raw('CREATE EXTENSION IF NOT EXISTS vector;');
    console.log("✅ Extension 'vector' enabled.");

    // 2. Create the knowledge table
    await db.raw(`
      CREATE TABLE IF NOT EXISTS stack_knowledge (
          id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
          content text NOT NULL,
          embedding vector(768),
          metadata jsonb NOT NULL,
          created_at timestamp with time zone DEFAULT now()
      );
    `);
    console.log("✅ Table 'stack_knowledge' created/verified.");

    // 3. Create HNSW indexing for fast cosine similarity searches
    await db.raw('CREATE INDEX IF NOT EXISTS stack_knowledge_embedding_idx ON stack_knowledge USING hnsw (embedding vector_cosine_ops);');
    console.log("✅ HNSW index created.");

  } catch (error) {
    console.error("❌ Error during configuration:", error.message);
  } finally {
    // Close the centralized database connection pool
    await db.destroy();
    console.log("🎉 Configuration completed!");
  }
}

setupDatabase();