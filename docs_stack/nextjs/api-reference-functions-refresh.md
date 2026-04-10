# refresh

Last updated April 8, 2026

`refresh` allows you to refresh the client router from within a Server Action.

## Usage

`refresh` can **only** be called from within Server Actions. It cannot be used in Route Handlers, Client Components, or any other context.

## Parameters

`refresh(): void;`

## Returns

`refresh` does not return a value.

## Examples

app/actions.ts

TypeScript

```
'use server'
 
import { refresh } from 'next/cache'
 
export async function createPost(formData: FormData) {
 const title = formData.get('title')
 const content = formData.get('content')
 
 // Create the post in your database
 const post = await db.post.create({
 data: { title, content },
 })
 
 refresh()
}
```

### Error when used outside Server Actions

app/api/posts/route.ts

TypeScript

```
import { refresh } from 'next/cache'
 
export async function POST() {
 // This will throw an error
 refresh()
}
```

Previous redirectNext revalidatePath

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