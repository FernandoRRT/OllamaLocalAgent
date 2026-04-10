# mdx-components.js

Last updated April 8, 2026

The `mdx-components.js|tsx` file is **required** to use `@next/mdx` with App Router and will not work without it. Additionally, you can use it to customize styles.

Use the file `mdx-components.tsx` (or `.js`) in the root of your project to define MDX Components. For example, at the same level as `pages` or `app`, or inside `src` if applicable.

mdx-components.tsx

TypeScript

```
import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {}
 
export function useMDXComponents(): MDXComponents {
  return components
}
```

## Exports[](https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components#exports)

### `useMDXComponents` function[](https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components#usemdxcomponents-function)

The file must export a single function named `useMDXComponents`. This function does not accept any arguments.

mdx-components.tsx

TypeScript

```
import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {}
 
export function useMDXComponents(): MDXComponents {
  return components
}
```

## Version History[](https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components#version-history)

| Version | Changes |
| --- | --- |
| `v13.1.2` | MDX Components added |

## Learn more about MDX Components

### MDX Learn how to configure MDX and use it in your Next.js apps.

Previous loading.jsNext not-found.js