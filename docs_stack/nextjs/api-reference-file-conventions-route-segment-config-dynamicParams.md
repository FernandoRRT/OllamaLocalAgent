# dynamicParams

Last updated April 8, 2026

The `dynamicParams` option allows you to control what happens when a dynamic segment is visited that was not generated with generateStaticParams.

layout.tsx | page.tsx

TypeScript

`export const dynamicParams = true // true | false`

* **`true`** (default): Dynamic route segments not included in `generateStaticParams` are generated at request time.
* **`false`**: Dynamic route segments not included in `generateStaticParams` will return a 404.

> **Good to know**:
> 
> 
> * This option replaces the `fallback: true | false | blocking` option of `getStaticPaths` in the `pages` directory.
> * `dynamicParams` is not available when Cache Components is enabled.

Previous Route Segment ConfigNext maxDuration

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