# Route Handlers

Last updated April 8, 2026

## Route Handlers

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.

> **Good to know**: Route Handlers are only available inside the `app` directory. They are the equivalent of API Routes inside the `pages` directory meaning you **do not** need to use API Routes and Route Handlers together.

### Convention

Route Handlers are defined in a `route.js|ts` file inside the `app` directory:

app/api/route.ts

TypeScript

`export async function GET(request: Request) {}`

Route Handlers can be nested anywhere inside the `app` directory, similar to `page.js` and `layout.js`. But there **cannot** be a `route.js` file at the same route segment level as `page.js`.

### Supported HTTP Methods

The following HTTP methods are supported: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`. If an unsupported method is called, Next.js will return a `405 Method Not Allowed` response.

### Extended `NextRequest` and `NextResponse` APIs

In addition to supporting the native Request and Response APIs, Next.js extends them with `NextRequest` and `NextResponse` to provide convenient helpers for advanced use cases.

### Caching

Route Handlers are not cached by default. You can, however, opt into caching for `GET` methods. Other supported HTTP methods are **not** cached. To cache a `GET` method, use a route config option such as `export const dynamic = 'force-static'` in your Route Handler file.

app/items/route.ts

TypeScript

```
export const dynamic = 'force-static'
 
export async function GET() {
 const res = await fetch('https://data.mongodb-api.com/...', {
 headers: {
 'Content-Type': 'application/json',
 'API-Key': process.env.DATA_API_KEY,
 },
 })
 const data = await res.json()
 
 return Response.json({ data })
}
```

> **Good to know**: Other supported HTTP methods are **not** cached, even if they are placed alongside a `GET` method that is cached, in the same file.

#### With Cache Components

When Cache Components is enabled, `GET` Route Handlers follow the same model as normal UI routes in your application. They run at request time by default, can be prerendered when they don't access uncached or runtime data, and you can use `use cache` to include uncached data in the static response.

**Static example** - doesn't access uncached or runtime data, so it will be prerendered at build time:

app/api/project-info/route.ts

```
export async function GET() {
 return Response.json({
 projectName: 'Next.js',
 })
}
```

**Dynamic example** - accesses non-deterministic operations. During the build, prerendering stops when `Math.random()` is called, deferring to request-time rendering:

app/api/random-number/route.ts

```
export async function GET() {
 return Response.json({
 randomNumber: Math.random(),
 })
}
```

**Runtime data example** - accesses request-specific data. Prerendering terminates when runtime APIs like `headers()` are called:

app/api/user-agent/route.ts

```
import { headers } from 'next/headers'
 
export async function GET() {
 const headersList = await headers()
 const userAgent = headersList.get('user-agent')
 
 return Response.json({ userAgent })
}
```

> **Good to know**: Prerendering stops if the `GET` handler accesses network requests, database queries, async file system operations, request object properties (like `req.url`, `request.headers`, `request.cookies`, `request.body`), runtime APIs like `cookies()`, `headers()`, `connection()`, or non-deterministic operations.

**Cached example** - accesses uncached data (database query) but caches it with `use cache`, allowing it to be included in the prerendered response:

app/api/products/route.ts

```
import { cacheLife } from 'next/cache'
 
export async function GET() {
 const products = await getProducts()
 return Response.json(products)
}
 
async function getProducts() {
 'use cache'
 cacheLife('hours')
 
 return await db.query('SELECT * FROM products')
}
```

> **Good to know**: `use cache` cannot be used directly inside a Route Handler body; extract it to a helper function. Cached responses revalidate according to `cacheLife` when a new request arrives.

### Special Route Handlers

Special Route Handlers like `sitemap.ts`, `opengraph-image.tsx`, and `icon.tsx`, and other metadata files remain static by default unless they use Request-time APIs or dynamic config options.

### Route Resolution

You can consider a `route` the lowest level routing primitive.

* They **do not** participate in layouts or client-side navigations like `page`.
* There **cannot** be a `route.js` file at the same route as `page.js`.

| Page | Route | Result |
| --- | --- | --- |
| `app/page.js` | `app/route.js` | Conflict |
| `app/page.js` | `app/api/route.js` | Valid |
| `app/[user]/page.js` | `app/api/route.js` | Valid |

Each `route.js` or `page.js` file takes over all HTTP verbs for that route.

app/page.ts

TypeScript

```
export default function Page() {
 return <h1>Hello, Next.js!</h1>
}
 
// Conflict
// `app/route.ts`
export async function POST(request: Request) {}
```

Read more about how Route Handlers complement your frontend application, or explore the Route Handlers API Reference.

### Route Context Helper

In TypeScript, you can type the `context` parameter for Route Handlers with the globally available `RouteContext` helper:

app/users/[id]/route.ts

TypeScript

```
import type { NextRequest } from 'next/server'
 
export async function GET(_req: NextRequest, ctx: RouteContext<'/users/[id]'>) {
 const { id } = await ctx.params
 return Response.json({ id })
}
```

> **Good to know**
> 
> 
> * Types are generated during `next dev`, `next build` or `next typegen`.

## API Reference

Learn more about Route Handlers

### route.js API reference for the route.js special file.### Backend for Frontend Learn how to use Next.js as a backend framework