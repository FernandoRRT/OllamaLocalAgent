import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import axios from 'axios';
import db, { RAG_CONFIG } from './src/lib/database.js';

/**
 * Papai-RAG-Server
 * MCP Server to provide local technical documentation to LLMs
 */

// 1. Initialize MCP Server
const server = new Server({
  name: "Papai-RAG-Server",
  version: "1.0.0"
}, {
  capabilities: { tools: {} }
});

// 2. Define the search tool
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

// 3. Implement the Tool Logic (RAG Search)
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "search_stack_docs") {
    const query = request.params.arguments.query;
    
    // We use console.error because MCP uses stdout for protocol communication
    console.error(`[MCP] Claude requested search for: "${query}"`);

    try {
      // Step A: Generate Embedding for the query
      const response = await axios.post(RAG_CONFIG.OLLAMA_API, {
        model: RAG_CONFIG.EMBEDDING_MODEL,
        prompt: query
      });
      const queryVector = JSON.stringify(response.data.embedding);

      // Step B: Search Postgres using Vector Similarity (Cosine Distance)
      const results = await db('stack_knowledge')
        .select('content', 'metadata')
        .orderByRaw(`embedding <=> ?::vector`, [queryVector])
        .limit(RAG_CONFIG.TOP_K);

      if (results.length > 0) {
        // Format the output for the LLM
        const formattedResults = results.map(r => {
          const meta = typeof r.metadata === 'string' ? JSON.parse(r.metadata) : r.metadata;
          return `[Source: ${meta.filename}]\n${r.content}`;
        }).join('\n\n---\n\n');

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

// 4. Start the Server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[MCP] Papai RAG Server is running and waiting for commands...");
}

main().catch(console.error);