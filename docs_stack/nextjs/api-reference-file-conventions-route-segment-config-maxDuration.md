# maxDuration

Last updated April 8, 2026

The `maxDuration` option allows you to set the maximum execution time (in seconds) for server-side logic in a route segment. Deployment platforms can use `maxDuration` from the Next.js build output to add specific execution limits.

layout.tsx | page.tsx | route.ts

TypeScript

`export const maxDuration = 5`

## Server Actions[](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/maxDuration#server-actions)

If using Server Actions, set the `maxDuration` at the page level to change the default timeout of all Server Actions used on the page.

## Version History[](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config/maxDuration#version-history)

| Version | Changes |
| --- | --- |
| `v13.4.10` | `maxDuration` introduced. |

Previous dynamicParamsNext preferredRegion