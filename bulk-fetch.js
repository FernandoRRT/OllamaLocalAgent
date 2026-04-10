const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Your array was extracted accurately! (The 'file' property will be ignored to avoid collisions)
const NEXT_DOCS = [
  { url: 'https://react.dev/learn/typescript' },
];

async function fetchAndClean(targetUrl) {
  console.log(`📥 Downloading: ${targetUrl}...`);
  try {
    const response = await axios.get(`https://r.jina.ai/${targetUrl}`);
    let md = response.data;

    // 1. CUT THE HEADER (The Global Menu)
    const copyIndex = md.indexOf('Copy page');
    if (copyIndex !== -1) {
      md = md.substring(copyIndex + 'Copy page'.length);
    } else {
      const onThisPageIndex = md.indexOf('On this page');
      if (onThisPageIndex !== -1) {
        md = md.substring(onThisPageIndex);
      }
    }

    // 2. CUT THE FOOTER
    const footerIndex = md.indexOf('Was this helpful?');
    if (footerIndex !== -1) {
      md = md.substring(0, footerIndex);
    }

    // 3. REMOVE IMAGES 
    md = md.replace(/!\[.*?\]\(.*?\)/g, '');
    md = md.replace(/!Image\s\d+:.*?(\n|$)/g, ''); 

    // 4. REMOVE LINKS
    md = md.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

    // 5. CLEAN UP SPACES AND ORPHANED DASHES
    md = md.replace(/^\*\s+$/gm, ''); 
    md = md.replace(/\n{3,}/g, '\n\n'); 

    // GENERATING A SAFE FILE NAME
    const urlObj = new URL(targetUrl);
    // Gets the path, ignores the repetitive and empty parts
    const pathParts = urlObj.pathname.split('/').filter(p => p !== 'docs' && p !== 'app' && p !== '');
    const safeFileName = pathParts.join('-') + '.md';
    
    // Saves the final file
    const fullPath = path.resolve(__dirname, 'docs_stack/nextjs', safeFileName);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(fullPath, md.trim(), 'utf-8');
    console.log(`✅ Saved to: ${safeFileName}\n`);

  } catch (error) {
    console.error(`❌ Error in ${targetUrl}:`, error.message);
  }
}

async function runBulk() {
  console.log("🚀 Starting Bulk Fetch of Next.js Stack (117 files)...\n");
  
  // Clears the old directory first for safety
  const dirPath = path.resolve(__dirname, 'docs_stack/nextjs');
  if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
  }
  
  for (const doc of NEXT_DOCS) {
    await fetchAndClean(doc.url);
    // IMPORTANT: Maintain a 1s delay to avoid being blocked by the Jina API.
    // The process will take approximately 2 minutes to complete.
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log("🎉 Bulk download completed! Run the 'cat' command to unify.");
}

runBulk();
