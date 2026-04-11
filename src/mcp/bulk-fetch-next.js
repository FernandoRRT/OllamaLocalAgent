import path from 'path';
import { runBulk } from '../helpers/runBulk.js';
import { DOCS_STACK_DIR } from '../helpers/constants.js';

// Now the path is always absolute and standard
const dirPath = path.join(DOCS_STACK_DIR, 'nextjs');

// Put the URLs you want to fetch here (The 'file' property will be ignored to avoid collisions)
const DOCS = [
  // --- GETTING STARTED & GUIDES ---
  { url: 'https://nextjs.org/docs/app/getting-started' }, // Getting Started overview
  { url: 'https://nextjs.org/docs/app/getting-started/installation' }, // Installation
  { url: 'https://nextjs.org/docs/app/getting-started/project-structure' }, // Project Structure
  { url: 'https://nextjs.org/docs/app/getting-started/layouts-and-pages' }, // Layouts and Pages
  { url: 'https://nextjs.org/docs/app/getting-started/server-and-client-components' }, // Server/Client Components
  { url: 'https://nextjs.org/docs/app/getting-started/fetching-data' }, // Data Fetching
  { url: 'https://nextjs.org/docs/app/getting-started/route-handlers' }, // Route Handlers
  { url: 'https://nextjs.org/docs/app/guides/authentication' }, // Authentication
  { url: 'https://nextjs.org/docs/app/guides/caching' }, // Caching mechanics
  { url: 'https://nextjs.org/docs/app/guides/error-handling' }, // Error Handling
  { url: 'https://nextjs.org/docs/app/guides/forms' }, // Forms & Mutations
  { url: 'https://nextjs.org/docs/app/guides/internationalization' }, // i18n
  { url: 'https://nextjs.org/docs/app/guides/middleware' }, // Middleware (Crucial for Auth0)
  { url: 'https://nextjs.org/docs/app/guides/server-actions' }, // Server Actions
  { url: 'https://nextjs.org/docs/app/guides/testing' }, // Testing overview

  // --- DIRECTIVES & COMPONENTS ---
  { url: 'https://nextjs.org/docs/app/api-reference/directives' }, // Covers use-client, use-server, etc.
  { url: 'https://nextjs.org/docs/app/api-reference/components' }, // Overview of built-in components
  { url: 'https://nextjs.org/docs/app/api-reference/components/image' }, // <Image>
  { url: 'https://nextjs.org/docs/app/api-reference/components/link' }, // <Link>
  { url: 'https://nextjs.org/docs/app/api-reference/components/form' }, // <Form>
  { url: 'https://nextjs.org/docs/app/api-reference/components/script' }, // <Script>

  // --- FILE CONVENTIONS (Keep the main files, drop sub-configs like maxDuration) ---
  { url: 'https://nextjs.org/docs/app/api-reference/file-conventions/layout' }, // layout.js
  { url: 'https://nextjs.org/docs/app/api-reference/file-conventions/page' }, // page.js
  { url: 'https://nextjs.org/docs/app/api-reference/file-conventions/route' }, // route.js
  { url: 'https://nextjs.org/docs/app/api-reference/file-conventions/loading' }, // loading.js
  { url: 'https://nextjs.org/docs/app/api-reference/file-conventions/error' }, // error.js
  { url: 'https://nextjs.org/docs/app/api-reference/file-conventions/not-found' }, // not-found.js
  { url: 'https://nextjs.org/docs/app/api-reference/file-conventions/middleware' }, // middleware.js
  { url: 'https://nextjs.org/docs/app/api-reference/file-conventions/metadata' }, // Metadata object API
  { url: 'https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config' }, // Consolidates runtime, maxDuration, etc.

  // --- FUNCTIONS API (Keep the highly utilized ones) ---
  { url: 'https://nextjs.org/docs/app/api-reference/functions/cookies' }, // cookies()
  { url: 'https://nextjs.org/docs/app/api-reference/functions/headers' }, // headers()
  { url: 'https://nextjs.org/docs/app/api-reference/functions/next-request' }, // NextRequest
  { url: 'https://nextjs.org/docs/app/api-reference/functions/next-response' }, // NextResponse
  { url: 'https://nextjs.org/docs/app/api-reference/functions/redirect' }, // redirect()
  { url: 'https://nextjs.org/docs/app/api-reference/functions/revalidatePath' }, // revalidatePath()
  { url: 'https://nextjs.org/docs/app/api-reference/functions/revalidateTag' }, // revalidateTag()
  { url: 'https://nextjs.org/docs/app/api-reference/functions/use-router' }, // useRouter()
  { url: 'https://nextjs.org/docs/app/api-reference/functions/use-search-params' }, // useSearchParams()
  { url: 'https://nextjs.org/docs/app/api-reference/functions/use-pathname' }, // usePathname()

  // --- CONFIGURATION (One parent page to rule them all) ---
  { url: 'https://nextjs.org/docs/app/api-reference/config/next-config-js' } // Consolidates all next.config.js options
];

// Triggers the script, passing the array, the destination, and the name to the log.
runBulk(DOCS, dirPath, "Next.js");