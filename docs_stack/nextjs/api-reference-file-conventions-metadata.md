# Metadata Files API Reference

Last updated April 8, 2026

This section of the docs covers **Metadata file conventions**. File-based metadata can be defined by adding special metadata files to route segments.

Each file convention can be defined using a static file (e.g. `opengraph-image.jpg`), or a dynamic variant that uses code to generate the file (e.g. `opengraph-image.js`).

Once a file is defined, Next.js will automatically serve the file (with hashes in production for caching) and update the relevant head elements with the correct metadata, such as the asset's URL, file type, and image size.

> **Good to know**:
> 
> 
> * Special Route Handlers like `sitemap.ts`, `opengraph-image.tsx`, and `icon.tsx`, and other metadata files are cached by default.
> * If using along with `proxy.ts`, configure the matcher to exclude the metadata files.

### favicon, icon, and apple-icon API Reference for the Favicon, Icon and Apple Icon file conventions.### manifest.json API Reference for manifest.json file.### opengraph-image and twitter-image API Reference for the Open Graph Image and Twitter Image file conventions.### robots.txt API Reference for robots.txt file.### sitemap.xml API Reference for the sitemap.xml file.

Previous unauthorized.jsNext favicon, icon, and apple-icon

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