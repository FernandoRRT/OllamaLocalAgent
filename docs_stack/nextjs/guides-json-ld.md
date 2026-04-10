# How to implement JSON-LD in your Next.js application

Last updated April 8, 2026

JSON-LD is a format for structured data that can be used by search engines and AI to help them understand the structure of the page beyond pure content. For example, you can use it to describe a person, an event, an organization, a movie, a book, a recipe, and many other types of entities.

Our current recommendation for JSON-LD is to render structured data as a `<script>` tag in your `layout.js` or `page.js` components.

The following snippet uses `JSON.stringify`, which does not sanitize malicious strings used in XSS injection. To prevent this type of vulnerability, you can scrub `HTML` tags from the `JSON-LD` payload, for example, by replacing the character, `<`, with its unicode equivalent, `\u003c`.

Review your organization's recommended approach to sanitize potentially dangerous strings, or use community maintained alternatives for `JSON.stringify` such as, serialize-javascript.

app/products/[id]/page.tsx

TypeScript

```
export default async function Page({ params }) {
 const { id } = await params
 const product = await getProduct(id)
 
 const jsonLd = {
 '@context': 'https://schema.org',
 '@type': 'Product',
 name: product.name,
 image: product.image,
 description: product.description,
 }
 
 return (
 <section>
 {/* Add JSON-LD to your page */}
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
 }}
 />
 {/* ... */}
 </section>
 )
}
```

You can validate and test your structured data with the Rich Results Test for Google or the generic Schema Markup Validator.

You can type your JSON-LD with TypeScript using community packages like `schema-dts`:

```
import { Product, WithContext } from 'schema-dts'
 
const jsonLd: WithContext<Product> = {
 '@context': 'https://schema.org',
 '@type': 'Product',
 name: 'Next.js Sticker',
 image: 'https://nextjs.org/imgs/sticker.png',
 description: 'Dynamic at the speed of static.',
}
```

> **Good to know**: The `next/script` component is optimized for loading and executing JavaScript. Since JSON-LD is structured data, not executable code, a native `<script>` tag is the right choice here.

Previous InternationalizationNext Lazy Loading

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