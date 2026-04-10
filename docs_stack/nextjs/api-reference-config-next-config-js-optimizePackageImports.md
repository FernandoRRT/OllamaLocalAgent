# optimizePackageImports

This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback onGitHub.

Last updated April 8, 2026

Some packages can export hundreds or thousands of modules, which can cause performance issues in development and production.

Adding a package to `experimental.optimizePackageImports` will only load the modules you are actually using, while still giving you the convenience of writing import statements with many named exports.

next.config.js

```
module.exports = {
 experimental: {
 optimizePackageImports: ['package-name'],
 },
}
```

The following libraries are optimized by default:

* `lucide-react`
* `date-fns`
* `lodash-es`
* `ramda`
* `antd`
* `react-bootstrap`
* `ahooks`
* `@ant-design/icons`
* `@headlessui/react`
* `@headlessui-float/react`
* `@heroicons/react/20/solid`
* `@heroicons/react/24/solid`
* `@heroicons/react/24/outline`
* `@visx/visx`
* `@tremor/react`
* `rxjs`
* `@mui/material`
* `@mui/icons-material`
* `recharts`
* `react-use`
* `@material-ui/core`
* `@material-ui/icons`
* `@tabler/icons-react`
* `mui-core`
* `react-icons/*`
* `effect`
* `@effect/*`

Previous onDemandEntriesNext output

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