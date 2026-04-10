# ESLint Plugin

Last updated April 8, 2026

Next.js provides an ESLint configuration package, `eslint-config-next`, that makes it easy to catch common issues in your application. It includes the `@next/eslint-plugin-next` plugin along with recommended rule-sets from `eslint-plugin-react` and `eslint-plugin-react-hooks`.

The package provides two main configurations:

* **`eslint-config-next`**: Base configuration with Next.js, React, and React Hooks rules. Supports both JavaScript and TypeScript files.
* **`eslint-config-next/core-web-vitals`**: Includes everything from the base config, plus upgrades rules that impact Core Web Vitals from warnings to errors. Recommended for most projects.

Additionally, for TypeScript projects:

* **`eslint-config-next/typescript`**: Adds TypeScript-specific linting rules from `typescript-eslint`. Use this alongside the base or core-web-vitals config.

## Setup ESLint

Get linting working quickly with the ESLint CLI (flat config):

1. Install ESLint and the Next.js config:

pnpm npm yarn bun Terminal `pnpm add -D eslint eslint-config-next` 
2. Create `eslint.config.mjs` with the Next.js config:

 eslint.config.mjs 
```
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
 
const eslintConfig = defineConfig([
 ...nextVitals,
 // Override default ignores of eslint-config-next.
 globalIgnores([
 // Default ignores of eslint-config-next:
 '.next/**',
 'out/**',
 'build/**',
 'next-env.d.ts',
 ]),
])
 
export default eslintConfig
``` 
3. Run ESLint:

pnpm npm yarn bun Terminal `pnpm exec eslint .` 

## Reference

The `eslint-config-next` package includes the `recommended` rule-sets from the following ESLint plugins:

* `eslint-plugin-react`
* `eslint-plugin-react-hooks`
* `@next/eslint-plugin-next`

### Rules

The `@next/eslint-plugin-next` rules included are:

| Enabled in recommended config | Rule | Description |
| --- | --- | --- |
| | @next/next/google-font-display | Enforce font-display behavior with Google Fonts. |
| | @next/next/google-font-preconnect | Ensure `preconnect` is used with Google Fonts. |
| | @next/next/inline-script-id | Enforce `id` attribute on `next/script` components with inline content. |
| | @next/next/next-script-for-ga | Prefer `next/script` component when using the inline script for Google Analytics. |
| | @next/next/no-assign-module-variable | Prevent assignment to the `module` variable. |
| | @next/next/no-async-client-component | Prevent Client Components from being async functions. |
| | @next/next/no-before-interactive-script-outside-document | Prevent usage of `next/script`'s `beforeInteractive` strategy outside of `pages/_document.js`. |
| | @next/next/no-css-tags | Prevent manual stylesheet tags. |
| | @next/next/no-document-import-in-page | Prevent importing `next/document` outside of `pages/_document.js`. |
| | @next/next/no-duplicate-head | Prevent duplicate usage of `<Head>` in `pages/_document.js`. |
| | @next/next/no-head-element | Prevent usage of `<head>` element. |
| | @next/next/no-head-import-in-document | Prevent usage of `next/head` in `pages/_document.js`. |
| | @next/next/no-html-link-for-pages | Prevent usage of `<a>` elements to navigate to internal Next.js pages. |
| | @next/next/no-img-element | Prevent usage of `<img>` element due to slower LCP and higher bandwidth. |
| | @next/next/no-page-custom-font | Prevent page-only custom fonts. |
| | @next/next/no-script-component-in-head | Prevent usage of `next/script` in `next/head` component. |
| | @next/next/no-styled-jsx-in-document | Prevent usage of `styled-jsx` in `pages/_document.js`. |
| | @next/next/no-sync-scripts | Prevent synchronous scripts. |
| | @next/next/no-title-in-document-head | Prevent usage of `<title>` with `Head` component from `next/document`. |
| | @next/next/no-typos | Prevent common typos in Next.js's data fetching functions |
| | @next/next/no-unwanted-polyfillio | Prevent duplicate polyfills from Polyfill.io. |

We recommend using an appropriate integration to view warnings and errors directly in your code editor during development.

`next lint` removal
Starting with Next.js 16, `next lint` is removed.

As part of the removal, the `eslint` option in your Next config file is no longer needed and can be safely removed.

## Examples

### Specifying a root directory within a monorepo

If you're using `@next/eslint-plugin-next` in a project where Next.js isn't installed in your root directory (such as a monorepo), you can tell `@next/eslint-plugin-next` where to find your Next.js application using the `settings` property in your `eslint.config.mjs`:

eslint.config.mjs

```
import { defineConfig } from 'eslint/config'
import eslintNextPlugin from '@next/eslint-plugin-next'
 
const eslintConfig = defineConfig([
 {
 files: ['**/*.{js,jsx,ts,tsx}'],
 plugins: {
 next: eslintNextPlugin,
 },
 settings: {
 next: {
 rootDir: 'packages/my-app/',
 },
 },
 },
])
 
export default eslintConfig
```

`rootDir` can be a path (relative or absolute), a glob (i.e. `"packages/*/"`), or an array of paths and/or globs.

### Disabling rules

If you would like to modify or disable any rules provided by the supported plugins (`react`, `react-hooks`, `next`), you can directly change them using the `rules` property in your `eslint.config.mjs`:

eslint.config.mjs

```
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
 
const eslintConfig = defineConfig([
 ...nextVitals,
 {
 rules: {
 'react/no-unescaped-entities': 'off',
 '@next/next/no-page-custom-font': 'off',
 },
 },
 // Override default ignores of eslint-config-next.
 globalIgnores([
 // Default ignores of eslint-config-next:
 '.next/**',
 'out/**',
 'build/**',
 'next-env.d.ts',
 ]),
])
 
export default eslintConfig
```

### With Core Web Vitals

Enable the `eslint-config-next/core-web-vitals` configuration in your ESLint config.

eslint.config.mjs

```
import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
 
const eslintConfig = defineConfig([
 ...nextVitals,
 // Override default ignores of eslint-config-next.
 globalIgnores([
 // Default ignores of eslint-config-next:
 '.next/**',
 'out/**',
 'build/**',
 'next-env.d.ts',
 ]),
])
 
export default eslintConfig
```

`eslint-config-next/core-web-vitals` upgrades certain lint rules in `@next/eslint-plugin-next` from warnings to errors to help improve your Core Web Vitals metrics.

> The `eslint-config-next/core-web-vitals` configuration is automatically included for new applications built with [Create