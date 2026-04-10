# reactCompiler

Last updated April 8, 2026

Next.js includes support for the React Compiler, a tool designed to improve performance by automatically optimizing component rendering. This reduces the need for manual memoization using `useMemo` and `useCallback`.

Next.js includes a custom performance optimization written in SWC that makes the React Compiler more efficient. Instead of running the compiler on every file, Next.js analyzes your project and only applies the React Compiler to relevant files. This avoids unnecessary work and leads to faster builds compared to using the Babel plugin on its own.

## How It Works

The React Compiler runs through a Babel plugin. To keep builds fast, Next.js uses a custom SWC optimization that only applies the React Compiler to relevant files—like those with JSX or React Hooks.

This avoids compiling everything and keeps the performance cost minimal. You may still see slightly slower builds compared to the default Rust-based compiler, but the impact is small and localized.

To use it, install the `babel-plugin-react-compiler`:

pnpm npm yarn bun

`pnpm add -D babel-plugin-react-compiler`

Then, add `reactCompiler` option in `next.config.js`:

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
 reactCompiler: true,
}
 
export default nextConfig
```

## Annotations

You can configure the compiler to run in "opt-in" mode as follows:

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
 reactCompiler: {
 compilationMode: 'annotation',
 },
}
 
export default nextConfig
```

Then, you can annotate specific components or hooks with the `"use memo"` directive from React to opt-in:

app/page.tsx

TypeScript

```
export default function Page() {
 'use memo'
 // ...
}
```

> **Note:** You can also use the `"use no memo"` directive from React for the opposite effect, to opt-out a component or hook.

Previous proxyClientMaxBodySizeNext reactMaxHeadersLength

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