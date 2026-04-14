import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This points to the root of your project (~/IA)
export const PROJECT_ROOT = path.resolve(__dirname, '../../');

export const DOCS_STACK_DIR = path.join(PROJECT_ROOT, 'docs');

console.log(`📍 Project Root identified at: ${PROJECT_ROOT}`);
console.log(`📚 Saving documents to: ${DOCS_STACK_DIR}`);