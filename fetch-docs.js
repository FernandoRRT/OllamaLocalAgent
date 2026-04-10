const axios = require('axios');
const fs = require('fs');
const path = require('path');

const targetUrl = process.argv[2];
const savePath = process.argv[3];

if (!targetUrl || !savePath) {
  console.log("❌ Use: node fetch-docs.js <URL> <EXIT_PATH>");
  process.exit(1);
}

async function fetchAndClean() {
  console.log(`📥 Downloading from: ${targetUrl}...`);
  
  try {
    const response = await axios.get(`https://r.jina.ai/${targetUrl}`);
    let md = response.data;

    console.log("🧹 Sanitizing content...");

    // 1. CUT THE HEADER (THE GLOBAL MENU)
    // Jina injects 'Copy page' right before the real H1 of the content.
    const copyIndex = md.indexOf('Copy page');
    if (copyIndex !== -1) {
      // Cut everything before and include the length of 'Copy page' to remove it as well
      md = md.substring(copyIndex + 'Copy page'.length);
    } else {
      // Security fallback in case 'Copy page' is not present
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

    // 4. REMOVE LINKS (Keep only the anchor text)
    md = md.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

    // 5. CLEAN UP SPACES AND ORPHANED DASHES (Generated when removing links from the menu)
    md = md.replace(/^\*\s+$/gm, ''); // Remove empty bullets
    md = md.replace(/\n{3,}/g, '\n\n'); // Standardize line breaks

    // Save the final file
    const fullPath = path.resolve(__dirname, savePath);
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
