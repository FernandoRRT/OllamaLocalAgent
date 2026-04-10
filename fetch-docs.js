import path from 'path';
import { fileURLToPath } from 'url';
import { fetchAndClean } from './src/helpers/fetchAndClean.js';

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read CLI arguments
const targetUrl = process.argv[2];
const rawSavePath = process.argv[3];

if (!targetUrl || !rawSavePath) {
  console.log("❌ Use: node fetch-docs.js <URL> <EXIT_PATH>");
  process.exit(1);
}

// Ensure the local storage logic works exactly as before
const cleanSavePath = rawSavePath.replace(/^(\.\/|\/)+/, '');
// We define the final destination directory based on the CLI input
const destinationDir = path.dirname(path.join(__dirname, 'docs_stack', cleanSavePath));

console.log("🚀 Starting single-file fetch...");

// We await the centralized helper, passing the URL and the calculated directory
await fetchAndClean(targetUrl, destinationDir);