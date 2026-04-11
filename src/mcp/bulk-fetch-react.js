import path from 'path';
import { runBulk } from '../helpers/runBulk.js';
import { DOCS_STACK_DIR } from '../helpers/constants.js';

// Now the path is always absolute and standard
const dirPath = path.join(DOCS_STACK_DIR, 'react');

// Put the URLs you want to fetch here (The 'file' property will be ignored to avoid collisions)
const DOCS = [
  // --- CORE CONCEPTS & PHILOSOPHY ---
  { url: 'https://react.dev/learn/thinking-in-react' }, // The fundamental mental model
  { url: 'https://react.dev/learn/typescript' }, // Best practices for TS with React
  { url: 'https://react.dev/learn/react-compiler' }, // New React 19 compiler architecture

  // --- DESCRIBING THE UI (The "What") ---
  { url: 'https://react.dev/learn/describing-the-ui' }, // Overview of components and JSX
  { url: 'https://react.dev/learn/passing-props-to-a-component' }, // Props & Data flow
  { url: 'https://react.dev/learn/rendering-lists' }, // Keys and list transformation
  { url: 'https://react.dev/learn/keeping-components-pure' }, // Crucial: Side-effect management
  { url: 'https://react.dev/learn/understanding-your-ui-as-a-tree' }, // Render tree & Module tree logic

  // --- ADDING INTERACTIVITY (The "How") ---
  { url: 'https://react.dev/learn/state-a-components-memory' }, // State fundamentals
  { url: 'https://react.dev/learn/render-and-commit' }, // Step-by-step render cycle
  { url: 'https://react.dev/learn/state-as-a-snapshot' }, // Why state doesn't update immediately
  { url: 'https://react.dev/learn/queueing-a-series-of-state-updates' }, // Batching logic
  { url: 'https://react.dev/learn/updating-objects-in-state' }, // Immutability patterns (objects)
  { url: 'https://react.dev/learn/updating-arrays-in-state' }, // Immutability patterns (arrays)

  // --- MANAGING STATE (Scaling) ---
  { url: 'https://react.dev/learn/managing-state' }, // State structure principles
  { url: 'https://react.dev/learn/sharing-state-between-components' }, // Lifting state up
  { url: 'https://react.dev/learn/preserving-and-resetting-state' }, // Reconciliation & Keys
  { url: 'https://react.dev/learn/extracting-state-logic-into-a-reducer' }, // useReducer pattern
  { url: 'https://react.dev/learn/passing-data-deeply-with-context' }, // Context API

  // --- ESCAPE HATCHES (Advanced & Critical) ---
  { url: 'https://react.dev/learn/referencing-values-with-refs' }, // useRef (non-triggering state)
  { url: 'https://react.dev/learn/manipulating-the-dom-with-refs' }, // DOM access best practices
  { url: 'https://react.dev/learn/synchronizing-with-effects' }, // useEffect fundamentals
  { url: 'https://react.dev/learn/you-might-not-need-an-effect' }, // Avoiding Effect bloat (High priority)
  { url: 'https://react.dev/learn/lifecycle-of-reactive-effects' }, // Effect dependency logic
  { url: 'https://react.dev/learn/reusing-logic-with-custom-hooks' } // Custom Hooks architecture
];

// Triggers the script, passing the array, the destination, and the name to the log.
runBulk(DOCS, dirPath, "React 19");