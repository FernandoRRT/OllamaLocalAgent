# preferredRegion

Last updated April 8, 2026

The `preferredRegion` option allows you to specify the preferred deployment region for a route segment. This value is passed to your deployment platform.

layout.tsx | page.tsx | route.ts

TypeScript

`export const preferredRegion = // string || string[]`

* **`string`**: Deploy the route to a specific region. Available region codes are platform-specific. For example, `'iad1'`.
* **`string[]`**: Deploy the route to multiple specific regions. The route is deployed to **all** listed regions, not a single one chosen from the list. For example, `['iad1', 'sfo1']`.

> **Good to know**:
> 
> 
> * If a `preferredRegion` is not specified, it will inherit the option of the nearest parent layout. The root layout defaults to `'auto'`.
> * A child segment's value overrides the parent, values are not merged.
> * Next.js passes the region values through to the deployment platform. The exact behavior and available region codes are platform-specific. Refer to your deployment platform's documentation for supported values.

## Vercel

If deploying Next.js on Vercel, regions are only supported if `export const runtime = 'edge'` is set. The following options can be passed:

* **`'auto'`** (default): Uses the default region.
* **`'global'`**: Prefer deploying the route to all availableregions.
* **`'home'`**: Prefer deploying the route to the home region.

If an unsupported value is passed, an error will be thrown.

Previous maxDurationNext runtime

Was this helpful?

supported.

Send

* * *

* * *

#### Resources

DocsSupport PolicyLearnShowcaseBlogTeamAnalyticsNext.js ConfPreviewsEvals

#### More

Next.js CommerceContact SalesCommunityGitHubReleasesTelemetryGovernanceEcosystem Working Group

#### About Vercel

Next.js + VercelOpen Source SoftwareGitHubBlueskyX

#### Legal

Privacy PolicyCookie Preferences

#### Subscribe to our newsletter

Stay updated on new releases and features, guides, and case studies.

Subscribe

© 2026 Vercel, Inc.

* * *

* * *