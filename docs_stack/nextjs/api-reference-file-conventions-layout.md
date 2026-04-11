# File-system conventions: layout.js | Next.js
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
* children (required)
* params (optional)
* Layout Props Helper
* Root Layout
* Caveats
* Request Object
* Query params
* Pathname
* Interaction with loading.js
* Fetching Data
* Accessing child segments
* Examples
* Metadata
* Active Nav Links
* Displaying content based on params
* Reading params in Client Components
* Version History

Edit this page on GitHubScroll to top 

API ReferenceFile-system conventionslayout.js

Copy page

# layout.js

Last updated April 8, 2026

The `layout` file is used to define a layout in your Next.js application.

app/dashboard/layout.tsx

TypeScript

```
export default function DashboardLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return <section>{children}</section>
}
```

In the component hierarchy, `layout.js` is the outermost component in a route segment. It wraps `template.js`, `error.js`, `loading.js`, `not-found.js`, and `page.js`.

A **root layout** is the top-most layout in the root `app` directory. It is used to define the `<html>` and `<body>` tags and other globally shared UI.

app/layout.tsx

TypeScript

```
export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
 <html lang="en">
 <body>{children}</body>
 </html>
 )
}
```

## Reference

### Props

#### `children` (required)

Layout components should accept and use a `children` prop. During rendering, `children` will be populated with the route segments the layout is wrapping. These will primarily be the component of a child Layout (if it exists) or Page, but could also be other special files like Loading or Error when applicable.

#### `params` (optional)

A promise that resolves to an object containing the dynamic route parameters object from the root segment down to that layout.

app/dashboard/[team]/layout.tsx

TypeScript

```
export default async function Layout({
 children,
 params,
}: {
 children: React.ReactNode
 params: Promise<{ team: string }>
}) {
 const { team } = await params
}
```

| Example Route | URL | `params` |
| --- | --- | --- |
| `app/dashboard/[team]/layout.js` | `/dashboard/1` | `Promise<{ team: '1' }>` |
| `app/shop/[tag]/[item]/layout.js` | `/shop/1/2` | `Promise<{ tag: '1', item: '2' }>` |
| `app/blog/[...slug]/layout.js` | `/blog/1/2` | `Promise<{ slug: ['1', '2'] }>` |

* Since the `params` prop is a promise. You must use `async/await` or React's `use` function to access the values.
 * In version 14 and earlier, `params` was a synchronous prop. To help with backwards compatibility, you can still access it synchronously in Next.js 15, but this behavior will be deprecated in the future.

### Layout Props Helper

You can type layouts with `LayoutProps` to get a strongly typed `params` and named slots inferred from your directory structure. `LayoutProps` is a globally available helper.

app/dashboard/layout.tsx

```
export default function Layout(props: LayoutProps<'/dashboard'>) {
 return (
 <section>
 {props.children}
 {/* If you have app/dashboard/@analytics, it appears as a typed slot: */}
 {/* {props.analytics} */}
 </section>
 )
}
```

> **Good to know**:
> 
> 
> * Types are generated during `next dev`, `next build` or `next typegen`.
> * After type generation, the `LayoutProps` helper is globally available. It doesn't need to be imported.

### Root Layout

The `app` directory **must** include a **root layout**, which is the top-most layout in the root `app` directory. Typically, the root layout is `app/layout.js`.

app/layout.tsx

TypeScript

```
export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
 <html>
 <body>{children}</body>
 </html>
 )
}
```

* The root layout **must** define `<html>` and `<body>` tags.
 * You should **not** manually add `<head>` tags such as `<title>` and `<meta>` to root layouts. Instead, you should use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating `<head>` elements.

* You can create **multiple root layouts**. Any layout without a `layout.js` above it is a root layout. Two common approaches:
 * Using route groups like `app/(shop)/layout.js` and `app/(marketing)/layout.js`
 * Omitting `app/layout.js` so layouts in subdirectories like `app/dashboard/layout.js` and `app/blog/layout.js` each become root layouts for their respective directories.
 * Navigating **across multiple root layouts** will cause a **full page load** (as opposed to a client-side navigation).

* The root layout can be under a **dynamic segment**, for example when implementing internationalization with `app/[lang]/layout.js`.

## Caveats

### Request Object

Layouts are cached in the client during navigation to avoid unnecessary server requests.

Layouts do not rerender. They can be cached and reused to avoid unnecessary computation when navigating between pages. By restricting layouts from accessing the raw request, Next.js can prevent the execution of potentially slow or expensive user code within the layout, which could negatively impact performance.

To access the request object, you can use `headers` and `cookies` APIs in Server Components and Functions.

app/shop/layout.tsx

TypeScript

```
import { cookies } from 'next/headers'
 
export default async function Layout({ children }) {
 const cookieStore = await cookies()
 const theme = cookieStore.get('theme')
 return '...'
}
```

### Query params

Layouts do not rerender on navigation, so they cannot access search params which would otherwise become stale.

To access updated query parameters, you can use the Page `searchParams` prop, or read them inside a Client Component using the `useSearchParams` hook. Since Client Components re-render on navigation, they have access to the latest query parameters.

app/ui/search.tsx

TypeScript

```
'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function Search() {
 const searchParams = useSearchParams()
 
 const search = searchParams.get('search')
 
 return '...'
}
```

app/shop/layout.tsx

TypeScript

```
import Search from '@/app/ui/search'
 
export default function Layout({ children }) {
 return (
 <>
 <Search />
 {children}
 </>
 )
}
```

### Pathname

Layouts do not re-render on navigation, so they do not access pathname which would otherwise become stale.

To access the current pathname, you can read it inside a Client Component using the `usePathname` hook. Since Client Components re-render during navigation, they have access to the latest pathname.

app/ui/breadcrumbs.tsx

TypeScript

```
'use client'
 
import { usePathname } from 'next/navigation'
 
// Simplified breadcrumbs logic
export default function Breadcrumbs() {
 const pathname = usePathname()
 const segments = pathname.split('/')
 
 return (
 <nav>
 {segments.map((segment, index) => (
 <span key={index}>
 {' > '}
 {segment}
 </span>
 ))}
 </nav>
 )
}
```

app/docs/layout.tsx

TypeScript

```
import { Breadcrumbs } from '@/app/ui/Breadcrumbs'
 
export default function Layout({ children }) {
 return (
 <>
 <Breadcrumbs />
 <main>{children}</main>
 </>
 )
}
```

### Interaction with `loading.js`

Because `loading.js` sits below `layout.js` in the component hierarchy, it cannot show a fallback for uncached or runtime data access in the layout itself, such as calling `cookies()`, `headers()`, or making uncached fetches.

The behavior depends on whether Cache Components is enabled:

* **Without Cache Components:** The navigation will block until the layout finishes rendering, and the `loading.js` fallback will not be shown.
* **With Cache Components:**`loading.js` is treated as a regular `<Suspense>` boundary rather than a special prefetch marker. Uncached or runtime data access in the layout must be explicitly wrapped in its own `<Suspense>` boundary, otherwise Next.js guides you with a build-time error. The static shell streams immediately, and the uncached content swaps in as it resolves.

In both cases, to ensure instant navigation, either:

* Wrap runtime data access in your layout in its own `<Suspense>` boundary with a fallback.
* Move uncached data fetching from `layout.js` into `page.js` where `loading.js` can show a fallback.

app/dashboard/layout.tsx

TypeScript

```
import { Suspense } from 'react'
import { NavSkeleton } from './nav-skeleton'
import { DashboardNav } from './dashboard-nav'
 
export default function Layout({ children }: { children: React.ReactNode }) {
 return (
 <>
 <Suspense fallback={<NavSkeleton />}>
 <DashboardNav />
 </Suspense>
 <main>{children}</main>
 </>
 )
}
```

### Fetching Data

Layouts cannot pass data to their `children`. However, you can fetch the same data in a route more than once, and use React `cache` to dedupe the requests without affecting performance.

Alternatively, when using `fetch`in Next.js, requests are automatically deduped.

app/lib/data.ts

TypeScript

```
export async function getUser(id: string) {
 const res = await fetch(`https://.../users/${id}`)
 return res.json()
}
```

app/dashboard/layout.tsx

TypeScript

```
import { getUser } from '@/app/lib/data'
import { UserName } from '@/app/ui/user-name'
 
export default async function Layout({ children }) {
 const user = await getUser('1')
 
 return (
 <>
 <nav>
 {/* ... */}
 <UserName user={user.name} />
 </nav>
 {children}
 </>
 )
}
```

app/dashboard/page.tsx

TypeScript

```
import { getUser } from '@/app/lib/data'
import { UserName } from '@/app/ui/user-name'
 
export default async function Page() {
 const user = await getUser('1')
 
 return (
 <div>
 <h1>Welcome {user.name}</h1>
 </div>
 )
}
```

### Accessing child segments

Layouts do not have access to the route segments below itself. To access all route segments, you can use `useSelectedLayoutSegment` or `useSelectedLayoutSegments` in a Client Component.

app/ui/nav-link.tsx

TypeScript

```
'use client'
 
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
 
export default function NavLink({
 slug,
 children,
}: {
 slug: string
 children: React.ReactNode
}) {
 const segment = useSelectedLayoutSegment()
 const isActive = slug === segment
 
 return (
 <Link
 href={`/blog/${slug}`}
 // Change style depending on whether the link is active
 style={{ fontWeight: isActive ? 'bold' : 'normal' }}
 >
 {children}
 </Link>
 )
}
```

app/blog/layout.tsx

TypeScript

```
import { NavLink } from './nav-link'
import getPosts from './get-posts'
 
export default async function Layout({
 children,
}: {
 children: React.ReactNode
}) {
 const featuredPosts = await getPosts()
 return (
 <div>
 {featuredPosts.map((post) => (
 <div key={post.id}>
 <NavLink slug={post.slug}>{post.title}</NavLink>
 </div>
 ))}
 <div>{children}</div>
 </div>
 )
}
```

## Examples

### Metadata

You can modify the `<head>` HTML elements such as `title` and `meta` using the `metadata` object or `generateMetadata` function.

app/layout.tsx

TypeScript

```
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
 title: 'Next.js',
}
 
export default function Layout({ children }: { children: React.ReactNode }) {
 return '...'
}
```

> **Good to know**: You should **not** manually add `<head>` tags such as `<title>` and `<meta>` to root layouts. Instead, use the Metadata APIs which automatically handles advanced requirements such as streaming and de-duplicating `<head>` elements.

### Active Nav Links

You can use the `usePathname` hook to determine if a nav link is active.

Since `usePathname` is a client hook, you need to extract the nav links into a Client Component, which can be imported into your layout:

app/ui/nav-links.tsx

TypeScript

```
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
 const pathname = usePathname()
 
 return (
 <nav>
 <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
 Home
 </Link>
 
 <Link
 className={`link ${pathname === '/about' ? 'active' : ''}`}
 href="/about"
 >
 About
 </Link>
 </nav>
 )
}
```

app/layout.tsx

TypeScript

```
import { NavLinks } from '@/app/ui/nav-links'
 
export default function Layout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en">
 <body>
 <NavLinks />
 <main>{children}</main>
 </body>
 </html>
 )
}
```

### Displaying content based on `params`

Using dynamic route segments, you can display or fetch specific content based on the `params` prop.

app/dashboard/layout.tsx

TypeScript

```
export default async function DashboardLayout({
 children,
 params,
}: {
 children: React.ReactNode
 params: Promise<{ team: string }>
}) {
 const { team } = await params
 
 return (
 <section>
 <header>
 <h1>Welcome to {team}'s Dashboard</h1>
 </header>
 <main>{children}</main>
 </section>
 )
}
```

### Reading `params` in Client Components

To use `params` in a Client Component (which cannot be `async`), you can use React's `use` function to read the promise:

app/page.tsx

TypeScript

```
'use client'
 
import { use } from 'react'
 
export default function Page({
 params,
}: {
 params: Promise<{ slug: string }>
}) {
 const { slug } = use(params)
}
```

## Version History

| Version | Changes |
| --- | --- |
| `v15.0.0-RC` | `params` is now a promise. A codemod is available. |
| `v13.0.0` | `layout` introduced. |

Previous Intercepting RoutesNext loading.js