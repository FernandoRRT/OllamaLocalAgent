# cacheLife

Last updated April 8, 2026

The `cacheLife` option allows you to define **custom cache profiles** when using the `cacheLife` function inside components or functions, and within the scope of the `use cache` directive.

## Usage[](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheLife#usage)

To define a profile, enable the `cacheComponents` flag and add the cache profile in the `cacheLife` object in the `next.config.js` file. For example, a `blog` profile:

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    blog: {
      stale: 3600, // 1 hour
      revalidate: 900, // 15 minutes
      expire: 86400, // 1 day
    },
  },
}
 
export default nextConfig
```

You can now use this custom `blog` configuration in your component or function as follows:

app/actions.ts

TypeScript

```
import { cacheLife } from 'next/cache'
 
export async function getCachedData() {
  'use cache'
  cacheLife('blog')
  const data = await fetch('/api/data')
  return data
}
```

## Reference[](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheLife#reference)

The configuration object has key values with the following format:

| **Property** | **Value** | **Description** | **Requirement** |
| --- | --- | --- | --- |
| `stale` | `number` | Duration the client should cache a value without checking the server. | Optional |
| `revalidate` | `number` | Frequency at which the cache should refresh on the server; stale values may be served while revalidating. | Optional |
| `expire` | `number` | Maximum duration for which a value can remain stale before switching to dynamic. | Optional - Must be longer than `revalidate` |

## Related

View related API references.

### use cache Learn how to use the "use cache" directive to cache data in your Next.js application.### cacheHandlers Configure custom cache handlers for use cache directives in Next.js.### cacheLife Learn how to use the cacheLife function to set the cache expiration time for a cached function or component.

Previous cacheHandlersNext compress