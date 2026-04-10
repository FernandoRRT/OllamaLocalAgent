import path from 'path';
import { fileURLToPath } from 'url';
import { runBulk } from './src/helpers/runBulk.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the correct destination folder
const dirPath = path.resolve(__dirname, 'docs_stack/react');

// Put the URLs you want to fetch here (The 'file' property will be ignored to avoid collisions)
const DOCS = [
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

// Triggers the script, passing the array, the destination, and the name to the log.
runBulk(DOCS, dirPath, "React 19");