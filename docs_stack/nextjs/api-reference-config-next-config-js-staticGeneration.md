# staticGeneration*

This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback onGitHub.

Last updated April 8, 2026

The `staticGeneration*` options allow you to configure the Static Generation process for advanced use cases.

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
  },
}
 
export default nextConfig
```

## Config Options[](https://nextjs.org/docs/app/api-reference/config/next-config-js/staticGeneration#config-options)

The following options are available:

*   `staticGenerationRetryCount`: The number of times to retry a failed page generation before failing the build.
*   `staticGenerationMaxConcurrency`: The maximum number of pages to be processed per worker.
*   `staticGenerationMinPagesPerWorker`: The minimum number of pages to be processed before starting a new worker.

Previous staleTimesNext taint