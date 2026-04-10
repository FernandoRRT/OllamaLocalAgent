# turbopack.ignoreIssue

Last updated April 8, 2026

The `turbopack.ignoreIssue` option allows you to filter out specific Turbopack errors and warnings so they do not appear in the CLI output or the error overlay. This is useful for suppressing known warnings that do not affect your application, such as intentionally unresolved optional dependencies.

This option is only available when using Turbopack (`next dev --turbopack`).

## Usage[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue#usage)

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/vendor/**',
      },
    ],
  },
}
 
export default nextConfig
```

## Options[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue#options)

Each rule in the `ignoreIssue` array is an object with the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `path` | `string | RegExp` | Yes | Matches against the file path of the issue |
| `title` | `string | RegExp` | No | Matches against the issue title |
| `description` | `string | RegExp` | No | Matches against the issue description |

An issue is suppressed when it matches the `path`**and** all other specified fields in a rule. If only `path` is provided, any issue from a matching file is suppressed.

> **Good to know:** Issue titles and descriptions may change between Turbopack versions. The `path` field is generally stable, but is not guaranteed to remain consistent for all issue types. When possible, prefer using more specific `path` patterns over `title` or `description` matching.

### `path`[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue#path)

A **glob pattern** (when a string) or **regular expression** that matches against the file path where the issue originated.

next.config.js

```
module.exports = {
  turbopack: {
    ignoreIssue: [
      // Glob pattern: suppress issues from any file under vendor/
      { path: '**/vendor/**' },
      // RegExp: suppress issues from files matching a pattern
      { path: /node_modules\/legacy-lib/ },
    ],
  },
}
```

### `title`[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue#title)

An **exact string match** (when a string) or **regular expression** that matches against the issue title.

next.config.js

```
module.exports = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/src/**',
        title: 'Module not found',
      },
    ],
  },
}
```

### `description`[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue#description)

An **exact string match** (when a string) or **regular expression** that matches against the issue description.

next.config.js

```
module.exports = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/src/**',
        description: /Cannot find module 'optional-dep'/,
      },
    ],
  },
}
```

## Examples[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue#examples)

### Suppressing warnings for optional dependencies[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue#suppressing-warnings-for-optional-dependencies)

If your code uses `try/catch` around an optional `require()` call, Turbopack may report a "Module not found" warning. You can suppress it:

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  turbopack: {
    ignoreIssue: [
      {
        path: '**/lib/optional-feature/**',
        title: 'Module not found',
      },
    ],
  },
}
 
export default nextConfig
```

### Combining multiple rules[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue#combining-multiple-rules)

You can specify multiple rules to suppress different issues:

next.config.js

```
module.exports = {
  turbopack: {
    ignoreIssue: [
      { path: '**/vendor/**' },
      { path: '**/legacy/**', title: 'Module not found' },
      { path: /generated\//, description: /expected identifier/ },
    ],
  },
}
```

## Version History[](https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackIgnoreIssue#version-history)

| Version | Changes |
| --- | --- |
| `v16.2.0` | `turbopack.ignoreIssue` introduced. |

## Next Steps

Learn more about Turbopack configuration.

### turbopack Configure Next.js with Turbopack-specific options### Turbopack Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.

Previous turbopackFileSystemCacheNext typedRoutes