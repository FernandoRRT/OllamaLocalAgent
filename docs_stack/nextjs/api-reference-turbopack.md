# Turbopack

Last updated April 8, 2026

Turbopack is an **incremental bundler** optimized for JavaScript and TypeScript, written in Rust, and built into **Next.js**. You can use Turbopack with both the Pages and App Router for a **much faster** local development experience.

## Why Turbopack?

We built Turbopack to push the performance of Next.js, including:

* **Unified Graph:** Next.js supports multiple output environments (e.g., client and server). Managing multiple compilers and stitching bundles together can be tedious. Turbopack uses a **single, unified graph** for all environments.
* **Bundling vs Native ESM:** Some tools skip bundling in development and rely on the browser's native ESM. This works well for small apps but can slow down large apps due to excessive network requests. Turbopack **bundles** in dev, but in an optimized way to keep large apps fast.
* **Incremental Computation:** Turbopack parallelizes work across cores and **caches** results down to the function level. Once a piece of work is done, Turbopack won’t repeat it.
* **Lazy Bundling:** Turbopack only bundles what is actually requested by the dev server. This lazy approach can reduce initial compile times and memory usage.

## Supported platforms

Turbopack requires platform-specific native bindings. The following platforms are currently supported:

| Platform | Architecture |
| --- | --- |
| macOS (Darwin) | x64, ARM64 |
| Windows | x64, ARM64 |
| Linux (glibc) | x64, ARM64 |
| Linux (musl) | x64, ARM64 |

On platforms without native bindings (e.g. FreeBSD, OpenBSD), Next.js falls back to WebAssembly (WASM) bindings. WASM bindings support core SWC features like compilation and minification, but **do not support Turbopack**. On these platforms, use the `--webpack` flag:

```
next dev --webpack
next build --webpack
```

## Getting started

Turbopack is now the **default bundler** in Next.js. No configuration is needed to use Turbopack:

package.json

```
{
 "scripts": {
 "dev": "next dev",
 "build": "next build",
 "start": "next start"
 }
}
```

### Using Webpack instead

If you need to use Webpack instead of Turbopack, you can opt-in with the `--webpack` flag:

package.json

```
{
 "scripts": {
 "dev": "next dev --webpack",
 "build": "next build --webpack",
 "start": "next start"
 }
}
```

## Supported features

Turbopack in Next.js has **zero-configuration** for the common use cases. Below is a summary of what is supported out of the box, plus some references to how you can configure Turbopack further when needed.

### Language features

| Feature | Status | Notes |
| --- | --- | --- |
| **JavaScript & TypeScript** | **Supported** | Uses SWC under the hood. Type-checking is not done by Turbopack (run `tsc --watch` or rely on your IDE for type checks). |
| **ECMAScript (ESNext)** | **Supported** | Turbopack supports the latest ECMAScript features, matching SWC’s coverage. |
| **CommonJS** | **Supported** | `require()` syntax is handled out of the box. |
| **ESM** | **Supported** | Static and dynamic `import` are fully supported. |
| **Babel** | **Supported** | Starting in Next.js 16, Turbopack uses Babel automatically if it detects a configuration file. Unlike in webpack, SWC is always used for Next.js's internal transforms and downleveling to older ECMAScript revisions. Next.js with webpack disables SWC if a Babel configuration file is present. Files in `node_modules` are excluded, unless you manually configure `babel-loader`. |

### Framework and React features

| Feature | Status | Notes |
| --- | --- | --- |
| **JSX / TSX** | **Supported** | SWC handles JSX/TSX compilation. |
| **Fast Refresh** | **Supported** | No configuration needed. |
| **React Server Components (RSC)** | **Supported** | For the Next.js App Router. Turbopack ensures correct server/client bundling. |
| **Root layout creation** | Unsupported | Automatic creation of a root layout in App Router is not supported. Turbopack will instruct you to create it manually. |

### CSS and styling

| Feature | Status | Notes |
| --- | --- | --- |
| **Global CSS** | **Supported** | Import `.css` files directly in your application. |
| **CSS Modules** | **Supported** | `.module.css` files work natively (Lightning CSS). |
| **CSS Nesting** | **Supported** | Lightning CSS supports modern CSS nesting. |
| **@import syntax** | **Supported** | Combine multiple CSS files. |
| **PostCSS** | **Supported** | Automatically processes PostCSS config files (`postcss.config.js`, `.mjs`, `.cjs`, `.ts`, `.mts`, `.cts`) in a Node.js worker pool. Useful for Tailwind, Autoprefixer, etc. |
| **Sass / SCSS** | **Supported** (Next.js) | For Next.js, Sass is supported out of the box. Custom Sass functions (`sassOptions.functions`) are not supported because Turbopack's Rust-based architecture cannot directly execute JavaScript functions, unlike webpack's Node.js environment. Use webpack if you need this feature. In the future, Turbopack standalone usage will likely require a loader config. |
| **Less** | Planned via plugins | Not yet supported by default. Will likely require a loader config once custom loaders are stable. |
| **Lightning CSS** | **In Use** | Handles CSS transformations. Some low-usage CSS Modules features (like `:local/:global` as standalone pseudo-classes) are not yet supported. See below for more details. |

### Assets

| Feature | Status | Notes |
| --- | --- | --- |
| **Static Assets** (images, fonts) | **Supported** | Importing `import img from './img.png'` works out of the box. In Next.js, returns an object for the `<Image />` component. |
| **JSON Imports** | **Supported** | Named or default imports from `.json` are supported. |

### Module resolution

| Feature | Status | Notes |
| --- | --- | --- |
| **Path Aliases** | **Supported** | Reads `tsconfig.json`'s `paths` and `baseUrl`, matching Next.js behavior. |
| **Manual Aliases** | **Supported** | Configure `resolveAlias` in `next.config.js` (similar to `webpack.resolve.alias`). |
| **Custom Extensions** | **Supported** | Configure `resolveExtensions` in `next.config.js`. |
| **AMD** | Partially Supported | Basic transforms work; advanced AMD usage is limited. |

### Performance and Fast Refresh

| Feature | Status | Notes |
| --- | --- | --- |
| **Fast Refresh** | **Supported** | Updates JavaScript, TypeScript, and CSS without a full refresh. |
| **Incremental Bundling** | **Supported** | Turbopack lazily builds only what's requested by the dev server, speeding up large apps. |

### Magic Comments

Turbopack supports webpack-compatible magic comments for controlling import behavior. These comments work with dynamic `import()`, `require()`, `require.resolve()`, and `new Worker()` expressions (not static `import` statements).

| Comment | Webpack | Turbopack | Description |
| --- | --- | --- | --- |
| `webpackIgnore: true` | ✓ | ✓ | Skip bundling, preserve import |
| `turbopackIgnore: true` | ✗ | ✓ | Skip bundling (Turbopack-only) |
| `turbopackOptional: true` | ✗ | ✓ | Suppress resolve errors |
| `webpackOptional: true` | ✗ | ✗ | Not supported |

See Lazy Loading for usage examples.

## Known gaps with webpack

There are a number of non-trivial behavior differences between webpack and Turbopack that are important to be aware of when migrating an application. Generally, these are less of a concern for new applications.

### Filesystem Root

Turbopack uses the root directory to resolve modules. Files outside of the project root are not resolved.

For example, when linking dependencies outside the project root (via `npm link`, `yarn link`, `pnpm link`, etc.), those linked files will not be resolved by default. To resolve these files, you must configure the root option to the parent directory of both the project and the linked dependencies.

You can configure the filesystem root using turbopack.root option in `next.config.js`.

### CSS Module Ordering

Turbopack will follow JS import order to order CSS modules which are not otherwise ordered. For example:

components/BlogPost.jsx

```
import utilStyles from './utils.module.css'
import buttonStyles from './button.module.css'
export default function BlogPost() {
 return (
 <div className={utilStyles.container}>
 <button className={buttonStyles.primary}>Click me</button>
 </div>
 )
}
```

In this example, Turbopack will ensure that `utils.module.css` will appear before `button.module.css` in the produced CSS chunk, following the import order

Webpack generally does this as well, but there are cases where it will ignore JS inferred ordering, for example if it infers the JS file is side-effect-free.

This can lead to subtle rendering changes when adopting Turbopack, if applications have come to rely on an arbitrary ordering. Generally, the solution is easy, e.g. have `button.module.css``@import utils.module.css` to force the ordering, or identify the conflicting rules and change them to not target the same properties.

### Sass node_modules imports

Turbopack supports importing `node_modules` Sass files out of the box. Webpack supports a legacy tilde `~` syntax for this, which is not supported by Turbopack.

From:

styles/globals.scss

`@import '~bootstrap/dist/css/bootstrap.min.css';`

To:

styles/globals.scss

`@import 'bootstrap/dist/css/bootstrap.min.css';`

If you can't update the imports, you can add a `turbopack.resolveAlias` configuration to map the `~` syntax to the actual path:

next.config.js

```
module.exports = {
 turbopack: {
 resolveAlias: {
 '~*': '*',
 },
 },
}
```

### Build Caching

Webpack supports disk build caching to improve build performance. Turbopack provides a similar feature, currently in beta. Starting with