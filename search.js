const knex = require('knex');
const axios = require('axios');

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

async function search(query) {
  try {
    // 1. Convert user question to vector
    const response = await axios.post('http://127.0.0.1:11434/api/embeddings', {
      model: 'nomic-embed-text',
      prompt: query
    });
    const queryVector = JSON.stringify(response.data.embedding);

    // 2. Perform Cosine Similarity search using pgvector (<=> operator)
    // We limit to 1 result since we only have one file for now
    const results = await db('stack_knowledge')
      .select('content', 'metadata')
      .orderByRaw(`embedding <=> ?::vector`, [queryVector])
      .limit(1);

    console.log("\n🔍 Resultado da busca no RAG:");
    if (results.length > 0) {
      console.log("-----------------------------------------");
      console.log(results[0].content);
      console.log("-----------------------------------------");
      console.log("Metadata:", results[0].metadata);
    } else {
      console.log("Nenhum conhecimento encontrado.");
    }

  } catch (error) {
    console.error("❌ Erro na busca:", error.message);
  } finally {
    await db.destroy();
  }
}

// Get the question from command line arguments
const userQuery = process.argv.slice(2).join(' ') || "Qual a stack do projeto?";
search(userQuery);
