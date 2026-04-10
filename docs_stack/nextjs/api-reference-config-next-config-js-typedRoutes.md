# typedRoutes

Last updated April 8, 2026

> **Note**: This option has been marked as stable, so you should use `typedRoutes` instead of `experimental.typedRoutes`.

Support for statically typed links. This feature requires using TypeScript in your project.

next.config.js

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
}
 
module.exports = nextConfig
```

Previous turbopack.ignoreIssueNext typescript