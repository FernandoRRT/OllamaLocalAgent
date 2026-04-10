# API Reference

Last updated April 8, 2026

## `async modifyConfig(config, context)`[](https://nextjs.org/docs/app/api-reference/adapters/api-reference#async-modifyconfigconfig-context)

Called for any CLI command that loads the `next.config.js` file to allow modification of the configuration.

**Parameters:**

*   `config`: The complete Next.js configuration object
*   `context.phase`: The current build phase (see phases)
*   `context.nextVersion`: Version of Next.js being used

**Returns:** The modified configuration object (can be async)

## `async onBuildComplete(context)`[](https://nextjs.org/docs/app/api-reference/adapters/api-reference#async-onbuildcompletecontext)

Called after the build process completes with detailed information about routes and outputs.

**Parameters:**

*   `context.routing`: Object containing Next.js routing phases and metadata
    *   `routing.beforeMiddleware`: Routes executed before middleware (includes header and redirect handling)
    *   `routing.beforeFiles`: Rewrite routes checked before filesystem route matching
    *   `routing.afterFiles`: Rewrite routes checked after filesystem route matching
    *   `routing.dynamicRoutes`: Dynamic route matching table
    *   `routing.onMatch`: Routes applied after a successful match (for example immutable static asset cache headers)
    *   `routing.fallback`: Final rewrite fallback routes
    *   `routing.shouldNormalizeNextData`: Whether `/_next/data/<buildId>/...` URLs should be normalized during matching
    *   `routing.rsc`: Route metadata used for React Server Components routing behavior

*   `context.outputs`: Detailed information about all build outputs organized by type
*   `context.projectDir`: Absolute path to the Next.js project directory
*   `context.repoRoot`: Absolute path to the detected repository root
*   `context.distDir`: Absolute path to the build output directory
*   `context.config`: The final Next.js configuration (with `modifyConfig` applied)
*   `context.nextVersion`: Version of Next.js being used
*   `context.buildId`: Unique identifier for the current build

Previous Creating an AdapterNext Testing Adapters