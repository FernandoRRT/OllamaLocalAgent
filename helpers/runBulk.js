import fs from 'fs';
import { fetchAndClean } from './fetchAndClean.js';

export async function runBulk(docsArray, dirPath, stackName = "Stack") {
    console.log(`🚀 Starting Bulk Fetch of ${stackName} (${docsArray.length} files)...\n`);

    // Clears the old directory for safety
    if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
    }

    for (const doc of docsArray) {
        await fetchAndClean(doc.url, dirPath);
        // 3 second delay to respect API Rate Limit
        await new Promise(resolve => setTimeout(resolve, 3000));
    }

    console.log(`🎉 Bulk download of ${stackName} completed!`);
}