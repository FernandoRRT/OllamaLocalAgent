# runtime

Last updated April 8, 2026

The `runtime` option allows you to select the JavaScript runtime used for rendering your route.

layout.tsx | page.tsx | route.ts

TypeScript

```
export const runtime = 'nodejs'
// 'nodejs' | 'edge'
```

*   **`'nodejs'`** (default)
*   **`'edge'`**

> **Good to know**:
> 
> 
> *   Using `runtime: 'edge'` is **not supported** for Cache Components.
> *   This option cannot be used in Proxy.

Previous preferredRegionNext Functions