# Routing Information

Last updated April 8, 2026

The `routing` object in `onBuildComplete` provides complete routing information with processed patterns ready for deployment:

## `routing.beforeMiddleware`[](https://nextjs.org/docs/app/api-reference/adapters/routing-information#routingbeforemiddleware)

Routes applied before middleware execution. These include generated header and redirect behavior.

## `routing.beforeFiles`[](https://nextjs.org/docs/app/api-reference/adapters/routing-information#routingbeforefiles)

Rewrite routes checked before filesystem route matching.

## `routing.afterFiles`[](https://nextjs.org/docs/app/api-reference/adapters/routing-information#routingafterfiles)

Rewrite routes checked after filesystem route matching.

## `routing.dynamicRoutes`[](https://nextjs.org/docs/app/api-reference/adapters/routing-information#routingdynamicroutes)

Dynamic matchers generated from route segments such as `[slug]` and catch-all routes.

## `routing.onMatch`[](https://nextjs.org/docs/app/api-reference/adapters/routing-information#routingonmatch)

Routes that apply after a successful match, such as immutable cache headers for hashed static assets.

## `routing.fallback`[](https://nextjs.org/docs/app/api-reference/adapters/routing-information#routingfallback)

Final rewrite routes checked when earlier phases did not produce a match.

## Common Route Fields[](https://nextjs.org/docs/app/api-reference/adapters/routing-information#common-route-fields)

Each route entry can include:

*   `source`: Original route pattern (optional for generated internal rules)
*   `sourceRegex`: Compiled regex for matching requests
*   `destination`: Internal destination or redirect destination
*   `headers`: Headers to apply
*   `has`: Positive matching conditions
*   `missing`: Negative matching conditions
*   `status`: Redirect status code
*   `priority`: Internal route priority flag

Previous Output TypesNext Use Cases