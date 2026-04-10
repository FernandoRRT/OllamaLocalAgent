# authInterrupts

This feature is currently available in the canary channel and subject to change. Try it out byupgrading Next.js, and share your feedback onGitHub.

Last updated April 8, 2026

The `authInterrupts` configuration option allows you to use `forbidden` and `unauthorized` APIs in your application. While these functions are experimental, you must enable the `authInterrupts` option in your `next.config.js` file to use them:

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
}
 
export default nextConfig
```

### forbidden API Reference for the forbidden function.### unauthorized API Reference for the unauthorized function.### forbidden.js API reference for the forbidden.js special file.### unauthorized.js API reference for the unauthorized.js special file.

Previous assetPrefixNext basePath