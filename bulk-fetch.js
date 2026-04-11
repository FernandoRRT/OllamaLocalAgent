// bulk-fetch.js
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import readline from 'node:readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target directory where the bulk scripts are stored
const mcpDir = path.join(__dirname, 'src', 'mcp');

async function runMenu() {
  try {
    // 1. Read directory and filter only .js files
    const files = await fs.readdir(mcpDir);
    const scripts = files.filter(f => f.endsWith('.js'));

    if (scripts.length === 0) {
      console.log('⚠️ No fetch scripts found in ./src/mcp');
      return;
    }

    // 2. Build the CLI Menu
    console.log('\n📦 RAG Bulk Fetch Commander');
    console.log('==============================');
    scripts.forEach((script, index) => {
      console.log(`[${index + 1}] - ${script}`);
    });
    console.log(`[0] - Exit`);
    console.log('==============================\n');

    // 3. Setup standard input/output
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // 4. Capture user input
    rl.question('👉 Select a script to run: ', async (answer) => {
      const choice = parseInt(answer, 10);

      if (choice === 0) {
        console.log('Exiting...');
        rl.close();
        return;
      }

      if (isNaN(choice) || choice < 1 || choice > scripts.length) {
        console.log('❌ Invalid option. Run the script again.');
        rl.close();
        return;
      }

      const selectedScript = scripts[choice - 1];
      const scriptPath = path.join(mcpDir, selectedScript);

      console.log(`\n🚀 Executing: ${selectedScript}...\n`);
      rl.close();

      try {
        // 5. Dynamic import executes the ES Module immediately
        // Note: 'file://' prefix is required for dynamic absolute path imports in Node.js ESM
        await import(`file://${scriptPath}`);
      } catch (importError) {
        console.error(`❌ Error executing ${selectedScript}:`, importError);
      }
    });

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`❌ Directory not found: ${mcpDir}. Please create it.`);
    } else {
      console.error('❌ Error reading directory:', error);
    }
  }
}

runMenu();