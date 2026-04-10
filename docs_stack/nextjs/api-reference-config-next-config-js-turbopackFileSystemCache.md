# Turbopack FileSystem Caching

Last updated April 8, 2026

## Usage[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackFileSystemCache#usage)

Turbopack FileSystem Cache enables Turbopack to reduce work across `next dev` or `next build` commands. When enabled, Turbopack will save and restore data to the `.next` folder between builds, which can greatly speed up subsequent builds and dev sessions.

> **Good to know:** The FileSystem Cache feature is considered stable for development and experimental for production builds

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    // Enable filesystem caching for `next dev`
    turbopackFileSystemCacheForDev: true,
    // Enable filesystem caching for `next build`
    turbopackFileSystemCacheForBuild: true,
  },
}
 
export default nextConfig
```

## Version Changes[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackFileSystemCache#version-changes)

| Version | Changes |
| --- | --- |
| `v16.1.0` | FileSystem caching is enabled by default for development |
| `v16.0.0` | Beta release with separate flags for build and dev |
| `v15.5.0` | Persistent caching released as experimental on canary releases |

Previous turbopackNext turbopack.ignoreIssue