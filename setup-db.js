const { Client } = require('pg');

const dbConfig = {
  host: '127.0.0.1', port: 5432, user: 'postgres', password: 'pswroot', database: 'rag_knowledge'
};

async function setupDatabase() {
  console.log("🛠️ Starting database configuration...");
  const client = new Client(dbConfig);
  
  try {
    await client.connect();
    
    // 1. Enables the vector search extension.
    await client.query('CREATE EXTENSION IF NOT EXISTS vector;');
    console.log("✅ Extension 'vector' enabled.");

    // 2. Create the knowledge table.
    await client.query(`
      CREATE TABLE IF NOT EXISTS stack_knowledge (
          id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
          content text NOT NULL,
          embedding vector(768),
          metadata jsonb NOT NULL,
          created_at timestamp with time zone DEFAULT now()
      );
    `);
    console.log("✅ Table 'stack_knowledge' created/verified.");

    // 3. Indexing for fast search (HNSW)
    await client.query('CREATE INDEX IF NOT EXISTS stack_knowledge_embedding_idx ON stack_knowledge USING hnsw (embedding vector_cosine_ops);');
    console.log("✅ HNSW index created.");

  } catch (error) {
    console.error("❌ Error during configuration:", error.message);
  } finally {
    await client.end();
    console.log("🎉 Configuration completed!");
  }
}

setupDatabase();