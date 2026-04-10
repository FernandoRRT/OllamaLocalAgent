# mdxRs

This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback onGitHub.

Last updated April 8, 2026

For experimental use with `@next/mdx`. Compiles MDX files using the new Rust compiler.

next.config.js

```
const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
 pageExtensions: ['ts', 'tsx', 'mdx'],
 experimental: {
 mdxRs: true,
 },
}
 
module.exports = withMDX(nextConfig)
```

Previous loggingNext onDemandEntries

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