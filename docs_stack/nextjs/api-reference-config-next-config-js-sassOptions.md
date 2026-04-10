# sassOptions

Last updated April 8, 2026

`sassOptions` allow you to configure the Sass compiler.

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const sassOptions = {
  additionalData: `
    $var: red;
  `,
}
 
const nextConfig: NextConfig = {
  sassOptions: {
    ...sassOptions,
    implementation: 'sass-embedded',
  },
}
 
export default nextConfig
```

> **Good to know:**
> 
> 
> *   `sassOptions` are not typed outside of `implementation` because Next.js does not maintain the other possible properties.
> *   The `functions` property for defining custom Sass functions is only supported with webpack. When using Turbopack, custom Sass functions are not available because Turbopack's Rust-based architecture cannot directly execute JavaScript functions passed through this option.

Previous rewritesNext serverActions