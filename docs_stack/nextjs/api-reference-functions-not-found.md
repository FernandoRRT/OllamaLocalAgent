# notFound

Last updated April 8, 2026

The `notFound` function allows you to render the `not-found file` within a route segment as well as inject a `<meta name="robots" content="noindex" />` tag for search engines.

## `notFound()`

Invoking the `notFound()` function throws a `NEXT_HTTP_ERROR_FALLBACK;404` error and terminates rendering of the route segment in which it was thrown. Specifying a **not-found** file allows you to gracefully handle such errors by rendering a Not Found UI within the segment.

app/user/[id]/page.js

```
import { notFound } from 'next/navigation'
 
async function fetchUser(id) {
 const res = await fetch('https://...')
 if (!res.ok) return undefined
 return res.json()
}
 
export default async function Profile({ params }) {
 const { id } = await params
 const user = await fetchUser(id)
 
 if (!user) {
 notFound()
 }
 
 // ...
}
```

> **Good to know**: `notFound()` does not require you to use `return notFound()` due to using the TypeScript `never` type.

## Version History

| Version | Changes |
| --- | --- |
| `v13.0.0` | `notFound` introduced. |

Previous NextResponseNext permanentRedirect

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