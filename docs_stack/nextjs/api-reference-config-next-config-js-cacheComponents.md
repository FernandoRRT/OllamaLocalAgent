# cacheComponents

Last updated April 8, 2026

The `cacheComponents` flag is a feature in Next.js that causes data fetching operations in the App Router to be excluded from prerenders unless they are explicitly cached. This can be useful for optimizing the performance of uncached data fetching in Server Components.

It is useful if your application requires fresh data fetching during runtime rather than serving from a prerendered cache.

It is expected to be used in conjunction with `use cache` so that your data fetching happens at runtime by default unless you define specific parts of your application to be cached with `use cache` at the page, function, or component level.

## Usage[](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents#usage)

To enable the `cacheComponents` flag, set it to `true` in your `next.config.ts` file:

next.config.ts

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  cacheComponents: true,
}
 
export default nextConfig
```

When `cacheComponents` is enabled, you can use the following cache functions and configurations:

*   The `use cache` directive
*   The `cacheLife` function with `use cache`
*   The `cacheTag` function

## Navigation with Activity[](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents#navigation-with-activity)

When `cacheComponents` is enabled, Next.js uses React's `<Activity>` component to preserve component state during client-side navigation.

Rather than unmounting the previous route when you navigate away, Next.js sets the Activity mode to `"hidden"`. This means:

*   Component state is preserved when navigating between routes
*   When you navigate back, the previous route reappears with its state intact
*   Effects are cleaned up when a route is hidden, and recreated when it becomes visible again

This behavior improves the navigation experience by maintaining UI state (form inputs, or expanded sections) when users navigate back and forth between routes.

> **Good to know**: Next.js uses heuristics to keep a few recently visited routes `"hidden"`, while older routes are removed from the DOM to prevent excessive growth.

Some UI patterns behave differently when components stay mounted instead of unmounting. See the Preserving UI state guide for handling common patterns like dropdowns, dialogs, and testing.

## Version History[](https://nextjs.org/docs/app/api-reference/config/next-config-js/cacheComponents#version-history)

| Version | Change |
| --- | --- |
| 16.0.0 | `cacheComponents` introduced. This flag controls the `ppr`, `useCache`, and `dynamicIO` flags as a single, unified configuration. |

Previous basePathNext cacheHandlers