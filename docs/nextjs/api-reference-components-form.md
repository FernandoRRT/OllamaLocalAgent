# Components: Form Component | Next.js
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

* Reference
* action (string) Props
* action (function) Props
* Caveats
* Examples
* Search form that leads to a search result page
* Mutations with Server Actions

Edit this page on GitHubScroll to top 

API ReferenceComponentsForm Component

Copy page

# Form Component

Last updated April 8, 2026

The `<Form>` component extends the HTML `<form>` element to provide **prefetching** of loading UI,**client-side navigation** on submission, and **progressive enhancement**.

It's useful for forms that update URL search params as it reduces the boilerplate code needed to achieve the above.

Basic usage:

/app/ui/search.tsx

TypeScript

```
import Form from 'next/form'
 
export default function Page() {
 return (
 <Form action="/search">
 {/* On submission, the input value will be appended to
 the URL, e.g. /search?query=abc */}
 <input name="query" />
 <button type="submit">Submit</button>
 </Form>
 )
}
```

## Reference

The behavior of the `<Form>` component depends on whether the `action` prop is passed a `string` or `function`.

* When `action` is a **string**, the `<Form>` behaves like a native HTML form that uses a **`GET`** method. The form data is encoded into the URL as search params, and when the form is submitted, it navigates to the specified URL. In addition, Next.js:
 * Prefetches the path when the form becomes visible, this preloads shared UI (e.g. `layout.js` and `loading.js`), resulting in faster navigation.
 * Performs a client-side navigation instead of a full page reload when the form is submitted. This retains shared UI and client-side state.

* When `action` is a **function** (Server Action), `<Form>` behaves like a React form, executing the action when the form is submitted.

### `action` (string) Props

When `action` is a string, the `<Form>` component supports the following props:

| Prop | Example | Type | Required |
| --- | --- | --- | --- |
| `action` | `action="/search"` | `string` (URL or relative path) | Yes |
| `replace` | `replace={false}` | `boolean` | - |
| `scroll` | `scroll={true}` | `boolean` | - |
| `prefetch` | `prefetch={true}` | `boolean` | - |

* **`action`**: The URL or path to navigate to when the form is submitted.
 * An empty string `""` will navigate to the same route with updated search params.

* **`replace`**: Replaces the current history state instead of pushing a new one to the browser's history stack. Default is `false`.
* **`scroll`**: Controls the scroll behavior during navigation. Defaults to `true`, this means it will scroll to the top of the new route, and maintain the scroll position for backwards and forwards navigation.
* **`prefetch`**: Controls whether the path should be prefetched when the form becomes visible in the user's viewport. Defaults to `true`.

### `action` (function) Props

When `action` is a function, the `<Form>` component supports the following prop:

| Prop | Example | Type | Required |
| --- | --- | --- | --- |
| `action` | `action={myAction}` | `function` (Server Action) | Yes |

* **`action`**: The Server Action to be called when the form is submitted. See the React docs for more.

> **Good to know**: When `action` is a function, the `replace` and `scroll` props are ignored.

### Caveats

* **`formAction`**: Can be used in a `<button>` or `<input type="submit">` fields to override the `action` prop. Next.js will perform a client-side navigation, however, this approach doesn't support prefetching.
 * When using `basePath`, you must also include it in the `formAction` path. e.g. `formAction="/base-path/search"`.

* **`key`**: Passing a `key` prop to a string `action` is not supported. If you'd like to trigger a re-render or perform a mutation, consider using a function `action` instead.

* **`onSubmit`**: Can be used to handle form submission logic. However, calling `event.preventDefault()` will override `<Form>` behavior such as navigating to the specified URL.
* **`method`, `encType`, `target`**: Are not supported as they override `<Form>` behavior.
 * Similarly, `formMethod`, `formEncType`, and `formTarget` can be used to override the `method`, `encType`, and `target` props respectively, and using them will fallback to native browser behavior.
 * If you need to use these props, use the HTML `<form>` element instead.

* **`<input type="file">`**: Using this input type when the `action` is a string will match browser behavior by submitting the filename instead of the file object.

## Examples

### Search form that leads to a search result page

You can create a search form that navigates to a search results page by passing the path as an `action`:

/app/page.tsx

TypeScript

```
import Form from 'next/form'
 
export default function Page() {
 return (
 <Form action="/search">
 <input name="query" />
 <button type="submit">Submit</button>
 </Form>
 )
}
```

When the user updates the query input field and submits the form, the form data will be encoded into the URL as search params, e.g. `/search?query=abc`.

> **Good to know**: If you pass an empty string `""` to `action`, the form will navigate to the same route with updated search params.

On the results page, you can access the query using the `searchParams``page.js` prop and use it to fetch data from an external source.

/app/search/page.tsx

TypeScript

```
import { getSearchResults } from '@/lib/search'
 
export default async function SearchPage({
 searchParams,
}: {
 searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
 const results = await getSearchResults((await searchParams).query)
 
 return <div>...</div>
}
```

When the `<Form>` becomes visible in the user's viewport, shared UI (such as `layout.js` and `loading.js`) on the `/search` page will be prefetched. On submission, the form will immediately navigate to the new route and show loading UI while the results are being fetched. You can design the fallback UI using `loading.js`:

/app/search/loading.tsx

TypeScript

```
export default function Loading() {
 return <div>Loading...</div>
}
```

To cover cases when shared UI hasn't yet loaded, you can show instant feedback to the user using `useFormStatus`.

First, create a component that displays a loading state when the form is pending:

/app/ui/search-button.tsx

TypeScript

```
'use client'
import { useFormStatus } from 'react-dom'
 
export default function SearchButton() {
 const status = useFormStatus()
 return (
 <button type="submit">{status.pending ? 'Searching...' : 'Search'}</button>
 )
}
```

Then, update the search form page to use the `SearchButton` component:

/app/page.tsx

TypeScript

```
import Form from 'next/form'
import { SearchButton } from '@/ui/search-button'
 
export default function Page() {
 return (
 <Form action="/search">
 <input name="query" />
 <SearchButton />
 </Form>
 )
}
```

### Mutations with Server Actions

You can perform mutations by passing a function to the `action` prop.

/app/posts/create/page.tsx

TypeScript

```
import Form from 'next/form'
import { createPost } from '@/posts/actions'
 
export default function Page() {
 return (
 <Form action={createPost}>
 <input name="title" />
 {/* ... */}
 <button type="submit">Create Post</button>
 </Form>
 )
}
```

After a mutation, it's common to redirect to the new resource. You can use the `redirect` function from `next/navigation` to navigate to the new post page.

> **Good to know**: Since the "destination" of the form submission is not known until the action is executed, `<Form>` cannot automatically prefetch shared UI.

/app/posts/actions.ts

TypeScript

```
'use server'
import { redirect } from 'next/navigation'
 
export async function createPost(formData: FormData) {
 // Create a new post
 // ...
 
 // Redirect to the new post
 redirect(`/posts/${data.id}`)
}
```

Then, in the new page, you can fetch data using the `params` prop:

/app/posts/[id]/page.tsx

TypeScript

```
import { getPost } from '@/posts/data'
 
export default async function PostPage({
 params,
}: {
 params: Promise<{ id: string }>
}) {
 const { id } = await params
 const data = await getPost(id)
 
 return (
 <div>
 <h1>{data.title}</h1>
 {/* ... */}
 </div>
 )
}
```

See the Server Actions docs for more examples.

Previous FontNext Image Component