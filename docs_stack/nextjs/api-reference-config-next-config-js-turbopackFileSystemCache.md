# Turbopack FileSystem Caching

Last updated April 8, 2026

## Usage

Turbopack FileSystem Cache enables Turbopack to reduce work across `next dev` or `next build` commands. When enabled, Turbopack will save and restore data to the `.next` folder between builds, which can greatly speed up subsequent builds and dev sessions.

> **Good to know:** The FileSystem Cache feature is considered stable for development and experimental for production builds

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
 experimental: {
 // Enable filesystem caching for `next dev`
 turbopackFileSystemCacheForDev: true,
 // Enable filesystem caching for `next build`
 turbopackFileSystemCacheForBuild: true,
 },
}
 
export default nextConfig
```

## Version Changes

| Version | Changes |
| --- | --- |
| `v16.1.0` | FileSystem caching is enabled by default for development |
| `v16.0.0` | Beta release with separate flags for build and dev |
| `v15.5.0` | Persistent caching released as experimental on canary releases |

Previous turbopackNext turbopack.ignoreIssue

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