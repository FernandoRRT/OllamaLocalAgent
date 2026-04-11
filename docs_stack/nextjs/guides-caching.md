# Guides: Caching (Previous Model) | Next.js
Skip to content

Search documentation...CtrlK Search...⌘K

ShowcaseDocsBlogTemplatesEnterprise

Search documentation...CtrlK Search...⌘K FeedbackLearn

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

* Caching fetch requests
* unstable_cache for non-fetch functions
* Route segment config
* dynamic
* fetchCache
* Cross-route segment behavior
* Time-based revalidation
* Route segment config revalidate
* Revalidation frequency
* On-demand revalidation
* Tagging cached data
* revalidateTag
* revalidatePath
* Deduplicating requests
* Preloading data

Edit this page on GitHubScroll to top 

App RouterGuidesCaching (Previous Model)

Copy page

# Caching and Revalidating (Previous Model)

Last updated April 8, 2026

> This guide assumes you are **not** using Cache Components which was introduced in version 16 under the `cacheComponents` flag.

## Caching `fetch` requests

By default, `fetch` requests are not cached. You can cache individual requests by setting the `cache` option to `'force-cache'`.

app/page.tsx

TypeScript

```
export default async function Page() {
 const data = await fetch('https://...', { cache: 'force-cache' })
}
```

See the `fetch` API reference to learn more.

### `unstable_cache` for non-`fetch` functions

`unstable_cache` allows you to cache the result of database queries and other async functions that don't use `fetch`. Wrap `unstable_cache` around the function:

app/lib/data.ts

TypeScript

```
import { unstable_cache } from 'next/cache'
import { db } from '@/lib/db'
 
export const getCachedUser = unstable_cache(
 async (id: string) => {
 return db
 .select()
 .from(users)
 .where(eq(users.id, id))
 .then((res) => res[0])
 },
 ['user'], // cache key prefix
 {
 tags: ['user'],
 revalidate: 3600,
 }
)
```

The third argument accepts:

* `tags`: an array of tags for on-demand revalidation with `revalidateTag`.
* `revalidate`: the number of seconds before the cache is revalidated.

See the `unstable_cache` API reference to learn more.

### Route segment config

You can configure caching behavior at the route level by exporting config options from a Page, Layout, or Route Handler.

#### `dynamic`

Change the dynamic behavior of a layout or page to fully static or fully dynamic.

layout.tsx | page.tsx | route.ts

TypeScript

```
export const dynamic = 'auto'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
```

* **`'auto'`** (default): The default option to cache as much as possible without preventing any components from opting into dynamic behavior.
* **`'force-dynamic'`**: Force dynamic rendering, which will result in routes being rendered for each user at request time. This option is equivalent to:
 * Setting the option of every `fetch()` request in a layout or page to `{ cache: 'no-store', next: { revalidate: 0 } }`.
 * Setting the segment config to `export const fetchCache = 'force-no-store'`

* **`'error'`**: Force prerendering and cache the data of a layout or page by causing an error if any components use Request-time APIs or uncached data. This option is equivalent to:
 * `getStaticProps()` in the `pages` directory.
 * Setting the option of every `fetch()` request in a layout or page to `{ cache: 'force-cache' }`.
 * Setting the segment config to `fetchCache = 'only-cache'`.

* **`'force-static'`**: Force prerendering and cache the data of a layout or page by forcing `cookies`, `headers()` and `useSearchParams()` to return empty values. It is possible to `revalidate`, `revalidatePath`, or `revalidateTag`, in pages or layouts rendered with `force-static`.

#### `fetchCache`

This is an advanced option that should only be used if you specifically need to override the default behavior.
By default, Next.js **will cache** any `fetch()` requests that are reachable **before** any Request-time APIs are used and **will not cache**`fetch` requests that are discovered **after** Request-time APIs are used.

`fetchCache` allows you to override the default `cache` option of all `fetch` requests in a layout or page.

layout.tsx | page.tsx | route.ts

TypeScript

```
export const fetchCache = 'auto'
// 'auto' | 'default-cache' | 'only-cache'
// 'force-cache' | 'force-no-store' | 'default-no-store' | 'only-no-store'
```

* **`'auto'`** (default): The default option to cache `fetch` requests before Request-time APIs with the `cache` option they provide and not cache `fetch` requests after Request-time APIs.
* **`'default-cache'`**: Allow any `cache` option to be passed to `fetch` but if no option is provided then set the `cache` option to `'force-cache'`. This means that even `fetch` requests after Request-time APIs are considered static.
* **`'only-cache'`**: Ensure all `fetch` requests opt into caching by changing the default to `cache: 'force-cache'` if no option is provided and causing an error if any `fetch` requests use `cache: 'no-store'`.
* **`'force-cache'`**: Ensure all `fetch` requests opt into caching by setting the `cache` option of all `fetch` requests to `'force-cache'`.
* **`'default-no-store'`**: Allow any `cache` option to be passed to `fetch` but if no option is provided then set the `cache` option to `'no-store'`. This means that even `fetch` requests before Request-time APIs are considered dynamic.
* **`'only-no-store'`**: Ensure all `fetch` requests opt out of caching by changing the default to `cache: 'no-store'` if no option is provided and causing an error if any `fetch` requests use `cache: 'force-cache'`
* **`'force-no-store'`**: Ensure all `fetch` requests opt out of caching by setting the `cache` option of all `fetch` requests to `'no-store'`. This forces all `fetch` requests to be re-fetched every request even if they provide a `'force-cache'` option.

##### Cross-route segment behavior

* Any options set across each layout and page of a single route need to be compatible with each other.
 * If both the `'only-cache'` and `'force-cache'` are provided, then `'force-cache'` wins. If both `'only-no-store'` and `'force-no-store'` are provided, then `'force-no-store'` wins. The force option changes the behavior across the route so a single segment with `'force-*'` would prevent any errors caused by `'only-*'`.
 * The intention of the `'only-*'` and `'force-*'` options is to guarantee the whole route is either fully static or fully dynamic. This means:
 * A combination of `'only-cache'` and `'only-no-store'` in a single route is not allowed.
 * A combination of `'force-cache'` and `'force-no-store'` in a single route is not allowed.

 * A parent cannot provide `'default-no-store'` if a child provides `'auto'` or `'*-cache'` since that could make the same fetch have different behavior.

* It is generally recommended to leave shared parent layouts as `'auto'` and customize the options where child segments diverge.

## Time-based revalidation

Use the `next.revalidate` option on `fetch` to revalidate data after a specified number of seconds:

app/page.tsx

TypeScript

```
export default async function Page() {
 const data = await fetch('https://...', { next: { revalidate: 3600 } })
}
```

For non-`fetch` functions, `unstable_cache` accepts a `revalidate` option in its configuration (see example above).

### Route segment config `revalidate`

Set the default revalidation time for a layout or page. This option does not override the `revalidate` value set by individual `fetch` requests.

layout.tsx | page.tsx | route.ts

TypeScript

```
export const revalidate = false
// false | 0 | number
```

* **`false`** (default): The default heuristic to cache any `fetch` requests that set their `cache` option to `'force-cache'` or are discovered before a Request-time API is used. Semantically equivalent to `revalidate: Infinity` which effectively means the resource should be cached indefinitely. It is still possible for individual `fetch` requests to use `cache: 'no-store'` or `revalidate: 0` to avoid being cached and make the route dynamically rendered. Or set `revalidate` to a positive number lower than the route default to increase the revalidation frequency of a route.
* **`0`**: Ensure a layout or page is always dynamically rendered even if no Request-time APIs or uncached data fetches are discovered. This option changes the default of `fetch` requests that do not set a `cache` option to `'no-store'` but leaves `fetch` requests that opt into `'force-cache'` or use a positive `revalidate` as is.
* **`number`**: (in seconds) Set the default revalidation frequency of a layout or page to `n` seconds.

> **Good to know**:
> 
> 
> * The revalidate value needs to be statically analyzable. For example `revalidate = 600` is valid, but `revalidate = 60 * 10` is not.
> * The revalidate value is not available when using `runtime = 'edge'`.
> * In Development, Pages are _always_ rendered on-demand and are never cached. This allows you to see changes immediately without waiting for a revalidation period to pass.

#### Revalidation frequency

* The lowest `revalidate` across each layout and page of a single route will determine the revalidation frequency of the _entire_ route. This ensures that child pages are revalidated as frequently as their parent layouts.
* Individual `fetch` requests can set a lower `revalidate` than the route's default `revalidate` to increase the revalidation frequency of the entire route. This allows you to dynamically opt-in to more frequent revalidation for certain routes based on some criteria.

## On-demand revalidation

To revalidate cached data after an event, use `revalidateTag` or `revalidatePath` in a Server Action or Route Handler.

### Tagging cached data

Tag `fetch` requests with `next.tags` to enable on-demand cache invalidation:

app/lib/data.ts

TypeScript

```
export async function getUserById(id: string) {
 const data = await fetch(`https://...`, {
 next: { tags: ['user'] },
 })
}
```

For non-`fetch` functions, `unstable_cache` also accepts a `tags` option (see example above).

### `revalidateTag`

Invalidate cached data by tag using `revalidateTag`:

app/lib/actions.ts

TypeScript

```
import { revalidateTag } from 'next/cache'
 
export async function updateUser(id: string) {
 // Mutate data
 revalidateTag('user')
}
```

### `revalidatePath`

Invalidate all cached data for a specific route path using `revalidatePath`:

app/lib/actions.ts

TypeScript

```
import { revalidatePath } from 'next/cache'
 
export async function updateUser(id: string) {
 // Mutate data
 revalidatePath('/profile')
}
```

## Deduplicating requests

If you are not using `fetch` (which is automatically memoized), and instead using an ORM or database directly, you can wrap your data access with the React `cache` function to deduplicate requests within a single render pass:

app/lib/data.ts

TypeScript

```
import { cache } from 'react'
import { db, posts, eq } from '@/lib/db'
 
export const getPost = cache(async (id: string) => {
 const post = await db.query.posts.findFirst({
 where: eq(posts.id, parseInt(id)),
 })
})
```

## Preloading data

You can preload data by creating a utility function that you eagerly call above blocking requests. This lets you initiate data fetching early, so the data is already available by the time the component renders.

Combine the `server-only` package with React's `cache` to create a reusable preload utility:

utils/get-item.ts

TypeScript

```
import { cache } from 'react'
import 'server-only'
 
export const getItem = cache(async (id: string) => {
 // ...
})
 
export const preload = (id: string) => {
 void getItem(id)
}
```

Then call `preload()` before any blocking work so the data starts loading immediately:

app/item/[id]/page.tsx

TypeScript

```
import { getItem, preload, checkIsAvailable } from '@/lib/data'
 
export default async function Page({
 params,
}: {
 params: Promise<{ id: string }>
}) {
 const { id } = await params
 // Start loading item data
 preload(id)
 // Perform another asynchronous task
 const isAvailable = await checkIsAvailable()
 
 return isAvailable ? <Item id={id} /> : null
}
 
async function Item({ id }: { id: string }) {
 const result = await getItem(id)
 // ...
}
```

Previous Backend for FrontendNext CDN Caching