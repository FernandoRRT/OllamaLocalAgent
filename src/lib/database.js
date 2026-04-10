import knex from 'knex';

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

export default db;


// Global RAG Configuration
export const RAG_CONFIG = {
  TOP_K: 3, // Number of relevant chunks to retrieve for context or the limit results retrieved in search.js
  MAX_CHUNK_SIZE: 2000,
  EMBEDDING_MODEL: 'nomic-embed-text',
  OLLAMA_API: 'http://127.0.0.1:11434/api/embeddings'
};