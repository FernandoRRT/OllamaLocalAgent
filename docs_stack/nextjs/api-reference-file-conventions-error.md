# File-system conventions: error.js | Next.js
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
* Props
* error
* error.message
* error.digest
* unstable_retry
* reset
* Examples
* Global Error
* Graceful error recovery with a custom error boundary
* Version History
* Learn more about error handling

Edit this page on GitHubScroll to top 

API ReferenceFile-system conventionserror.js

Copy page

# error.js

Last updated April 8, 2026

An **error** file allows you to handle unexpected runtime errors and display fallback UI.

app/dashboard/error.tsx

TypeScript

```
'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
 error,
 unstable_retry,
}: {
 error: Error & { digest?: string }
 unstable_retry: () => void
}) {
 useEffect(() => {
 // Log the error to an error reporting service
 console.error(error)
 }, [error])
 
 return (
 <div>
 <h2>Something went wrong!</h2>
 <button
 onClick={
 // Attempt to recover by re-fetching and re-rendering the segment
 () => unstable_retry()
 }
 >
 Try again
 </button>
 </div>
 )
}
```

`error.js` wraps a route segment and its nested children in a React Error Boundary. When an error throws within the boundary, the `error` component shows as the fallback UI.

> **Good to know**:
> 
> 
> * The React DevTools allow you to toggle error boundaries to test error states.
> * If you want errors to bubble up to the parent error boundary, you can `throw` when rendering the `error` component.
> * For component-level error recovery that aren't tied to route segments like `error.js`, use the `unstable_catchError` function.

In the component hierarchy, `error.js` wraps `loading.js`, `not-found.js`, `page.js`, and nested `layout.js` files in a React error boundary. It does **not** wrap the `layout.js` or `template.js` above it in the same segment. To handle errors in the root layout, use `global-error.js`.

## Reference

### Props

#### `error`

An instance of an `Error` object forwarded to the `error.js` Client Component.

> **Good to know:** During development, the `Error` object forwarded to the client will be serialized and include the `message` of the original error for easier debugging. However, **this behavior is different in production** to avoid leaking potentially sensitive details included in the error to the client.

#### `error.message`

* Errors forwarded from Client Components show the original `Error` message.
* Errors forwarded from Server Components show a generic message with an identifier. This is to prevent leaking sensitive details. You can use the identifier, under `errors.digest`, to match the corresponding server-side logs.

#### `error.digest`

An automatically generated hash of the error thrown. It can be used to match the corresponding error in server-side logs.

#### `unstable_retry`

The cause of an error can sometimes be temporary. In these cases, trying again might resolve the issue.

An error component can use the `unstable_retry()` function to prompt the user to attempt to recover from the error. When executed, the function will try to re-fetch and re-render the error boundary's children. If successful, the fallback error component is replaced with the result of the re-render.

app/dashboard/error.tsx

TypeScript

```
'use client' // Error boundaries must be Client Components
 
export default function Error({
 error,
 unstable_retry,
}: {
 error: Error & { digest?: string }
 unstable_retry: () => void
}) {
 return (
 <div>
 <h2>Something went wrong!</h2>
 <button onClick={() => unstable_retry()}>Try again</button>
 </div>
 )
}
```

#### `reset`

In most cases, you should use `unstable_retry()` instead. However, if you have a specific reason to clear the error state and re-render the error boundary's children without re-fetching the contents, you can use the `reset()` function.

## Examples

### Global Error

While less common, you can handle errors in the root layout or template using `global-error.jsx`, located in the root app directory, even when leveraging internationalization. Global error UI must define its own `<html>` and `<body>` tags, global styles, fonts, or other dependencies that your error page requires. This file replaces the root layout or template when active.

> **Good to know**: Error boundaries must be Client Components, which means that `metadata` and `generateMetadata` exports are not supported in `global-error.jsx`. As an alternative, you can use the React `<title>` component.

app/global-error.tsx

TypeScript

```
'use client' // Error boundaries must be Client Components
 
export default function GlobalError({
 error,
 unstable_retry,
}: {
 error: Error & { digest?: string }
 unstable_retry: () => void
}) {
 return (
 // global-error must include html and body tags
 <html>
 <body>
 <h2>Something went wrong!</h2>
 <button onClick={() => unstable_retry()}>Try again</button>
 </body>
 </html>
 )
}
```

### Graceful error recovery with a custom error boundary

When rendering fails on the client, it can be useful to show the last known server rendered UI for a better user experience.

The `GracefullyDegradingErrorBoundary` is an example of a custom error boundary that captures and preserves the current HTML before an error occurs. If a rendering error happens, it re-renders the captured HTML and displays a persistent notification bar to inform the user.

app/dashboard/error.tsx

TypeScript

```
'use client'
 
import React, { Component, ErrorInfo, ReactNode } from 'react'
 
interface ErrorBoundaryProps {
 children: ReactNode
 onError?: (error: Error, errorInfo: ErrorInfo) => void
}
 
interface ErrorBoundaryState {
 hasError: boolean
}
 
export class GracefullyDegradingErrorBoundary extends Component<
 ErrorBoundaryProps,
 ErrorBoundaryState
> {
 private contentRef: React.RefObject<HTMLDivElement | null>
 
 constructor(props: ErrorBoundaryProps) {
 super(props)
 this.state = { hasError: false }
 this.contentRef = React.createRef()
 }
 
 static getDerivedStateFromError(_: Error): ErrorBoundaryState {
 return { hasError: true }
 }
 
 componentDidCatch(error: Error, errorInfo: ErrorInfo) {
 if (this.props.onError) {
 this.props.onError(error, errorInfo)
 }
 }
 
 render() {
 if (this.state.hasError) {
 // Render the current HTML content without hydration
 return (
 <>
 <div
 ref={this.contentRef}
 suppressHydrationWarning
 dangerouslySetInnerHTML={{
 __html: this.contentRef.current?.innerHTML || '',
 }}
 />
 <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white py-4 px-6 text-center">
 <p className="font-semibold">
 An error occurred during page rendering
 </p>
 </div>
 </>
 )
 }
 
 return <div ref={this.contentRef}>{this.props.children}</div>
 }
}
 
export default GracefullyDegradingErrorBoundary
```

## Version History

| Version | Changes |
| --- | --- |
| `v16.2.0` | `unstable_retry` prop added. |
| `v15.2.0` | Also display `global-error` in development. |
| `v13.1.0` | `global-error` introduced. |
| `v13.0.0` | `error` introduced. |

## Learn more about error handling

### Error Handling Learn how to display expected errors and handle uncaught exceptions.

Previous Dynamic SegmentsNext forbidden.js