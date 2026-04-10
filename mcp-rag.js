const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { CallToolRequestSchema, ListToolsRequestSchema } = require("@modelcontextprotocol/sdk/types.js");
const knex = require('knex');
const axios = require('axios');

// 1. Database Connection
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

// 2. Initialize MCP Server
const server = new Server({
  name: "Papai-RAG-Server",
  version: "1.0.0"
}, {
  capabilities: { tools: {} }
});

// 3. Define the Tool for OpenClaude
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [{
      name: "search_stack_docs",
      description: "Searches the local PostgreSQL vector database for technical documentation about the project stack (Next.js, React 19, MUI, etc). Use this BEFORE answering technical questions.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "The technical question or topic to search for (e.g., 'Next.js App Router setup')"
          }
        },
        required: ["query"]
      }
    }]
  };
});

// 4. Implement the Tool Logic (The actual RAG)
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "search_stack_docs") {
    const query = request.params.arguments.query;
    console.error(`[MCP] Claude requested search for: "${query}"`);

    try {
      // Create Embedding
      const response = await axios.post('http://127.0.0.1:11434/api/embeddings', {
        model: 'nomic-embed-text',
        prompt: query
      });
      const queryVector = JSON.stringify(response.data.embedding);

      // Search Postgres
      const results = await db('stack_knowledge')
        .select('content', 'metadata')
        .orderByRaw(`embedding <=> ?::vector`, [queryVector])
        .limit(2); // Retorna os 2 melhores resultados

      if (results.length > 0) {
        // Format the output for Claude
        const formattedResults = results.map(r => `[Source: ${r.metadata.filename}]\n${r.content}`).join('\n\n---\n\n');
        return {
          content: [{ type: "text", text: formattedResults }]
        };
      } else {
        return {
          content: [{ type: "text", text: "No documentation found for this query in the local RAG database." }]
        };
      }
    } catch (error) {
      console.error(`[MCP Error]`, error.message);
      return {
        isError: true,
        content: [{ type: "text", text: `Error executing search: ${error.message}` }]
      };
    }
  }
  throw new Error("Tool not found");
});

// 5. Start the Server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[MCP] Papai RAG Server is running and waiting for Claude...");
}

main().catch(console.error);
