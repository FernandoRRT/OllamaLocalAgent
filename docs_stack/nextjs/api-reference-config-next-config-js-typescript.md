# typescript

Last updated April 8, 2026

Configure TypeScript behavior with the `typescript` option in `next.config.js`:

next.config.js

```
module.exports = {
 typescript: {
 ignoreBuildErrors: false,
 tsconfigPath: 'tsconfig.json',
 },
}
```

## Options

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `ignoreBuildErrors` | `boolean` | `false` | Allow production builds to complete even with TypeScript errors. |
| `tsconfigPath` | `string` | `'tsconfig.json'` | Path to a custom `tsconfig.json` file. |

## `ignoreBuildErrors`

Next.js fails your **production build** (`next build`) when TypeScript errors are present in your project.

If you'd like Next.js to dangerously produce production code even when your application has errors, you can disable the built-in type checking step.

Note that this completely skips the TypeScript type checking step. It does not run TypeScript and suppress errors, it bypasses the check entirely.

If disabled, be sure you are running type checks as part of your build or deploy process, otherwise this can be very dangerous.

next.config.js

```
module.exports = {
 typescript: {
 // !! WARN !!
 // Dangerously allow production builds to successfully complete even if
 // your project has type errors.
 // !! WARN !!
 ignoreBuildErrors: true,
 },
}
```

## `tsconfigPath`

Use a different TypeScript configuration file for builds or tooling:

next.config.js

```
module.exports = {
 typescript: {
 tsconfigPath: 'tsconfig.build.json',
 },
}
```

See the TypeScript configuration page for more details.

Previous typedRoutesNext urlImports

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