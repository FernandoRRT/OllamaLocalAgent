# Route Segment Config

Last updated April 8, 2026

The Route Segment Config options allow you to configure the behavior of a Page, Layout, or Route Handler by directly exporting the following variables:

| Option | Type | Default |
| --- | --- | --- |
| `dynamicParams` | `boolean` | `true` |
| `runtime` | `'nodejs' | 'edge'` | `'nodejs'` |
| `preferredRegion` | `'auto' | 'global' | 'home' | string | string[]` | `'auto'` |
| `maxDuration` | `number` | Set by deployment platform |

## Version History[](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#version-history)

| Version |  |
| --- | --- |
| `v16.0.0` | `dynamic`, `dynamicParams`, `revalidate`, and `fetchCache` removed when Cache Components is enabled. See Caching and Revalidating (Previous Model). |
| `v16.0.0` | `export const experimental_ppr = true` removed. A codemod is available. |
| `v15.0.0-RC` | `export const runtime = "experimental-edge"` deprecated. A codemod is available. |

### dynamicParams API reference for the dynamicParams route segment config option.### maxDuration API reference for the maxDuration route segment config option.### preferredRegion API reference for the preferredRegion route segment config option.### runtime API reference for the runtime route segment config option.

Previous sitemap.xmlNext dynamicParams