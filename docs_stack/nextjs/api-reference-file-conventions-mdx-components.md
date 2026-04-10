# mdx-components.js

Last updated April 8, 2026

The `mdx-components.js|tsx` file is **required** to use `@next/mdx` with App Router and will not work without it. Additionally, you can use it to customize styles.

Use the file `mdx-components.tsx` (or `.js`) in the root of your project to define MDX Components. For example, at the same level as `pages` or `app`, or inside `src` if applicable.

mdx-components.tsx

TypeScript

```
import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {}
 
export function useMDXComponents(): MDXComponents {
 return components
}
```

## Exports

### `useMDXComponents` function

The file must export a single function named `useMDXComponents`. This function does not accept any arguments.

mdx-components.tsx

TypeScript

```
import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {}
 
export function useMDXComponents(): MDXComponents {
 return components
}
```

## Version History

| Version | Changes |
| --- | --- |
| `v13.1.2` | MDX Components added |

## Learn more about MDX Components

### MDX Learn how to configure MDX and use it in your Next.js apps.

Previous loading.jsNext not-found.js

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