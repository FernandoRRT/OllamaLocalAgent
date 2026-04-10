# maxDuration

Last updated April 8, 2026

The `maxDuration` option allows you to set the maximum execution time (in seconds) for server-side logic in a route segment. Deployment platforms can use `maxDuration` from the Next.js build output to add specific execution limits.

layout.tsx | page.tsx | route.ts

TypeScript

`export const maxDuration = 5`

## Server Actions

If using Server Actions, set the `maxDuration` at the page level to change the default timeout of all Server Actions used on the page.

## Version History

| Version | Changes |
| --- | --- |
| `v13.4.10` | `maxDuration` introduced. |

Previous dynamicParamsNext preferredRegion

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