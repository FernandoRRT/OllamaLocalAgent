# use cache: private

This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback onGitHub.

Last updated April 8, 2026

The `'use cache: private'` directive allows functions to access runtime request APIs like `cookies()`, `headers()`, and `searchParams` within a cached scope. However, results are **never stored on the server**, they're cached only in the browser's memory and do not persist across page reloads.

Reach for `'use cache: private'` when:

*   You want to cache a function that already accesses runtime data, and refactoring to move the runtime access outside and pass values as arguments is not practical.
*   Compliance requirements prevent storing certain data on the server, even temporarily

Because this directive accesses runtime data, the function executes on every server render and is excluded from running during static shell generation.

It is **not** possible to configure custom cache handlers for `'use cache: private'`.

For a comparison of the different cache directives, see How `use cache: remote` differs from `use cache` and `use cache: private`.

> **Good to know**: This directive is marked as `experimental` because it depends on runtime prefetching, which is not yet stable. Runtime prefetching is an upcoming feature that will let the router prefetch past the static shell into **any** cached scope, not just private caches.

## Usage[](https://nextjs.org/docs/app/api-reference/directives/use-cache-private#usage)

To use `'use cache: private'`, enable the `cacheComponents` flag in your `next.config.ts` file:

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  cacheComponents: true,
}
 
export default nextConfig
```

Then add `'use cache: private'` to your function along with a `cacheLife` configuration.

> **Good to know**: This directive is not available in Route Handlers.

### Basic example[](https://nextjs.org/docs/app/api-reference/directives/use-cache-private#basic-example)

In this example, we demonstrate that you can access cookies within a `'use cache: private'` scope:

app/product/[id]/page.tsx

TypeScript

```
import { Suspense } from 'react'
import { cookies } from 'next/headers'
import { cacheLife, cacheTag } from 'next/cache'
 
export async function generateStaticParams() {
  return [{ id: '1' }]
}
 
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
 
  return (
    <div>
      <ProductDetails id={id} />
      <Suspense fallback={<div>Loading recommendations...</div>}>
        <Recommendations productId={id} />
      </Suspense>
    </div>
  )
}
 
async function Recommendations({ productId }: { productId: string }) {
  const recommendations = await getRecommendations(productId)
 
  return (
    <div>
      {recommendations.map((rec) => (
        <ProductCard key={rec.id} product={rec} />
      ))}
    </div>
  )
}
 
async function getRecommendations(productId: string) {
  'use cache: private'
  cacheTag(`recommendations-${productId}`)
  cacheLife({ stale: 60 })
 
  // Access cookies within private cache functions
  const sessionId = (await cookies()).get('session-id')?.value || 'guest'
 
  return getPersonalizedRecommendations(productId, sessionId)
}
```

> **Good to know**: The `stale` time must be at least 30 seconds for runtime prefetching to work. See `cacheLife` client cache behavior for details.

## Request APIs allowed in private caches[](https://nextjs.org/docs/app/api-reference/directives/use-cache-private#request-apis-allowed-in-private-caches)

The following request-specific APIs can be used inside `'use cache: private'` functions:

| API | Allowed in `use cache` | Allowed in `'use cache: private'` |
| --- | --- | --- |
| `cookies()` | No | Yes |
| `headers()` | No | Yes |
| `searchParams` | No | Yes |
| `connection()` | No | No |

> **Note:** The `connection()` API is prohibited in both `use cache` and `'use cache: private'` as it provides connection-specific information that cannot be safely cached.

## Version History[](https://nextjs.org/docs/app/api-reference/directives/use-cache-private#version-history)

| Version | Changes |
| --- | --- |
| `v16.0.0` | `"use cache: private"` is enabled with the Cache Components feature. |

## Related

View related API references.

### use cache Learn how to use the "use cache" directive to cache data in your Next.js application.### cacheComponents Learn how to enable the cacheComponents flag in Next.js.### cacheLife Learn how to use the cacheLife function to set the cache expiration time for a cached function or component.### cacheTag Learn how to use the cacheTag function to manage cache invalidation in your Next.js application.

Previous use cacheNext use cache: remote