# htmlLimitedBots

Last updated April 8, 2026

The `htmlLimitedBots` config allows you to specify a list of user agents that should receive blocking metadata instead of streaming metadata.

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const config: NextConfig = {
 htmlLimitedBots: /MySpecialBot|MyAnotherSpecialBot|SimpleCrawler/,
}
 
export default config
```

## Default list

Next.js includes a default list of HTML limited bots, including:

* Google crawlers (e.g. Mediapartners-Google, AdsBot-Google, Google-PageRenderer)
* Bingbot
* Twitterbot
* Slackbot

See the full list here.

Specifying a `htmlLimitedBots` config will override the Next.js' default list. However, this is advanced behavior, and the default should be sufficient for most cases.

next.config.ts

TypeScript

```
const config: NextConfig = {
 htmlLimitedBots: /MySpecialBot|MyAnotherSpecialBot|SimpleCrawler/,
}
 
export default config
```

## Disabling

To fully disable streaming metadata:

next.config.ts

```
import type { NextConfig } from 'next'
 
const config: NextConfig = {
 htmlLimitedBots: /.*/,
}
 
export default config
```

## Version History

| Version | Changes |
| --- | --- |
| 15.2.0 | `htmlLimitedBots` option introduced. |

Previous headersNext httpAgentOptions

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