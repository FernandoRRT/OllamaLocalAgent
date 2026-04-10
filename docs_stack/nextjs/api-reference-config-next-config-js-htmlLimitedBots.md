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

## Default list[](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots#default-list)

Next.js includes a default list of HTML limited bots, including:

*   Google crawlers (e.g. Mediapartners-Google, AdsBot-Google, Google-PageRenderer)
*   Bingbot
*   Twitterbot
*   Slackbot

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

## Disabling[](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots#disabling)

To fully disable streaming metadata:

next.config.ts

```
import type { NextConfig } from 'next'
 
const config: NextConfig = {
  htmlLimitedBots: /.*/,
}
 
export default config
```

## Version History[](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots#version-history)

| Version | Changes |
| --- | --- |
| 15.2.0 | `htmlLimitedBots` option introduced. |

Previous headersNext httpAgentOptions