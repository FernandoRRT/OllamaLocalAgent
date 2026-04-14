# 🧠 Local AI Doc Scraper: Markdown Curation for AI Agents

This repository contains an optimized web-scraping ecosystem designed to download, sanitize, and format technical documentation (like Next.js 16, MUI v9, Auth0) into clean Markdown files. 

These files are perfectly curated to be used as context (via `@` mentions or auto-indexing) by modern Local AI Agents running on your machine, such as **Roo Code**, **Cline**, or **Continue.dev**.

> **Evolution Note:** This project originally included a heavy Postgres+MCP setup. With the evolution of agentic extensions in 2026 that handle local indexing automatically (using models like `nomic-embed-text`), this repo pivoted to focus entirely on what matters most: **providing the cleanest possible data for the AI.**

## 💻 Hardware Environment

This project was developed and tested on the following hardware (Server "Papai"):

- **Processor:** AMD Ryzen 9 5900XT (16 Cores / 32 Threads)
- **RAM:** 48GB DDR4 3200MHz
- **GPU:** NVIDIA GeForce RTX 2060 (12GB VRAM) - *Used for running the local LLMs alongside the scraped docs.*
- **OS:** Linux Mint / Ubuntu

---

## 📦 0. Prerequisites

Ensure your Linux environment has Node.js installed to run the scraping engine:

- **Node.js (v24.x LTS or higher)**
  - Installation via NVM: [nvm-sh/nvm](https://github.com/nvm-sh/nvm)

---

## 📂 Project Structure

This repository includes pre-fetched documentation (`docs/`) and the scraping engine.

```text
.
├── docs/                          # Pre-downloaded & Sanitized Markdown
│   ├── auth0-nextjs/              # Auth0 SDK v4 documentation
│   ├── material ui/               # Material UI 9 documentation
│   ├── nextjs/                    # Next.js 16 documentation
│   ├── react/                     # React 19 documentation
│   └── zod/                       # Zod 4 documentation
├── src/                           # Core application logic
│   └── helpers/
│       ├── constants.js           # Shared paths (like docs base path)
│       ├── fetchAndClean.js       # Sanitization Regex engine (The "Sanitizer")
│       └── runBulk.js             # Bulk execution orchestrator
├── bulk-scrap.js                  # Centralized Bulk Scrape Commander (CLI Menu)
├── scrap-docs.js                  # CLI utility to scrape a single documentation page
└── bulk-scrap-configs/            # Curated URLs for specific frameworks
    ├── bulk-scrap-auth0.js
    ├── bulk-scrap-next.js
    ├── bulk-scrap-react.js
    └── bulk-scrap-zod.js
```

---

## 🚀 Installation & Setup

### 1. Install Node Dependencies

Install the required packages to run the scraper (`axios`, `cheerio`, `turndown`, etc.).

```bash
npm install
```

### 2. Scrape a Single Document

You can download and sanitize a specific documentation page using the script below. It will save the content as a `.md` file in your `docs/` folder:

```bash
node scrap-docs.js [https://example.com](https://example.com) /example/doc-name.md
```

### 3. Bulk Download (The Scrape Commander)

This project features a centralized **Bulk Scrape Commander** to manage complete framework documentation. Instead of running individual files, use this single entry point to select which stack you want to download or update:

```bash
node bulk-scrap.js
```

##### 💡 Usage Tips

1.  **Extensibility:** To create a scrape script for a new framework, simply duplicate one of the `bulk-scrap-*.js` files in the `/bulk-scrap-configs` folder and update the URLs array.
2.  **Auto-Discovery:** Any new script created in that folder will be automatically added to the `bulk-scrap.js` menu.
3.  **Orchestration:** The heavy lifting of downloading, cleaning, and avoiding infinite loops is safely handled by `src/helpers/runBulk.js`.

---

## 🧠 Smart Sanitization Engine

Unlike generic scrapers, our `src/helpers/fetchAndClean.js` utilizes a multi-step regex pipeline specifically tuned to save LLM tokens and avoid AI hallucinations:

1.  **GitHub Artifact Removal:** Automatically kills empty header anchors `[](url)` and "Copy" buttons.
2.  **Context Preservation:** Strips Table of Contents (TOC) but keeps the anchor text to save embedding tokens.
3.  **Hex Hash Filtering:** Removes long commit hashes and cache busters that cause vector noise.
4.  **Markdown Refinement:** Converts links to plain text to prevent the LLM from hallucinating broken URLs.

---

## 🤖 How to use with Local AI Agents (Roo Code / Cline)

Now that you have your `docs/` folder filled with clean Markdown, you don't need complex vector databases.

1. Open your project in your IDE.
2. Ensure you have **Roo Code** (or a similar agent) installed.
3. Set your Local Provider to **Ollama** and select your main thinking model (e.g., `gemma4:e4b`).
4. In the chat, simply type `@` and select the specific documentation folder or file you need. 
5. The agent will read the sanitized Markdown directly from your local disk and write code using the correct versions!

> **Quick question**: why do we need to download the documentation for next.js, auth0, and others?
>
> Open-weight models (like Gemma 4 or Qwen) have a training cutoff. They have no way of accessing brand-new syntax for Next.js 15+ or MUI v9 on their own. That's why we need this workaround to make them write up-to-date code (uma belíssima gambiarra).

---

## ⚙️ Optional: Linux Automation (Aliases)

To easily manage your Ollama instance, add these aliases to your `~/.bashrc` or `~/.zshrc`:

```bash
# === IA ECOSYSTEM (OLLAMA ONLY) ===
alias ia-on='sudo systemctl start ollama && echo "🚀 Ollama On"'
alias ia-off='sudo systemctl stop ollama && echo "💤 Ollama Off"'
alias ia-status='systemctl status ollama'
alias ia-list='ollama list'
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

I started this project on April 7th, 2026, and depending on the size of the Next.js docs, I might still be downloading it today.

If you'd like to chat about this project, send an email to [contato@fernandotorres.dev.br](mailto:contato@fernandotorres.dev.br).