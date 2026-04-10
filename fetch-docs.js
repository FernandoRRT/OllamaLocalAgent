const axios = require('axios');
const fs = require('fs');
const path = require('path');

const targetUrl = process.argv[2];
const rawSavePath = process.argv[3];

if (!targetUrl || !rawSavePath) {
  console.log("❌ Use: node fetch-docs.js <URL> <EXIT_PATH>");
  process.exit(1);
}

async function fetchAndClean() {
  console.log(`📥 Downloading from: ${targetUrl}...`);
  
  try {
    const response = await axios.get(`https://r.jina.ai/${targetUrl}`);
    let md = response.data;

    console.log("🧹 Sanitizing content for Vector DB...");

    // 1. CUT THE HEADER
    const copyIndex = md.indexOf('Copy page');
    if (copyIndex !== -1) {
      md = md.substring(copyIndex + 'Copy page'.length);
    } else {
      const onThisPageIndex = md.indexOf('On this page');
      if (onThisPageIndex !== -1 && onThisPageIndex < md.length / 3) {
        // Only cut if 'On this page' is near the top (table of contents)
        md = md.substring(onThisPageIndex);
      }
    }

// 2. DYNAMIC FOOTER CUT
    const footerMarkers = ['Was this helpful?', 'Previous ', 'Next ', '## On this page'];
    for (const marker of footerMarkers) {
      const footerIndex = md.lastIndexOf(marker);
      if (footerIndex !== -1 && footerIndex > md.length / 2) {
        // Cut the footer
        md = md.substring(0, footerIndex);
        // Clean up hanging brackets or symbols left exactly at the cut point
        md = md.replace(/[\[\(\-\s]+$/, ''); 
      }
    }

    // 3. REMOVE IMAGES
    md = md.replace(/!\[.*?\]\(.*?\)/g, '');
    md = md.replace(/!Image\s\d+:.*?(\n|$)/g, ''); 

    // 4. REMOVE LINKS (Keep anchor text)
    // FIX: Changed + to * to successfully catch and destroy EMPTY brackets like [](url)
    md = md.replace(/\[([^\]]*)\]\([^)]+\)/g, '$1');

    // --- NEW: 5. KILL RAG NOISE & UI ARTIFACTS ---
    
    // 5.1 Remove leftover accessibility labels that might have escaped the link removal
    md = md.replace(/Link for.*?(?=\n|$)/g, '');
    
    // 5.2 Remove isolated UI button text
    md = md.replace(/^(Copy page Copy|Copy|Show more|Terminal)$/gm, '');

    // 5.3 Nuke Sandbox/Playground artifacts and massive URL-encoded strings
    md = md.replace(/Reload ClearFork.*?(?=\n|$)/g, '');
    md = md.replace(/(%[0-9A-F]{2}){10,}/gi, ''); 

    // 6. CLEAN UP SPACES AND ORPHANED DASHES
    md = md.replace(/^\*\s+$/gm, ''); 
    md = md.replace(/\n{3,}/g, '\n\n');

    // --- ENFORCED LOCAL STORAGE LOGIC ---
    const cleanSavePath = rawSavePath.replace(/^(\.\/|\/)+/, '');
    const fullPath = path.join(__dirname, 'docs_stack', cleanSavePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(fullPath, md.trim(), 'utf-8');
    console.log(`✅ File cleaned and saved to: ${fullPath}`);

  } catch (error) {
    console.error("❌ Error fetching document:", error.message);
  }
}

fetchAndClean();