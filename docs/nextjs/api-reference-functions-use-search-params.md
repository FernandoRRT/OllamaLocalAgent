# Functions: useSearchParams | Next.js
Skip to content

Search documentation...Search...⌘K

ShowcaseDocsBlogTemplatesEnterprise

Search documentation...Search...⌘K FeedbackLearn

Menu

Using App Router

Features available in /app

Latest Version

16.2.3

* Getting Started

 * Installation
 * Project Structure
 * Layouts and Pages
 * Linking and Navigating
 * Server and Client Components
 * Fetching Data
 * Mutating Data
 * Caching
 * Revalidating
 * Error Handling
 * CSS
 * Image Optimization
 * Font Optimization
 * Metadata and OG images
 * Route Handlers
 * Proxy
 * Deploying
 * Upgrading

* Guides

 * AI Coding Agents
 * Analytics
 * Authentication
 * Backend for Frontend
 * Caching (Previous Model)
 * CDN Caching
 * CI Build Caching
 * Content Security Policy
 * CSS-in-JS
 * Custom Server
 * Data Security
 * Debugging
 * Deploying to Platforms
 * Draft Mode
 * Environment Variables
 * Forms
 * How Revalidation Works
 * ISR
 * Instrumentation
 * Internationalization
 * JSON-LD
 * Lazy Loading
 * Development Environment
 * Next.js MCP Server
 * MDX
 * Memory Usage
 * Migrating

 * App Router
 * Create React App
 * Vite

 * Migrating to Cache Components
 * Multi-tenant
 * Multi-zones
 * OpenTelemetry
 * Package Bundling
 * PPR Platform Guide
 * Prefetching
 * Preserving UI state
 * Production
 * PWAs
 * Public pages
 * Redirecting
 * Rendering Philosophy
 * Sass
 * Scripts
 * Self-Hosting
 * SPAs
 * Static Exports
 * Streaming
 * Tailwind CSS v3
 * Testing

 * Cypress
 * Jest
 * Playwright
 * Vitest

 * Third Party Libraries
 * Upgrading

 * Codemods
 * Version 14
 * Version 15
 * Version 16

 * Videos
 * View transitions

* API Reference

 * Directives

 * use cache
 * use cache: private
 * use cache: remote
 * use client
 * use server

 * Components

 * Font
 * Form Component
 * Image Component
 * Link Component
 * Script Component

 * File-system conventions

 * default.js
 * Dynamic Segments
 * error.js
 * forbidden.js
 * instrumentation.js
 * instrumentation-client.js
 * Intercepting Routes
 * layout.js
 * loading.js
 * mdx-components.js
 * not-found.js
 * page.js
 * Parallel Routes
 * proxy.js
 * public
 * route.js

 * dynamicParams
 * maxDuration
 * preferredRegion
 * runtime

 * Route Groups
 * src
 * template.js
 * unauthorized.js
 * Metadata Files

 * favicon, icon, and apple-icon
 * manifest.json
 * opengraph-image and twitter-image
 * robots.txt
 * sitemap.xml

 * Route Segment Config

 * dynamicParams
 * maxDuration
 * preferredRegion
 * runtime

 * Functions

 * after
 * cacheLife
 * cacheTag
 * unstable_catchError
 * connection
 * cookies
 * draftMode
 * fetch
 * forbidden
 * generateImageMetadata
 * generateMetadata
 * generateSitemaps
 * generateStaticParams
 * generateViewport
 * headers
 * ImageResponse
 * NextRequest
 * NextResponse
 * notFound
 * permanentRedirect
 * redirect
 * refresh
 * revalidatePath
 * revalidateTag
 * unauthorized
 * unstable_cache
 * unstable_noStore
 * unstable_rethrow
 * updateTag
 * useLinkStatus
 * useParams
 * usePathname
 * useReportWebVitals
 * useRouter
 * useSearchParams
 * useSelectedLayoutSegment
 * useSelectedLayoutSegments
 * userAgent

 * Configuration

 * next.config.js

 * adapterPath
 * allowedDevOrigins
 * appDir
 * assetPrefix
 * authInterrupts
 * basePath
 * cacheComponents
 * cacheHandlers
 * cacheLife
 * compress
 * crossOrigin
 * cssChunking
 * deploymentId
 * devIndicators
 * distDir
 * env
 * expireTime
 * exportPathMap
 * generateBuildId
 * generateEtags
 * headers
 * htmlLimitedBots
 * httpAgentOptions
 * images
 * cacheHandler
 * inlineCss
 * logging
 * mdxRs
 * onDemandEntries
 * optimizePackageImports
 * output
 * pageExtensions
 * poweredByHeader
 * productionBrowserSourceMaps
 * proxyClientMaxBodySize
 * reactCompiler
 * reactMaxHeadersLength
 * reactStrictMode
 * redirects
 * rewrites
 * sassOptions
 * serverActions
 * serverComponentsHmrCache
 * serverExternalPackages
 * staleTimes
 * staticGeneration*
 * taint
 * trailingSlash
 * transpilePackages
 * turbopack
 * turbopackFileSystemCache
 * turbopack.ignoreIssue
 * typedRoutes
 * typescript
 * urlImports
 * useLightningcss
 * viewTransition
 * webpack
 * webVitalsAttribution

 * TypeScript
 * ESLint

 * CLI

 * create-next-app
 * next CLI

 * Adapters

 * Configuration
 * Creating an Adapter
 * API Reference
 * Testing Adapters
 * Routing with @next/routing
 * Implementing PPR in an Adapter
 * Runtime Integration
 * Invoking Entrypoints
 * Output Types
 * Routing Information
 * Use Cases

 * Edge Runtime
 * Turbopack

* Glossary

* Getting Started

 * Installation
 * Project Structure
 * Images
 * Fonts
 * CSS
 * Deploying

* Guides

 * Analytics
 * Authentication
 * Babel
 * CI Build Caching
 * Content Security Policy
 * CSS-in-JS
 * Custom Server
 * Debugging
 * Draft Mode
 * Environment Variables
 * Forms
 * ISR
 * Instrumentation
 * Internationalization
 * Lazy Loading
 * MDX
 * Migrating

 * App Router
 * Create React App
 * Vite

 * Multi-Zones
 * OpenTelemetry
 * Package Bundling
 * PostCSS
 * Preview Mode
 * Production
 * Redirecting
 * Sass
 * Scripts
 * Self-Hosting
 * Static Exports
 * Tailwind CSS
 * Testing

 * Cypress
 * Jest
 * Playwright
 * Vitest

 * Third Party Libraries
 * Upgrading

 * Codemods
 * Version 10
 * Version 11
 * Version 12
 * Version 13
 * Version 14
 * Version 9

* Building Your Application

 * Routing

 * Pages and Layouts
 * Dynamic Routes
 * Linking and Navigating
 * Custom App
 * Custom Document
 * API Routes
 * Custom Errors

 * Rendering

 * Server-side Rendering (SSR)
 * Static Site Generation (SSG)
 * Automatic Static Optimization
 * Client-side Rendering (CSR)

 * Data Fetching

 * getStaticProps
 * getStaticPaths
 * Forms and Mutations
 * getServerSideProps
 * Client-side Fetching

 * Configuring

 * Error Handling

* API Reference

 * Components

 * Font
 * Form
 * Head
 * Image
 * Image (Legacy)
 * Link
 * Script

 * File-system conventions

 * instrumentation.js
 * Proxy
 * public
 * src Directory

 * Functions

 * getInitialProps
 * getServerSideProps
 * getStaticPaths
 * getStaticProps
 * NextRequest
 * NextResponse
 * useParams
 * useReportWebVitals
 * useRouter
 * useSearchParams
 * userAgent

 * Configuration

 * next.config.js Options

 * adapterPath
 * allowedDevOrigins
 * assetPrefix
 * basePath
 * bundlePagesRouterDependencies
 * compress
 * crossOrigin
 * deploymentId
 * devIndicators
 * distDir
 * env
 * exportPathMap
 * generateBuildId
 * generateEtags
 * headers
 * httpAgentOptions
 * images
 * logging
 * onDemandEntries
 * optimizePackageImports
 * output
 * pageExtensions
 * poweredByHeader
 * productionBrowserSourceMaps
 * experimental.proxyClientMaxBodySize
 * reactStrictMode
 * redirects
 * rewrites
 * serverExternalPackages
 * trailingSlash
 * transpilePackages
 * turbopack
 * typescript
 * urlImports
 * useLightningcss
 * webpack
 * webVitalsAttribution

 * TypeScript
 * ESLint

 * CLI

 * create-next-app CLI
 * next CLI

 * Adapters

 * Configuration
 * Creating an Adapter
 * API Reference
 * Testing Adapters
 * Routing with @next/routing
 * Implementing PPR in an Adapter
 * Runtime Integration
 * Invoking Entrypoints
 * Output Types
 * Routing Information
 * Use Cases

 * Edge Runtime
 * Turbopack

* Architecture

 * Accessibility
 * Fast Refresh
 * Next.js Compiler
 * Supported Browsers

* Community

 * Contribution Guide
 * Rspack

On this page

* Parameters
* Returns
* Behavior
* Prerendering
* Dynamic Rendering
* Server Components
* Pages
* Layouts
* Examples
* Updating searchParams
* Version History

Edit this page on GitHubScroll to top 

API ReferenceFunctionsuseSearchParams

Copy page

# useSearchParams

Last updated April 8, 2026

`useSearchParams` is a **Client Component** hook that lets you read the current URL's **query string**.

`useSearchParams` returns a **read-only** version of the `URLSearchParams` interface.

app/dashboard/search-bar.tsx

TypeScript

```
'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
 const searchParams = useSearchParams()
 
 const search = searchParams.get('search')
 
 // URL -> `/dashboard?search=my-project`
 // `search` -> 'my-project'
 return <>Search: {search}</>
}
```

## Parameters

`const searchParams = useSearchParams()`

`useSearchParams` does not take any parameters.

## Returns

`useSearchParams` returns a **read-only** version of the `URLSearchParams` interface, which includes utility methods for reading the URL's query string:

* `URLSearchParams.get()`: Returns the first value associated with the search parameter. For example:

| URL | `searchParams.get("a")` |
| --- | --- |
| `/dashboard?a=1` | `'1'` |
| `/dashboard?a=` | `''` |
| `/dashboard?b=3` | `null` |
| `/dashboard?a=1&a=2` | `'1'`_- use `getAll()` to get all values_ | 
* `URLSearchParams.has()`: Returns a boolean value indicating if the given parameter exists. For example:

| URL | `searchParams.has("a")` |
| --- | --- |
| `/dashboard?a=1` | `true` |
| `/dashboard?b=3` | `false` | 
* Learn more about other **read-only** methods of `URLSearchParams`, including the `getAll()`, `keys()`, `values()`, `entries()`, `forEach()`, and `toString()`.

> **Good to know**:
> 
> 
> * `useSearchParams` is a Client Component hook and is **not supported** in Server Components to prevent stale values during partial rendering.
> * If you want to fetch data in a Server Component based on search params, it's often a better option to read the `searchParams` prop of the corresponding Page. You can then pass it down by props to any component (Server or Client) within that Page.
> * If an application includes the `/pages` directory, `useSearchParams` will return `ReadonlyURLSearchParams | null`. The `null` value is for compatibility during migration since search params cannot be known during prerendering of a page that doesn't use `getServerSideProps`

## Behavior

### Prerendering

If a route is prerendered, calling `useSearchParams` will cause the Client Component tree up to the closest `Suspense` boundary to be client-side rendered.

This allows a part of the route to be prerendered while the dynamic part that uses `useSearchParams` is client-side rendered.

We recommend wrapping the Client Component that uses `useSearchParams` in a `<Suspense/>` boundary. This will allow any Client Components above it to be prerendered and sent as part of initial HTML. Example.

For example:

app/dashboard/search-bar.tsx

TypeScript

```
'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
 const searchParams = useSearchParams()
 
 const search = searchParams.get('search')
 
 // This will not be logged on the server during prerendering
 console.log(search)
 
 return <>Search: {search}</>
}
```

app/dashboard/page.tsx

TypeScript

```
import { Suspense } from 'react'
import SearchBar from './search-bar'
 
// This component passed as a fallback to the Suspense boundary
// will be rendered in place of the search bar in the initial HTML.
// When the value is available during React hydration the fallback
// will be replaced with the `<SearchBar>` component.
function SearchBarFallback() {
 return <>placeholder</>
}
 
export default function Page() {
 return (
 <>
 <nav>
 <Suspense fallback={<SearchBarFallback />}>
 <SearchBar />
 </Suspense>
 </nav>
 <h1>Dashboard</h1>
 </>
 )
}
```

> **Good to know**:
> 
> 
> * In development, routes are rendered on-demand, so `useSearchParams` doesn't suspend and things may appear to work without `Suspense`.
> * During production builds, a static page that calls `useSearchParams` from a Client Component must be wrapped in a `Suspense` boundary, otherwise the build fails with the Missing Suspense boundary with useSearchParams error.
> * If you intend the route to be dynamically rendered, prefer using the `connection` function first in a Server Component to wait for an incoming request, this excludes everything below from prerendering. See what makes a route dynamic in the Dynamic Rendering guide.
> * If you're already in a Server Component Page, consider using the `searchParams` prop and passing the values to Client Components.
> * You can also pass the Page `searchParams` prop directly to a Client Component and unwrap it with React's `use()`. Although this will suspend, so the Client Component should be wrapped with a `Suspense` boundary.

### Dynamic Rendering

If a route is dynamically rendered, `useSearchParams` will be available on the server during the initial server render of the Client Component.

For example:

app/dashboard/search-bar.tsx

TypeScript

```
'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SearchBar() {
 const searchParams = useSearchParams()
 
 const search = searchParams.get('search')
 
 // This will be logged on the server during the initial render
 // and on the client on subsequent navigations.
 console.log(search)
 
 return <>Search: {search}</>
}
```

app/dashboard/page.tsx

TypeScript

```
import { connection } from 'next/server'
import SearchBar from './search-bar'
 
export default async function Page() {
 await connection()
 return (
 <>
 <nav>
 <SearchBar />
 </nav>
 <h1>Dashboard</h1>
 </>
 )
}
```

> **Good to know**:
> 
> 
> * Previously, setting `export const dynamic = 'force-dynamic'` on the page was used to force dynamic rendering. Prefer using `connection()` instead, as it semantically ties dynamic rendering to the incoming request.

### Server Components

#### Pages

To access search params in Pages (Server Components), use the `searchParams` prop.

#### Layouts

Unlike Pages, Layouts (Server Components) **do not** receive the `searchParams` prop. This is because a shared layout is not re-rendered during navigation which could lead to stale `searchParams` between navigations. View detailed explanation.

Instead, use the Page `searchParams` prop or the `useSearchParams` hook in a Client Component, which is re-rendered on the client with the latest `searchParams`.

## Examples

### Updating `searchParams`

You can use `useRouter` or `Link` to set new `searchParams`. After a navigation is performed, the current `page.js` will receive an updated `searchParams` prop.

app/example-client-component.tsx

TypeScript

```
'use client'
 
export default function ExampleClientComponent() {
 const router = useRouter()
 const pathname = usePathname()
 const searchParams = useSearchParams()
 
 // Get a new searchParams string by merging the current
 // searchParams with a provided key/value pair
 const createQueryString = useCallback(
 (name: string, value: string) => {
 const params = new URLSearchParams(searchParams.toString())
 params.set(name, value)
 
 return params.toString()
 },
 [searchParams]
 )
 
 return (
 <>
 <p>Sort By</p>
 
 {/* using useRouter */}
 <button
 onClick={() => {
 // <pathname>?sort=asc
 router.push(pathname + '?' + createQueryString('sort', 'asc'))
 }}
 >
 ASC
 </button>
 
 {/* using <Link> */}
 <Link
 href={
 // <pathname>?sort=desc
 pathname + '?' + createQueryString('sort', 'desc')
 }
 >
 DESC
 </Link>
 </>
 )
}
```

## Version History

| Version | Changes |
| --- | --- |
| `v13.0.0` | `useSearchParams` introduced. |

Previous useRouterNext useSelectedLayoutSegment