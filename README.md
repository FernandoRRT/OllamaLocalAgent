
# 🧠 Ollama Local Agent: RAG & MCP Ecosystem

This repository contains the architecture and scripts for a Local Artificial Intelligence ecosystem utilizing Retrieval-Augmented Generation (RAG) and the Model Context Protocol (MCP). It is designed to run entirely locally, providing an LLM with direct, semantic access to technical documentation (like Next.js 16) stored in a vector database.

>  **Important Path Note:** This project was originally built assuming the path `/home/fernando/IA`. If you clone this repository into a different directory, you will need to update the absolute paths in the bash aliases and the MCP configuration step.

## 💻 Hardware Environment

This ecosystem was designed and tested to run locally on the following hardware (Server "Papai"):

*  **Processor:** AMD Ryzen 9 5900XT (16 Cores / 32 Threads)
*  **RAM:** 64GB DDR4 3200MHz
*  **GPU:** NVIDIA GeForce RTX 2060 (12GB VRAM)
*  **Storage:** NVMe Gen4 (High-speed Read/Write)
*  **OS:** Linux Mint / Ubuntu

---

## 📦 0. Prerequisites

Ensure your Linux environment has the following tools installed:

1.  **Docker & Docker Compose**
* Required for the Postgres + pgvector database.
* Installation guide: [Docker for Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

2.  **Node.js (v24.x LTS or higher)**
* Required to run the ingestion scripts and the MCP server.
* Installation via NVM: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

3.  **Ollama**
* The local inference engine for embeddings and LLMs.
* Installation guide: [ollama.com/download](https://ollama.com/download)
*  *Linux quick install:*  `curl -fsSL https://ollama.com/install.sh | sh`

4.  **OpenClaude**
* The CLI interface that connects to the LLM and utilizes our MCP tools.
* Installation guide: [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude)

---

## 📂 Project Structure

This repository includes pre-fetched documentation (`docs_stack`) and all necessary setup scripts.

```text
.
├── bulk-fetch.js # Script to scrape and format documentation
├── docker
│ └── postgres
│ └── docker-compose.yml # Postgres + pgvector container config
├── docs_stack # Pre-downloaded Markdown documentation
│ ├── 00-stack-base.md
│ ├── mui/
│ ├── nextjs/ # 117 Next.js 16 documentation files
│ └── react/
├── ingest.js # Chunks markdown and saves vectors to Postgres
├── mcp-rag.js # MCP Server linking the DB to OpenClaude
├── package.json # Node dependencies (knex, pg, axios, sdk)
├── search.js # CLI utility to test vector search
└── setup-db.js # Initializes Postgres tables and HNSW indexes

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

### 3. Initialize the Database Schema

Run the setup script to create the `stack_knowledge` table and the HNSW vector index. *You only need to run this once.*

```bash
node setup-db.js
```

### 4. Download Ollama Models

Pull the required embedding model (for vectorizing text) and the main LLM (for chatting).
 
```bash
ollama pull nomic-embed-text
ollama pull qwen2.5:14b
```

> The 2.5:14b model, being more general than qwen2.5-coder, performed better in my tests. I believe the reason for this is that it is more "agentic" than the coder model.
> 
> I also tested the qwen3.5:9b model. Besides not producing very good results, I noticed that 9b was the minimum number of parameters needed to get good responses on my hardware. Although I continue to recommend the 14b models, I believe that the smaller models will perform worse as the context expands.

### 5. Ingest the Documentation (Populate the Brain)

Run the ingestion script. This will read all Markdown files in the `docs_stack/` folder, chunk them to avoid context limits, generate embeddings via Ollama, and save them to PostgreSQL using a "Delete & Replace" strategy.

```bash
node ingest.js
```

> **Quick question**: why do we need to download the documentation for next.js, auth0, and others?
> 
> The Qwen2.5 series templates generally have information updated until around June/July 2024. Therefore, they have no way of accessing new versions of next.js or even React. That's why we need this workaround to make it work (uma belíssima gambiarra).

---
## 🔌 Connecting the AI via MCP

The final step is to connect your local knowledge base to OpenClaude using the Model Context Protocol.

**1. Register the MCP Server:**

In your terminal, tell OpenClaude where your `mcp-rag.js` file is located.
*(Replace `/path/to/your/repo` with your actual absolute path).*

```bash
openclaude mcp add NameItWhateverYouWant node /path/to/your/repo/mcp-rag.js

#in my case
openclaude mcp add PapaiRAG node /home/fernando/IA/mcp-rag.js
```

> I named it PapaiRAG because I have more than one RAG running on my internal network. If you want to change this name, just replace it in the command above and in the mcp-rag.js file on line 21.

```javascript
// 2. Initialize MCP Server
const  server  =  new  Server({
name:  "Papai-RAG-Server",
version:  "1.0.0"
}, {
capabilities: { tools: {} }
});
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

Launch OpenClaude with your preferred local model:
```bash
openclaude -m qwen2.5:14b
```

---

## ⚙️ Optional: Linux Automation (Aliases)

To make managing the ecosystem easier, you can add these aliases to your `~/.bashrc` or `~/.zshrc`.
*(Note: Adjust `IA_DOCKER_PATH` to match your clone location).*

```bash
# === IA ECOSYSTEM (OLLAMA + RAG) ===
export IA_DOCKER_PATH="$HOME/IA/docker/postgres"
alias ia-on='sudo systemctl start ollama && docker compose -f $IA_DOCKER_PATH/docker-compose.yml up -d && echo "🚀 AI Ecosystem Active"'
alias ia-off='sudo systemctl stop ollama && docker compose -f $IA_DOCKER_PATH/docker-compose.yml stop && echo "💤 AI Ecosystem Offline"'
alias ia-status='systemctl status ollama && docker ps --filter name=postgres_ai_rag'
alias rag-db='docker exec -it postgres_ai_rag psql -U postgres -d rag_knowledge'
```
Apply the changes: `source ~/.bashrc`

*Tip: To use `ia-on` and `ia-off` without typing your password, add a `NOPASSWD` rule for `systemctl start/stop ollama` in your `visudo` file.*

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

If you'd like to chat about this project, send an email to  [contato@fernandotorres.dev.br](mailto:contato@fernandotorres.dev.br). Feel free to contribute by adding more documentation or improving the code.

