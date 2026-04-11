# Functions: usePathname | Next.js
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
* Examples
* Do something in response to a route change
* Avoid hydration mismatch with rewrites

Edit this page on GitHubScroll to top 

API ReferenceFunctionsusePathname

Copy page

# usePathname

Last updated April 8, 2026

`usePathname` is a **Client Component** hook that lets you read the current URL's **pathname**.

> **Good to know**: When `cacheComponents` is enabled `usePathname` may require a `Suspense` boundary around it if your route has a dynamic param. If you use `generateStaticParams` the `Suspense` boundary is optional

app/example-client-component.tsx

TypeScript

```
'use client'
 
import { usePathname } from 'next/navigation'
 
export default function ExampleClientComponent() {
 const pathname = usePathname()
 return <p>Current pathname: {pathname}</p>
}
```

`usePathname` intentionally requires using a Client Component. It's important to note Client Components are not a de-optimization. They are an integral part of the Server Components architecture.

For example, a Client Component with `usePathname` will be rendered into HTML on the initial page load. When navigating to a new route, this component does not need to be re-fetched. Instead, the component is downloaded once (in the client JavaScript bundle), and re-renders based on the current state.

> **Good to know**:
> 
> 
> * Reading the current URL from a Server Component is not supported. This design is intentional to support layout state being preserved across page navigations.
> * If your page is being statically prerendered and your app has rewrites in `next.config` or a Proxy file, reading the pathname with `usePathname()` can result in hydration mismatch errors—because the initial value comes from the server and may not match the actual browser pathname after routing. See our example for a way to mitigate this issue.

Compatibility with Pages Router
If you have components that use `usePathname` and they are imported into routes within the Pages Router, be aware that `usePathname` may return `null` if the router is not yet initialized. This can occur in cases such as fallback routes or during Automatic Static Optimization in the Pages Router.

To enhance compatibility between routing systems, if your project contains both an `app` and a `pages` directory, Next.js will automatically adjust the return type of `usePathname`.

## Parameters

`const pathname = usePathname()`

`usePathname` does not take any parameters.

## Returns

`usePathname` returns a string of the current URL's pathname. For example:

| URL | Returned value |
| --- | --- |
| `/` | `'/'` |
| `/dashboard` | `'/dashboard'` |
| `/dashboard?v=2` | `'/dashboard'` |
| `/blog/hello-world` | `'/blog/hello-world'` |

## Examples

### Do something in response to a route change

app/example-client-component.tsx

TypeScript

```
'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
 
function ExampleClientComponent() {
 const pathname = usePathname()
 const searchParams = useSearchParams()
 useEffect(() => {
 // Do something here...
 }, [pathname, searchParams])
}
```

### Avoid hydration mismatch with rewrites

When a page is prerendered, the HTML is generated for the source pathname. If the page is then reached through a rewrite using `next.config` or `Proxy`, the browser URL may differ, and `usePathname()` will read the rewritten pathname on the client.

To avoid hydration mismatches, design the UI so that only a small, isolated part depends on the client pathname. Render a stable fallback on the server and update that part after mount.

app/example-client-component.tsx

TypeScript

```
'use client'
 
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
 
export default function PathnameBadge() {
 const pathname = usePathname()
 const [clientPathname, setClientPathname] = useState('')
 
 useEffect(() => {
 setClientPathname(pathname)
 }, [pathname])
 
 return (
 <p>
 Current pathname: <span>{clientPathname}</span>
 </p>
 )
}
```

| Version | Changes |
| --- | --- |
| `v13.0.0` | `usePathname` introduced. |

Previous useParamsNext useReportWebVitals