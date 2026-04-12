import path from 'path';
import { runBulk } from '../helpers/runBulk.js';
import { DOCS_STACK_DIR } from '../helpers/constants.js';

// Now the path is always absolute and standard
const dirPath = path.join(DOCS_STACK_DIR, 'zod');

// Put the URLs you want to fetch here (The 'file' property will be ignored to avoid collisions)
const DOCS = [
  // --- GET STARTED & README ---
  { url: 'https://zod.dev/v4/changelog' },
  { url: 'https://zod.dev/api' },
  { url: 'https://zod.dev/error-customization' },
  { url: 'https://zod.dev/error-formatting' },
  { url: 'https://zod.dev/json-schema' },
  { url: 'https://zod.dev/packages/mini' }
  ,
];

// Triggers the script, passing the array, the destination, and the name to the log.
runBulk(DOCS, dirPath, "Zod");