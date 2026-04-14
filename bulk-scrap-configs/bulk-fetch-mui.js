import path from 'path';
import { runBulk } from '../src/helpers/runBulk.js';
import { DOCS_STACK_DIR } from '../src/helpers/constants.js';

// Now the path is always absolute and standard
const dirPath = path.join(DOCS_STACK_DIR, 'mui');

// Put the URLs you want to fetch here (The 'file' property will be ignored to avoid collisions)
/**
 * MUI Documentation Stack for RAG Ingestion
 * Optimized for Next.js 16 / React 19 context.
 */
const DOCS = [
  // --- CORE ARCHITECTURE & SETUP ---
  { url: 'https://mui.com/material-ui/getting-started/' },
  { url: 'https://mui.com/material-ui/getting-started/installation/' },
  { url: 'https://mui.com/material-ui/getting-started/usage/' },
  { url: 'https://mui.com/material-ui/getting-started/supported-platforms/' },
  { url: 'https://mui.com/material-ui/getting-started/faq/' },

  // --- LLM SPECIFIC ASSETS ---
  { url: 'https://mui.com/material-ui/llms.txt' },
  { url: 'https://mui.com/material-ui/getting-started/mcp/' },

  // --- THEMING & CUSTOMIZATION (EMOTION) ---
  { url: 'https://mui.com/material-ui/customization/how-to-customize/' },
  { url: 'https://mui.com/material-ui/guides/building-extensible-themes/' },
  { url: 'https://mui.com/material-ui/experimental-api/classname-generator/' },

  // --- INTEGRATIONS & MODERN STACK ---
  { url: 'https://mui.com/material-ui/integrations/tailwindcss/tailwindcss-v4/' },
  { url: 'https://mui.com/material-ui/migration/upgrade-to-grid-v2/' },

  // --- INPUTS (Critical for Forms) ---
  { url: 'https://mui.com/material-ui/react-autocomplete/' },
  { url: 'https://mui.com/material-ui/react-button/' },
  { url: 'https://mui.com/material-ui/react-checkbox/' },
  { url: 'https://mui.com/material-ui/react-text-field/' },
  { url: 'https://mui.com/material-ui/react-select/' },
  { url: 'https://mui.com/material-ui/react-switch/' },
  { url: 'https://mui.com/material-ui/react-number-field/' },

  // --- DATA DISPLAY & TABLES ---
  { url: 'https://mui.com/material-ui/react-avatar/' },
  { url: 'https://mui.com/material-ui/react-chip/' },
  { url: 'https://mui.com/material-ui/react-table/' },
  { url: 'https://mui.com/material-ui/react-typography/' },
  { url: 'https://mui.com/material-ui/react-tooltip/' },

  // --- FEEDBACK & OVERLAYS ---
  { url: 'https://mui.com/material-ui/react-alert/' },
  { url: 'https://mui.com/material-ui/react-dialog/' },
  { url: 'https://mui.com/material-ui/react-progress/' },
  { url: 'https://mui.com/material-ui/react-snackbar/' },

  // --- NAVIGATION & SURFACES ---
  { url: 'https://mui.com/material-ui/react-accordion/' },
  { url: 'https://mui.com/material-ui/react-app-bar/' },
  { url: 'https://mui.com/material-ui/react-card/' },
  { url: 'https://mui.com/material-ui/react-drawer/' },
  { url: 'https://mui.com/material-ui/react-menu/' },
  { url: 'https://mui.com/material-ui/react-tabs/' },

  // --- LAYOUT ENGINE (High Value for Design Consistency) ---
  { url: 'https://mui.com/material-ui/react-box/' },
  { url: 'https://mui.com/material-ui/react-container/' },
  { url: 'https://mui.com/material-ui/react-grid/' },
  { url: 'https://mui.com/material-ui/react-stack/' },

  // --- UTILS & HOOKS (Essential for logic) ---
  { url: 'https://mui.com/material-ui/react-use-media-query/' },
  { url: 'https://mui.com/material-ui/react-css-baseline/' },
  { url: 'https://mui.com/material-ui/transitions/' },

  // --- MUI X (Advanced Data Handling) ---
  { url: 'https://mui.com/x/react-data-grid/' },
  { url: 'https://mui.com/x/react-date-pickers/' },
  // --- CORE CUSTOMIZATION & SLOTS ---
  // Teaches Qwen how to inject styles without breaking React 19's virtual DOM.
  { url: 'https://mui.com/material-ui/customization/how-to-customize/' },
  { url: 'https://mui.com/material-ui/customization/overriding-component-structure/' }, // Critical for Slots API
  
  // --- THEME ENGINE (Global Overrides) ---
  // Keeps your repository code clean and centralized within theme.ts.
  { url: 'https://mui.com/material-ui/customization/default-theme/' },
  { url: 'https://mui.com/material-ui/customization/theming/' },
  { url: 'https://mui.com/material-ui/customization/creating-themed-components/' },
  { url: 'https://mui.com/material-ui/customization/theme-components/' },

  // --- DESIGN TOKENS & RESPONSIVENESS ---
  { url: 'https://mui.com/material-ui/customization/palette/' },
  { url: 'https://mui.com/material-ui/customization/typography/' },
  { url: 'https://mui.com/material-ui/customization/spacing/' },
  { url: 'https://mui.com/material-ui/customization/breakpoints/' },
  { url: 'https://mui.com/material-ui/customization/container-queries/' }, // New: Essential for modern responsive design

  // --- NEXT.JS 16 SSR & PERFORMANCE (CSS Variables) ---
  // Mandatory for Dark Mode in App Router to prevent FOUC (Flash of Unstyled Content).
  { url: 'https://mui.com/material-ui/customization/dark-mode/' },
  { url: 'https://mui.com/material-ui/customization/css-theme-variables/overview/' },
  { url: 'https://mui.com/material-ui/customization/css-theme-variables/usage/' },
  { url: 'https://mui.com/material-ui/customization/css-layers/' }
];
// Triggers the script, passing the array, the destination, and the name to the log.
runBulk(DOCS, dirPath, "Material Ui");