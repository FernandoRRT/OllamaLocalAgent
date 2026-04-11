import path from 'path';
import { runBulk } from '../helpers/runBulk.js';
import { DOCS_STACK_DIR } from '../helpers/constants.js';

// Now the path is always absolute and standard
const dirPath = path.join(DOCS_STACK_DIR, 'auth0');

// Put the URLs you want to fetch here (The 'file' property will be ignored to avoid collisions)
const DOCS = [
  // --- GET STARTED & README ---
  // Jina will parse the HTML from these landing pages and convert them to clean Markdown.
  { url: 'https://auth0.com/docs/quickstart/webapp/nextjs' },
  { url: 'https://github.com/auth0/nextjs-auth0' },

  // --- CRITICAL TECHNICAL DOCUMENTS ---
  // We use the 'raw' GitHub domain here to fetch only the text content.
  // This prevents Jina from downloading GitHub's UI (menus, buttons, etc.), 
  // ensuring the RAG only processes actual technical documentation.
  { url: 'https://raw.githubusercontent.com/auth0/nextjs-auth0/main/EXAMPLES.md' },
  { url: 'https://raw.githubusercontent.com/auth0/nextjs-auth0/main/V4_MIGRATION_GUIDE.md' },
  { url: 'https://raw.githubusercontent.com/auth0/nextjs-auth0/main/AGENTS.md' },
  { url: 'https://raw.githubusercontent.com/auth0/nextjs-auth0/main/SECURITY.md' },
];

// Triggers the script, passing the array, the destination, and the name to the log.
runBulk(DOCS, dirPath, "Auth0");