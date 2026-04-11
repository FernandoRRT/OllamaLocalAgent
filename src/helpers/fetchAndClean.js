import axios from 'axios';
import fs from 'fs';
import path from 'path';

export async function fetchAndClean(targetUrl, destinationDir) {
  console.log(`📥 Downloading: ${targetUrl}...`);
  try {
    const response = await axios.get(`https://r.jina.ai/${targetUrl}`);
    let md = response.data;

    // --- CLEAN-UP RAG-GRADE LOGIC ---

    // 1. CUT THE JINA METADATA & HEADERS
    const jinaHeaderMatch = md.match(/Markdown Content:\n+/);
    if (jinaHeaderMatch) {
      const cutIndex = jinaHeaderMatch.index + jinaHeaderMatch[0].length;
      if (cutIndex < 1000) {
        md = md.substring(cutIndex);
      }
    }

    const copyIndex = md.indexOf('Copy page');
    if (copyIndex !== -1 && copyIndex < md.length / 3) {
      md = md.substring(copyIndex + 'Copy page'.length);
    } else {
      const onThisPageIndex = md.indexOf('On this page');
      if (onThisPageIndex !== -1 && onThisPageIndex < md.length / 3) {
        md = md.substring(onThisPageIndex);
      }
    }

    // 2. DYNAMIC FOOTER CUT (Fixed False Positives)
    const footerMarkers = ['Was this helpful?', '\nPrevious\n', '\nNext\n', '## On this page'];
    for (const marker of footerMarkers) {
      const footerIndex = md.lastIndexOf(marker);
      if (footerIndex !== -1 && footerIndex > md.length / 2) {
        md = md.substring(0, footerIndex);
        md = md.replace(/[\[\(\-\s]+$/, '');
      }
    }

    // 3. REMOVE TABLE OF CONTENTS (TOC) BLOAT
    md = md.replace(/^[\s\-*]+\[.*?\]\(#.*?\)\s*$/gm, '');

    // 4. REMOVE IMAGES
    md = md.replace(/!\[.*?\]\(.*?\)/g, '');
    md = md.replace(/!Image\s\d+:.*?(\n|$)/g, '');

    // 5. REMOVE LINKS (Keep anchor text safely)
    // 5.a Remove the "Link for this heading" accessibility garbage
    md = md.replace(/ "Link for.*?"\)/g, ')');
    // 5.b DESTROY EMPTY LINKS (e.g., GitHub header anchors like [](url))
    md = md.replace(/\[\s*\]\([^)\n]+\)/g, '');
    // 5.c Safely extract the anchor text, explicitly forbidding nested brackets
    md = md.replace(/\[([^\[\]\n]+)\]\([^)\n]+\)/g, '$1');

    // 6. KILL RAG NOISE & UI ARTIFACTS
    md = md.replace(/Link for.*?(?=\n|$)/g, '');
    md = md.replace(/^(Copy page Copy|Copy|Show more|Show Details|Terminal)$/gm, '');
    md = md.replace(/Reload ClearFork.*?(?=\n|$)/g, '');
    md = md.replace(/(%[0-9A-F]{2}){10,}/gi, '');

    // 7. CLEAN UP SPACES AND ORPHANED DASHES
    md = md.replace(/^\*\s+$/gm, '');
    md = md.replace(/[ \t]{2,}/g, ' ');
    md = md.replace(/\n{3,}/g, '\n\n');

    // --- NAME GENERATION AND SAVING (Bulk Logic) ---

    const urlObj = new URL(targetUrl);
    const pathParts = urlObj.pathname.split('/').filter(p => p !== 'docs' && p !== 'app' && p !== '');
    
    let safeFileName = pathParts.join('-');
    if (!safeFileName.toLowerCase().endsWith('.md')) {
      safeFileName += '.md';
    }

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