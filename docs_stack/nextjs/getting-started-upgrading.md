# Upgrading

Last updated April 8, 2026

## Latest version[](https://nextjs.org/docs/app/getting-started/upgrading#latest-version)

To update to the latest version of Next.js, you can use the `upgrade` command:

pnpm npm yarn bun

Terminal

`pnpm next upgrade`

Versions before Next.js 16.1.0 do not support the `upgrade` command and need to use a separate package instead:

Terminal

`npx @next/codemod@canary upgrade latest`

If you prefer to upgrade manually, install the latest Next.js and React versions:

pnpm npm yarn bun

Terminal

`pnpm i next@latest react@latest react-dom@latest eslint-config-next@latest`

## Canary version[](https://nextjs.org/docs/app/getting-started/upgrading#canary-version)

To update to the latest canary, make sure you're on the latest version of Next.js and everything is working as expected. Then, run the following command:

pnpm npm yarn bun

Terminal

`pnpm add next@canary`

### Features available in canary[](https://nextjs.org/docs/app/getting-started/upgrading#features-available-in-canary)

The following features are currently available in canary:

**Authentication**:

*   `forbidden`
*   `unauthorized`
*   `forbidden.js`
*   `unauthorized.js`
*   `authInterrupts`

## Version guides

See the version guides for in-depth upgrade instructions.

### Version 16 Upgrade your Next.js Application from Version 15 to 16.### Version 15 Upgrade your Next.js Application from Version 14 to 15.### Version 14 Upgrade your Next.js Application from Version 13 to 14.

Previous DeployingNext Guides