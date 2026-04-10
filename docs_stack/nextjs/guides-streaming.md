# Streaming

Last updated April 8, 2026

## What is streaming?

In traditional server-side rendering, the server produces the full HTML document before sending anything. A single slow database query or API call can block the entire page. Streaming changes this by using chunked transfer encoding to send parts of the response as they become ready. The browser starts rendering HTML while the server is still generating the rest.

This is especially impactful for pages that combine fast static content (headers, navigation, layout) with slower dynamic content (personalized data, analytics, recommendations). The static parts can be prerendered and served from a CDN, painting instantly, while the dynamic parts stream in from the server as they become ready.

React's server renderer produces HTML in chunks aligned with `<Suspense>` boundaries. Next.js integrates this into the App Router so streaming works without additional configuration.

## Example

The companion streaming demo (source) lets you see each concept from this guide in action:

* Page-level streaming with `loading.tsx` (skeleton appears instantly, content streams in after ~2s)
* Granular streaming with sibling `<Suspense>` boundaries that resolve independently
* Hydration comparison: a single blocking pass vs split hydration with Suspense boundaries
* Raw HTML streaming in a Route Handler, with early CSS discovery
* A configurable `ReadableStream` API endpoint for experimenting with chunk sizes and browser buffering

## How the App Router delivers a page

When a browser requests a page, two streams work together during the initial page load:

### The HTML stream

React's server renderer produces progressive HTML chunks. The static parts of your page (layouts, navigation, Suspense fallbacks) render first and are sent immediately. When an async Server Component resolves, React streams its completed HTML along with inline `<script>` tags: one that swaps the fallback DOM node with the new content, and another carrying the component payload so React can later hydrate it. The browser executes the swap instantly, without waiting for the page's JavaScript bundle to load or hydration to complete. This is what the user _sees_: the page painting progressively, section by section.

### The component payload

The component payload is a serialized representation of the component tree that React uses to hydrate the page and handle client-side updates. On initial load, it arrives embedded in the HTML stream (as described above). On **client-side navigation**, only the component payload is fetched (with an `rsc: 1` request header) and no HTML is transferred at all. React uses it to update the component tree in place.

### The static shell

Everything that renders before any async work resolves is called the **static shell**: your layouts, navigation, and the fallback UI defined by your `<Suspense>` boundaries. It is sent immediately, giving the user something to see and interact with while dynamic content streams in. With Cache Components, the static shell is prerendered at build time and served instantly from the edge.

Each `<Suspense>` boundary is an independent streaming point. Components inside different boundaries resolve and stream in independently. They don't block each other.

## Page-level streaming with `loading.js`

The simplest way to add streaming is with a `loading.js` file. Place it alongside your `page.js` and Next.js automatically wraps the page content in a `<Suspense>` boundary, using your loading component as the fallback.

app/dashboard/loading.tsx

TypeScript

```
export default function Loading() {
 return (
 <div className="animate-pulse">
 <div className="h-8 w-48 bg-gray-200 rounded mb-4" />
 <div className="h-4 w-full bg-gray-200 rounded mb-2" />
 <div className="h-4 w-full bg-gray-200 rounded mb-2" />
 <div className="h-4 w-2/3 bg-gray-200 rounded" />
 </div>
 )
}
```

Behind the scenes, `loading.js` is nested inside `layout.js` and wraps `page.js` in a `<Suspense>` boundary:

This means:

* The layout renders immediately as part of the static shell.
* The loading skeleton is shown instantly as the Suspense fallback.
* When the page component finishes loading, its HTML replaces the skeleton.

`loading.js` is useful when there's nothing meaningful to show until the page's data resolves. If the page needs to await data before it can render anything, a full-page skeleton is a reasonable fallback.

See the `loading.js` API reference for more details.

## Granular streaming with `<Suspense>`

`<Suspense>` lets you control exactly which parts of the page stream independently. Instead of a full-page skeleton, you can push fallbacks down into specific sections so the static shell includes more real content.

### Parallel streaming with sibling boundaries

When multiple components perform async work (fetching data, reading from a database), wrap each one in its own `<Suspense>` boundary. Each boundary streams independently as its async work completes, in whatever order that happens, without blocking each other:

app/dashboard/page.tsx

TypeScript

```
import { Suspense } from 'react'
import { Revenue } from './revenue'
import { RecentOrders } from './recent-orders'
import { Recommendations } from './recommendations'
 
export default function Dashboard() {
 return (
 <div>
 <h1>Dashboard</h1>
 <div className="grid grid-cols-2 gap-4">
 <Suspense fallback={<p>Loading revenue...</p>}>
 <Revenue />
 </Suspense>
 <Suspense fallback={<p>Loading orders...</p>}>
 <RecentOrders />
 </Suspense>
 </div>
 <Suspense fallback={<p>Loading recommendations...</p>}>
 <Recommendations />
 </Suspense>
 </div>
 )
}
```

In this example, if `Revenue` resolves in 200ms, `RecentOrders` in 1s, and `Recommendations` in 3s, the user sees each section appear as soon as its data is ready.

### Nested boundaries for progressive detail

You can nest `<Suspense>` boundaries to create a layered loading experience. For example, a product page might stream the header immediately, the product details next, and the reviews last:

app/product/[id]/page.tsx

TypeScript

```
import { Suspense } from 'react'
import { ProductDetails } from './product-details'
import { Reviews } from './reviews'
 
export async function generateStaticParams() {
 const products = await getTopProducts()
 return products.map((product) => ({ id: product.id }))
}
 
export default async function ProductPage({
 params,
}: {
 params: Promise<{ id: string }>
}) {
 const { id } = await params
 
 return (
 <div>
 <h1>Product</h1>
 <Suspense fallback={<p>Loading product details...</p>}>
 <ProductDetails id={id} />
 <Suspense fallback={<p>Loading reviews...</p>}>
 <Reviews productId={id} />
 </Suspense>
 </Suspense>
 </div>
 )
}
```

The outer boundary shows "Loading product details..." until `ProductDetails` resolves. Once it does, the inner boundary becomes visible, showing "Loading reviews..." until `Reviews` resolves. This creates a progressive reveal.

### Push dynamic access down

The key to maximizing what streams instantly is to defer dynamic data access to the component that actually needs it. This applies to `params`, `searchParams`, `cookies()`, `headers()`, and data fetches. If you `await` any of these at the top of a layout or page, everything below that point becomes dynamic and cannot be prerendered as part of the static shell.

Instead, pass the promise down and let the consuming component resolve it inside a `<Suspense>` boundary:

app/dashboard/layout.tsx

TypeScript

```
import { Suspense } from 'react'
import { Nav } from './nav'
import { UserMenu } from './user-menu'
import { cookies } from 'next/headers'
 
export default function DashboardLayout({
 children,
}: {
 children: React.ReactNode
}) {
 const cookieStore = cookies() // Start the work, but don't await
 
 return (
 <div>
 <Nav>
 <Suspense fallback={<p>Loading user...</p>}>
 <UserMenu cookiePromise={cookieStore} />
 </Suspense>
 </Nav>
 {children}
 </div>
 )
}
```

In this example, `<Nav>` and `{children}` render as part of the static shell because nothing in the layout awaits. Only `<UserMenu>` suspends when it resolves the cookie promise. If the layout had called `await cookies()` at the top instead, the entire layout and all its children would be blocked from prerendering.

The same principle applies to `params` and `searchParams`. Rather than destructuring them at the page level, pass the promise to the component that needs the value:

app/shop/[category]/page.tsx

TypeScript

```
import { Suspense } from 'react'
import { Hero } from './hero'
import { ProductGrid } from './product-grid'
 
export async function generateStaticParams() {
 const categories = await getCategories()
 return categories.map((c) => ({ category: c.slug }))
}
 
export default function ShopPage({
 params,
}: {
 params: Promise<{ category: string }>
}) {
 return (
 <div>
 <Hero />
 <Suspense fallback={<p>Loading products...</p>}>
 <ProductGrid paramsPromise={params} />
 </Suspense>
 </div>
 )
}
```

`<Hero />` paints as part of the static shell. `<ProductGrid>` resolves `params` when it needs the category, suspending only within its boundary.

You can also unwrap the promise inline with `.then()`, so the child component receives a plain value instead of a promise:

app/shop/[category]/page.tsx

TypeScript

```
<Suspense fallback={<p>Loading products...</p>}>
 {params.then(({ category }) => (
 <ProductGrid category={category} />
 ))}
</Suspense>
```

This keeps `ProductGrid` simple (it takes a `string`, not a `Promise`) while still deferring the `params` access to inside the Suspense boundary.

### When to use `loading.js` vs `<Suspense>`

| | `loading.js` | `<Suspense>` |
| --- | --- | --- |
| **Scope** | Entire page | Any component |
| **Setup** | Drop in a file | Wrap components explicitly |
| **Navigation** | Prefetched as instant fallback | Not prefetched by default |
| **Best for** | Pages where nothing renders without data | Most pages, for granular control |

Prefer explicit `<Suspense>` boundaries close to the dynamic access. When the prerenderer encounters dynamic work, it walks up the tree looking for the nearest Suspense boundary. If none is found, the build fails with a blocking route error. A `loading.js` high in the tree is a valid boundary, so the framework finds it and stops, but now the entire page falls back to a full-page skeleton instead of streaming granularly.

### Error handling mid-stream

If a component throws an error after streaming has started, the nearest `error.js` boundary catches it and renders the error UI in place of the failed component. The rest of the page remains intact, only the section that errored is replaced.

Because the HTTP status code (`200 OK`) has already been sent with the first chunk, it cannot be changed to a `4xx` or `5xx`. The error is handled entirely within the streamed HTML. See The HTTP contract for more on this constraint.

## Streaming data to the client

You can start a fetch in a Server Component and pass the unresolved promise as a prop to a Client Component. The promise can be passed through as many layers as needed. Only the component that calls React's `use` API to read the value needs a `<Suspense>` boundary around it:

app/dashboard/page.tsx

TypeScript

```
import { Suspense } from 'react'
import { StatsChart } from './stats-chart'
 
type Stats = { revenue: number; orders: number }
 
async function getStats(): Promise<Stats> {
 const res = await fetch('https://api.example.com/stats')
 return res.json()
}
 
export default function Dashboard() {
 // Start the fetch during server render, don't await it
 const statsPromise = getStats()
 
 return (
 <Suspense fallback={<p>Loading chart...</p>}>
 <StatsChart dataPromise={statsPromise} />
 </Suspense>
 )
}
```

app/dashboard/stats-chart.tsx

TypeScript

```
'use client'
 
import { use } from 'react'
 
type Stats = { revenue: number; orders: number }
 
export function StatsChart({ dataPromise }: { dataPromise: Promise<Stats> }) {
 const stats = use(dataPromise)
 
 return <div>{/* render chart with stats */}</div>
}
```

The fallback is sent immediately with the static shell. When the promise resolves, React streams the completed HTML into the page.

### Sharing a promise across the tree

When multiple components need the same data, start the fetch once and pass the promise through a context provider so any component in the subtree can resolve it with `use()`:

app/layout.tsx

```
import { getUser } from '@/lib/data'
// Stores the promise in React context for the subtree
import { UserProvider } from './user-provider'
 
export default function Layout({ children }: { children: React.ReactNode }) {
 const userPromise = getUser()
 
 return <UserProvider userPromise={userPromise}>{children}</UserProvider>
}
```

See Sharing data with context and React.cache for the full pattern including the provider and consumer components.

## Streaming in Route Handlers

The patterns above rely on React and Suspense to stream UI. Outside of React rendering, Route Handlers can stream raw responses using the Web Streams API. This is useful for Server-Sent Events, large file generation, or any response where you want data to arrive progressively:

app/api/stream/route.ts

TypeScript

```
export async function GET() {
 const encoder = new TextEncoder()
 
 const stream = new ReadableStream({
 async start(controller) {
 for (let i = 0; i < 10; i++) {
 controller.enqueue(encoder.encode(`Chunk ${i + 1}\n`))
 await new Promise((resolve) => setTimeout(resolve, 200))
 }
 controller.close()
 },
 })
 
 return new Response(stream, {
 headers: {
 'Content-Type': 'text/plain; charset=utf-8',
 'X-Content-Type-Options': 'nosniff',
 },
 })
}
```

Visit this route directly in the browser or with `curl` to see chunks arrive one at a time:

`curl http://localhost:3000/api/stream`

You can also stream files without loading them entirely into memory. Use `FileHandle.readableWebStream()` to get a Web `ReadableStream` directly from a file:

app/api/download/route.ts

TypeScript

```
import { open } from 'node:fs/promises'
 
export async function GET() {
 const file = await open('/path/to/large-file.csv')
 
 return new Response(file.readableWebStream(), {
 headers: {
 'Content-Type': 'text/csv',
 'Content-Disposition': 'attachment; filename="data.csv"',
 },
 })
}
```

See the Route Handler API reference for more details on building streaming endpoints.

## Streaming and Web Vitals

Web Vitals are the metrics Google uses to measure user experience. Streaming directly affects several of them.

### TTFB and FCP

Without streaming, the server waits for all data before sending any HTML, so TTFB equals the slowest query. With streaming, the server sends the static shell as soon as it's ready. TTFB drops to the time it takes to render your layouts and fallbacks. The browser paints the static shell immediately, so FCP is decoupled from your data fetching time.

### LCP (Largest Contentful Paint)

If your LCP element (a hero image, a main heading, a product photo) is inside a Suspense boundary, it can't paint until that boundary resolves. To keep LCP fast:

* Keep LCP elements **outside** or **above** Suspense boundaries so they render as part of the static shell.
* Use the `preload` prop on `next/image` for LCP images. This injects a `<link rel="preload">` into the `<head>`, so the browser starts fetching the image from the very first chunk, before the `<img>` tag even appears in the HTML.
* For non-image LCP elements (text, headings), make sure they are not wrapped in a Suspense boundary that depends on slow data.

### CLS (Cumulative Layout Shift)

When a Suspense fallback is replaced by the resolved content, the browser reflows the page. If the fallback and the resolved content are different sizes, the surrounding layout shifts. To minimize CLS:

* Design skeleton fallbacks that **match the dimensions** of the content they represent. A skeleton with the same height and width as the final card grid prevents shifts.
* Use fixed or min-height containers around Suspense boundaries so the space is reserved before content arrives.

### INP (Interaction to