# 🧠 Ollama Local Agent: RAG & MCP Ecosystem

This repository contains the architecture and scripts for a Local Artificial Intelligence ecosystem utilizing Retrieval-Augmented Generation (RAG) and the Model Context Protocol (MCP). It is designed to run entirely locally, providing an LLM with direct, semantic access to technical documentation (like Next.js 16) stored in a vector database.

> **Important Path Note:** This project was originally built assuming the path `/home/fernando/IA`. If you clone this repository into a different directory, you will need to update the absolute paths in the bash aliases and the MCP configuration step.

## 💻 Hardware Environment

This ecosystem was designed and tested to run locally on the following hardware (Server "Papai"):

- **Processor:** AMD Ryzen 9 5900XT (16 Cores / 32 Threads)
- **RAM:** 48GB DDR4 3200MHz
- **GPU:** NVIDIA GeForce RTX 2060 (12GB VRAM)
- **Storage:** NVMe Gen4
- **OS:** Linux Mint / Ubuntu

---

## 📦 0. Prerequisites

Ensure your Linux environment has the following tools installed:

1.  **Docker & Docker Compose**

- Required for the Postgres + pgvector database.
- Installation guide: [Docker for Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

2.  **Node.js (v24.x LTS or higher)**

- Required to run the ingestion scripts and the MCP server.
- Installation via NVM: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

3.  **Ollama**

- The local inference engine for embeddings and LLMs.
- Installation guide: [ollama.com/download](https://ollama.com/download)
- _Linux quick install:_ `curl -fsSL https://ollama.com/install.sh | sh`

4.  **OpenClaude**

- The CLI interface that connects to the LLM and utilizes our MCP tools.
- Installation guide: [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

---

## 📂 Project Structure

This repository includes pre-fetched documentation (`docs_stack`) and all necessary setup scripts.

```text
.
├── docker/
│   └── postgres/
│       └── docker-compose.yml     # Postgres + pgvector container config
├── docs_stack/                    # Pre-downloaded & Sanitized Markdown
│   ├── auth0-nextjs/              # Auth0 SDK v4 documentation
│   ├── material ui/               # Material ui 9 documentation
│   ├── nextjs/                    # Next.js 16 documentation
│   ├── react/                     # React 19 documentation
│   └── zod/                       # Zod 4 documentation
├── src/                           # Core application logic
│   ├── helpers/
│   │   ├── constants.js           # Shared paths (like docs_stack base path)
│   │   ├── fetchAndClean.js       # Sanitization Regex engine (The "Sanitizer")
│   │   └── runBulk.js             # Bulk execution orchestrator
│   ├── lib/
│   │   └── database.js            # Centralized DB connection & RAG Config (TOP_K)
│   └── mcp/                       # Curated fetch configurations (CLI Menu sources)
│       ├── bulk-fetch-auth0.js
│       ├── bulk-fetch-next.js
│       ├── bulk-fetch-react.js
│       └── bulk-fetch-zod.js
├── bulk-fetch.js                  # Centralized Bulk Fetch Commander (CLI Menu)
├── fetch-docs.js                  # CLI utility to fetch a single documentation page
├── ingest.js                      # Chunks markdown and saves vectors to Postgres
├── mcp-rag.js                     # MCP Server linking the DB to OpenClaude
├── Modelfile                      # LLM configuration (Context window, Temp, System Prompt)
├── search.js                      # CLI utility to test vector search results
└── setup-db.js                    # Initializes Postgres tables and HNSW indexes
```

---

## 🚀 Installation & Setup Guide

### 1. Start the Database

Navigate to the Docker folder and start the PostgreSQL container (which includes the `pgvector` extension).

```bash
cd docker/postgres
docker compose up -d
cd ../..
```

### 2. Install Node Dependencies

Install the required packages (`knex`, `pg`, `axios`, `@modelcontextprotocol/sdk`).

**Tip:** Check if the downloaded version of these libraries hasn't suffered a supply chain attack in the last few weeks. It's rare, but it happens a lot... Just kidding (not!).

```bash
npm install knex pg axios zod @modelcontextprotocol/sdk
```

### 3. Configure Database & RAG Parameters

This project uses a centralized configuration file. Before initializing the database or running any ingestion, open `src/lib/database.js` and verify your credentials and RAG parameters.

You can modify parameters like chunk size and the number of contexts returned to the LLM (`TOP_K`):

```javascript
export const RAG_CONFIG = {
  TOP_K: 3, // Number of context chunks returned to the LLM
  MAX_CHUNK_SIZE: 2000,
  EMBEDDING_MODEL: "nomic-embed-text",
  OLLAMA_API: "http://127.0.0.1:11434/api/embeddings",
};
```

### 4. Initialize the Database Schema

Run the setup script to create the `stack_knowledge` table and the HNSW vector index. _You only need to run this once._

```bash
node setup-db.js
```

### 5. Download Ollama Models

Pull the required embedding model (for vectorizing text) and the main LLM (for chatting).

```bash
ollama pull nomic-embed-text
ollama pull qwen2.5:14b
```

> The 2.5:14b model, being more general than qwen2.5-coder, performed better in my tests. I believe the reason for this is that it is more "agentic" than the coder model.
>
> I also tested the qwen3.5:9b model. Besides not producing very good results, I noticed that 9b was the minimum number of parameters needed to get good responses on my hardware. Although I continue to recommend the 14b models, I believe that the smaller models will perform worse as the context expands.

### 6. Download documentation

You can download additional documentation pages using the script below. It will download the page content as markdown and save it to a file in the docs_stack folder of this project. To download a single document, run:

```bash
node fetch-docs.js https://example.com /example/doc-name.md
```

#### Bulk Download

The bulk download scripts contain curated links for the following framework versions:

- **Auth0 Next.js SDK v4.x** (Main examples and MCD)
- **Material UI v9.x** (Main examples and customization)
- **Next.js v16.x** (Optimized RAG list)
- **React v19.x** (Core hooks and patterns)
- **Zod v4.x** (Main examples and error customization)

This project features a centralized **Bulk Fetch Commander** to manage documentation versions. Instead of running individual files, use this single entry point to select which stack you want to update:

```bash
node bulk-fetch.js
```

##### 💡 Usage Tips

1.  **Extensibility:** To create a fetch script for a new framework (like MUI or Tailwind), simply duplicate one of the `bulk-fetch-*.js` files in the `/src/mcp` folder and update the URLs array.
2.  **Auto-Discovery:** Any new script created in that folder will be automatically added to the `bulk-fetch.js` menu. Remember to update the `dirPath` at the top of your new script to define the correct download folder.
3.  **Version Updates:** If a framework is updated, verify if the URLs remain valid. Re-running a script will refresh the folder content by deleting old files and downloading everything again.
4.  **Orchestration:** The heavy lifting of downloading, cleaning, and avoiding infinite loops is safely handled by `src/helpers/runBulk.js`, while the sanitization engine lives in `src/helpers/fetchAndClean.js`.

### 🧠 Smart Sanitization Engine

Unlike generic scrapers, our `src/helpers/fetchAndClean.js` utilizes a multi-step regex pipeline specifically tuned for RAG:

1.  **GitHub Artifact Removal:** Automatically kills empty header anchors `[](url)` and "Copy" buttons.
2.  **Context Preservation:** Strips Table of Contents (TOC) but keeps the anchor text to save embedding tokens.
3.  **Hex Hash Filtering:** Removes long commit hashes and cache busters that cause vector noise.
4.  **Markdown Refinement:** Converts links to plain text to prevent the LLM from hallucinating broken URLs.

### 7. Ingest the Documentation (Populate the Brain)

Run the ingestion script. This will read all Markdown files in the `docs_stack/` folder, chunk them to avoid context limits, generate embeddings via Ollama, and save them to PostgreSQL using a "Delete & Replace" strategy.

```bash
node ingest.js
```

> **Quick question**: why do we need to download the documentation for next.js, auth0, and others?
>
> The Qwen2.5 series templates generally have information updated until around June/July 2024. Therefore, they have no way of accessing new versions of next.js or even React. That's why we need this workaround to make it work (uma belíssima gambiarra).

### 8. Compile the Elite RAG Agent (Modelfile)

By default, local LLMs have short context windows (2048 tokens) and high "creativity" (temperature), which causes them to hallucinate code or forget the RAG context. To fix this, we build a custom model layer using a `Modelfile`.

Create a file named `Modelfile` in your root directory (`~/IA/Modelfile`) with the following content. _(Detailed explanations of what each parameter does are documented directly inside the file's comments)._

```dockerfile
# /home/fernando/IA/Modelfile
FROM qwen2.5:14b

# 🧠 PARAMETER ANATOMY (ANTI-HALLUCINATION)
# The adjustments below force the model to be deterministic and technical.
PARAMETER temperature 0.1
PARAMETER top_k 10
PARAMETER top_p 0.5

# 📚 CONTEXT WINDOW (MANDATORY FOR RAG)
# 8k is the 'sweet spot' for an RTX 2060 (12GB) to load RAG chunks without crashing.
PARAMETER num_ctx 8192
PARAMETER num_predict -1

# 🤖 EMBEDDED SYSTEM PROMPT
SYSTEM """
You are an Elite Software Engineer specializing in the modern web stack (Next.js 16 App Router, React 19, MUI v9, Auth0 v4).
You have access to local documentation via the MCP tool 'search_stack_docs'.
ALWAYS search the documentation before providing code or architectural advice.
NEVER hallucinate API methods. If the information is not in the RAG context, state clearly that the local knowledge base lacks the documentation.
Write clean, production-ready code with English comments.
"""
```

Compile the custom model (we'll call it `dev-model`) via the terminal:

```bash
ollama create dev-model -f ~/IA/Modelfile
```

> **⚠️ Update Rule:** If you ever edit the `Modelfile` to change a parameter or the system prompt, you **must run the `ollama create` command above again**. You don't need to delete the old one; Ollama will automatically overwrite the existing `dev-model` with your new settings.

---

## 🔌 Connecting the AI via MCP

The final step is to connect your local knowledge base to OpenClaude using the Model Context Protocol.

**1. Register the MCP Server:**

In your terminal, tell OpenClaude where your `mcp-rag.js` file is located.
_(Replace `/path/to/your/repo` with your actual absolute path)._

```bash
openclaude mcp add NameItWhateverYouWant node /path/to/your/repo/mcp-rag.js

#in my case
openclaude mcp add PapaiRAG node /home/fernando/IA/mcp-rag.js
```

> I named it PapaiRAG because I have more than one RAG running on my internal network. If you want to change this name, just replace it in the command above and in the mcp-rag.js file on line 21.

```javascript
// 2. Initialize MCP Server
const server = new Server(
  {
    name: "Papai-RAG-Server",
    version: "1.0.0",
  },
  {
    capabilities: { tools: {} },
  },
);
```

**2. Setup Project Rules (`CLAUDE.md`):**

In any programming project where you want to use this AI, before opening OpenClaude, navigate to the directory you want to use and create a `CLAUDE.md` file in the root directory to instruct the model to use your local RAG tool. Example:

```markdown
# Assistant Instructions

You are a Senior Software Engineer working on this project.

## Knowledge Base Rules (RAG)

1. We have a local documentation database accessible via the MCP tool `search_stack_docs` (PapaiRAG).
2. BEFORE writing any code or answering stack-specific questions, you MUST use the `search_stack_docs` tool to query the current documentation.
3. Never assume framework versions or APIs; always check the database first.
```

> Remember to change the PapaiRAG

**3. Start the Agent:**

Launch OpenClaude with your newly compiled custom model:

```bash
openclaude --model dev-model
```

---

## ⚙️ Optional: Linux Automation (Aliases)

To make managing the ecosystem easier, you can add these aliases to your `~/.bashrc` or `~/.zshrc`.
_(Note: Adjust `IA_DOCKER_PATH` and the Modelfile path to match your clone location)._

```bash
# === IA ECOSYSTEM (OLLAMA + RAG) ===
export IA_DOCKER_PATH="$HOME/IA/docker/postgres"
alias ia-on='sudo systemctl start ollama && docker compose -f $IA_DOCKER_PATH/docker-compose.yml up -d && echo "🚀 AI Ecosystem Active"'
alias ia-off='sudo systemctl stop ollama && docker compose -f $IA_DOCKER_PATH/docker-compose.yml stop && echo "💤 AI Ecosystem Offline"'
alias ia-status='systemctl status ollama && docker ps --filter name=postgres_ai_rag'
alias rag-db='docker exec -it postgres_ai_rag psql -U postgres -d rag_knowledge'

# === RAG AGENT WORKFLOW ===
# Run this inside any project folder to start coding with the AI
alias run-agent='openclaude --model dev-model'
# Run this to quickly re-compile the model if you change the Modelfile
alias build-agent='ollama create dev-model -f ~/IA/Modelfile'
```

Apply the changes: `source ~/.bashrc`

_Tip: To use `ia-on` and `ia-off` without typing your password, add a `NOPASSWD` rule for `systemctl start/stop ollama` in your `visudo` file._

**Give sudo privileges to Ollama (without prompting for a password):**

```bash
sudo  visudo
```

Add this line to the end of the file (replace `fernando` with your username):

```text
fernando ALL=(ALL) NOPASSWD: /usr/bin/systemctl start ollama, /usr/bin/systemctl stop ollama, /usr/bin/systemctl status ollama
```

**And that's all folks!**

I hope it works for you. Actually, I hope it works for me because this is version 1.0, and I'm just downloading the documentation. I started this project on April 7th, 2026, and I'm still downloading the documentation.

If you'd like to chat about this project, send an email to [contato@fernandotorres.dev.br](mailto:contato@fernandotorres.dev.br). Feel free to contribute by adding more documentation or improving the code.
