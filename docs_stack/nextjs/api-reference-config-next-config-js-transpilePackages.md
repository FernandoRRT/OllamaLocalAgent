# transpilePackages

Last updated April 8, 2026

Next.js can automatically transpile and bundle dependencies from local packages (like monorepos) or from external dependencies (`node_modules`). This replaces the `next-transpile-modules` package.

next.config.js

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['package-name'],
}
 
module.exports = nextConfig
```

## Version History[](https://nextjs.org/docs/app/api-reference/config/next-config-js/transpilePackages#version-history)

| Version | Changes |
| --- | --- |
| `v13.0.0` | `transpilePackages` added. |

Previous trailingSlashNext turbopack