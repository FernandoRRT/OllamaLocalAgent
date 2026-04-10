const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Base folder for this specific batch
const dirPath = path.resolve(__dirname, 'docs_stack/react');

const REACT_DOCS = [
  // --- GET STARTED ---
  { url: 'https://react.dev/learn' },
  { url: 'https://react.dev/learn/tutorial-tic-tac-toe' },
  { url: 'https://react.dev/learn/thinking-in-react' },
  { url: 'https://react.dev/learn/installation' },
  { url: 'https://react.dev/learn/creating-a-react-app' },
  { url: 'https://react.dev/learn/build-a-react-app-from-scratch' },
  { url: 'https://react.dev/learn/add-react-to-an-existing-project' },
  { url: 'https://react.dev/learn/setup' },
  { url: 'https://react.dev/learn/editor-setup' },
  { url: 'https://react.dev/learn/typescript' },
  { url: 'https://react.dev/learn/react-developer-tools' },
  
  // --- REACT COMPILER ---
  { url: 'https://react.dev/learn/react-compiler' },
  { url: 'https://react.dev/learn/react-compiler/introduction' },
  { url: 'https://react.dev/learn/react-compiler/installation' },
  { url: 'https://react.dev/learn/react-compiler/incremental-adoption' },
  { url: 'https://react.dev/learn/react-compiler/debugging' },

  // --- DESCRIBING THE UI ---
  { url: 'https://react.dev/learn/describing-the-ui' },
  { url: 'https://react.dev/learn/your-first-component' },
  { url: 'https://react.dev/learn/importing-and-exporting-components' },
  { url: 'https://react.dev/learn/writing-markup-with-jsx' },
  { url: 'https://react.dev/learn/javascript-in-jsx-with-curly-braces' },
  { url: 'https://react.dev/learn/passing-props-to-a-component' },
  { url: 'https://react.dev/learn/conditional-rendering' },
  { url: 'https://react.dev/learn/rendering-lists' },
  { url: 'https://react.dev/learn/keeping-components-pure' },
  { url: 'https://react.dev/learn/understanding-your-ui-as-a-tree' },

  // --- ADDING INTERACTIVITY ---
  { url: 'https://react.dev/learn/adding-interactivity' },
  { url: 'https://react.dev/learn/responding-to-events' },
  { url: 'https://react.dev/learn/state-a-components-memory' },
  { url: 'https://react.dev/learn/render-and-commit' },
  { url: 'https://react.dev/learn/state-as-a-snapshot' },
  { url: 'https://react.dev/learn/queueing-a-series-of-state-updates' },
  { url: 'https://react.dev/learn/updating-objects-in-state' },
  { url: 'https://react.dev/learn/updating-arrays-in-state' },

  // --- MANAGING STATE ---
  { url: 'https://react.dev/learn/managing-state' },
  { url: 'https://react.dev/learn/reacting-to-input-with-state' },
  { url: 'https://react.dev/learn/choosing-the-state-structure' },
  { url: 'https://react.dev/learn/sharing-state-between-components' },
  { url: 'https://react.dev/learn/preserving-and-resetting-state' },
  { url: 'https://react.dev/learn/extracting-state-logic-into-a-reducer' },
  { url: 'https://react.dev/learn/passing-data-deeply-with-context' },
  { url: 'https://react.dev/learn/scaling-up-with-reducer-and-context' },

  // --- ESCAPE HATCHES ---
  { url: 'https://react.dev/learn/escape-hatches' },
  { url: 'https://react.dev/learn/referencing-values-with-refs' },
  { url: 'https://react.dev/learn/manipulating-the-dom-with-refs' },
  { url: 'https://react.dev/learn/synchronizing-with-effects' },
  { url: 'https://react.dev/learn/you-might-not-need-an-effect' },
  { url: 'https://react.dev/learn/lifecycle-of-reactive-effects' },
  { url: 'https://react.dev/learn/separating-events-from-effects' },
  { url: 'https://react.dev/learn/removing-effect-dependencies' },
  { url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' }
];

async function fetchAndClean(targetUrl) {
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

    // 4. REMOVE LINKS (Keep anchor text)
    md = md.replace(/\[([^\]]*)\]\([^)]+\)/g, '$1');

    // 5. KILL RAG NOISE & UI ARTIFACTS
    md = md.replace(/Link for.*?(?=\n|$)/g, '');
    md = md.replace(/^(Copy page Copy|Copy|Show more|Terminal)$/gm, '');
    md = md.replace(/Reload ClearFork.*?(?=\n|$)/g, '');
    md = md.replace(/(%[0-9A-F]{2}){10,}/gi, ''); 

    // 6. CLEAN UP SPACES AND ORPHANED DASHES
    md = md.replace(/^\*\s+$/gm, ''); 
    md = md.replace(/\n{3,}/g, '\n\n'); 

    // --- NAME GENERATION AND SAVING (Bulk Logic) ---
    
    const urlObj = new URL(targetUrl);
    // Extract the path to create a secure filename (e.g., learn-typescript.md)
    const pathParts = urlObj.pathname.split('/').filter(p => p !== 'docs' && p !== 'app' && p !== '');
    const safeFileName = pathParts.join('-') + '.md';
    
    // Final path within docs_stack/react
    const fullPath = path.join(dirPath, safeFileName);
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
  console.log("🚀 Starting Bulk Fetch Stack...\n");
  
  // Clears the old directory to avoid phantom files from previous runs.
  if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
  }
  
  for (const doc of REACT_DOCS) {
    await fetchAndClean(doc.url);
    // Delay of 1s to respect the Rate Limit of Jina AI
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log("🎉 Bulk download completed!");
}

runBulk();