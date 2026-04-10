import axios from 'axios';
import fs from 'fs';
import path from 'path';

export async function fetchAndClean(targetUrl, destinationDir) {
  console.log(`📥 Downloading: ${targetUrl}...`);
  try {
    const response = await axios.get(`https://r.jina.ai/${targetUrl}`);
    let md = response.data;

    // --- CLEAN-UP RAG-GRADE LOGIC ---

    // 1. CUT THE HEADER
    const copyIndex = md.indexOf('Copy page');
    if (copyIndex !== -1) {
      md = md.substring(copyIndex + 'Copy page'.length);
    } else {
      const onThisPageIndex = md.indexOf('On this page');
      if (onThisPageIndex !== -1 && onThisPageIndex < md.length / 3) {
        md = md.substring(onThisPageIndex);
      }
    }

    // 2. DYNAMIC FOOTER CUT
    const footerMarkers = ['Was this helpful?', 'Previous ', 'Next ', '## On this page'];
    for (const marker of footerMarkers) {
      const footerIndex = md.lastIndexOf(marker);
      if (footerIndex !== -1 && footerIndex > md.length / 2) {
        md = md.substring(0, footerIndex);
        md = md.replace(/[\[\(\-\s]+$/, ''); 
      }
    }

    // 3. REMOVE IMAGES
    md = md.replace(/!\[.*?\]\(.*?\)/g, '');
    md = md.replace(/!Image\s\d+:.*?(\n|$)/g, ''); 

// 4. REMOVE LINKS (Keep anchor text & handle nested parentheses inside link titles)
    md = md.replace(/\[([^\]]*)\]\((?:[^()]+|\([^()]*\))*\)/g, '$1');

    // 5. KILL RAG NOISE & UI ARTIFACTS
    md = md.replace(/Link for.*?(?=\n|$)/g, '');
    md = md.replace(/^(Copy page Copy|Copy|Show more|Show Details|Terminal)$/gm, '');
    md = md.replace(/Reload ClearFork.*?(?=\n|$)/g, '');
    md = md.replace(/(%[0-9A-F]{2}){10,}/gi, ''); 

    // 6. CLEAN UP SPACES AND ORPHANED DASHES
    md = md.replace(/^\*\s+$/gm, ''); 
    md = md.replace(/[ \t]{2,}/g, ' ');
    md = md.replace(/\n{3,}/g, '\n\n');

    // --- NAME GENERATION AND SAVING (Bulk Logic) ---
    
    const urlObj = new URL(targetUrl);
    // Extract the path to create a secure filename (e.g., learn-typescript.md)
    const pathParts = urlObj.pathname.split('/').filter(p => p !== 'docs' && p !== 'app' && p !== '');
    const safeFileName = pathParts.join('-') + '.md';
    
    // Final path within docs_stack/react
    const fullPath = path.join(destinationDir, safeFileName);
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