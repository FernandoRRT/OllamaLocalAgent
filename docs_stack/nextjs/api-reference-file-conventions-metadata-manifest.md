# manifest.json

Last updated April 8, 2026

Add or generate a `manifest.(json|webmanifest)` file that matches the Web Manifest Specification in the **root** of `app` directory to provide information about your web application for the browser.

## Static Manifest file

app/manifest.json | app/manifest.webmanifest

```
{
 "name": "My Next.js Application",
 "short_name": "Next.js App",
 "description": "An application built with Next.js",
 "start_url": "/"
 // ...
}
```

## Generate a Manifest file

Add a `manifest.js` or `manifest.ts` file that returns a `Manifest` object.

> Good to know: `manifest.js` is a special Route Handlers that is cached by default unless it uses a Request-time API or dynamic config option.

app/manifest.ts

TypeScript

```
import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
 return {
 name: 'Next.js App',
 short_name: 'Next.js App',
 description: 'Next.js App',
 start_url: '/',
 display: 'standalone',
 background_color: '#fff',
 theme_color: '#fff',
 icons: [
 {
 src: '/favicon.ico',
 sizes: 'any',
 type: 'image/x-icon',
 },
 ],
 }
}
```

### Manifest Object

The manifest object contains an extensive list of options that may be updated due to new web standards. For information on all the current options, refer to the `MetadataRoute.Manifest` type in your code editor if using TypeScript or see the MDN docs.

Previous favicon, icon, and apple-iconNext opengraph-image and twitter-image

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