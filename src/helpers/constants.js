import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This points to the root of your project (~/IA)
// Since this file is in src/helpers, we go up two levels
export const PROJECT_ROOT = path.resolve(__dirname, '../../');

// Default path for all documentation
export const DOCS_STACK_DIR = path.join(PROJECT_ROOT, 'docs_stack');

console.log(`📍 Project Root identified at: ${PROJECT_ROOT}`);