**Note** — The docs for Zod Mini are interleaved with the regular Zod docs via tabbed code blocks. This page is designed to explain why Zod Mini exists, when to use it, and some key differences from regular Zod.

Zod Mini variant was introduced with the release of Zod 4. To try it:

To import it:

Zod Mini implements the exact same functionality as `zod`, but using a _functional_, _tree-shakable_ API. If you're coming from `zod`, this means you generally will use _functions_ in place of methods.

Tree-shaking is a technique used by modern bundlers to remove unused code from the final bundle. It's also referred to as _dead-code elimination_.

In regular Zod, schemas provide a range of convenience methods to perform some common operations (e.g. `.min()` on string schemas). Bundlers are generally not able to remove ("treeshake") unused method implementations from your bundle, but they are able to remove unused top-level functions. As such, the API of Zod Mini uses more functions than methods.

To give a general idea about the bundle size reduction, consider this simple script:

Bundling this with Zod and Zod Mini results in the following bundle sizes. Zod Mini results in a 64% reduction.

| Package | Bundle size (gzip) |
| --- | --- |
| Zod Mini | `2.12kb` |
| Zod | `5.91kb` |

With a marginally more complex schema that involves object types:

| Package | Bundle size (gzip) |
| --- | --- |
| Zod Mini | `4.0kb` |
| Zod | `13.1kb` |

This gives you a sense of the bundle sizes involved. Look closely at these numbers and run your own benchmarks to determine if using Zod Mini is worth it for your use case.

In general you should probably use regular Zod unless you have uncommonly strict constraints around bundle size. Many developers massively overestimate the importance of bundle size to application performance. In practice, bundle size on the scale of Zod (`5-10kb` typically) is only a meaningful concern when optimizing front-end bundles for a user base with slow mobile network connections in rural or developing areas.

Let's run through some considerations:

### DX

The API of Zod Mini is more verbose and less discoverable. The methods in Zod's API are much easier to discover & autocomplete through Intellisense than the top-level functions in Zod Mini. It isn't possible to quickly build a schema with chained APIs. (Speaking as the creator of Zod: I spent a lot of time designing the Zod Mini API to be as ergonomic as possible, but I still have a strong preference the standard Zod API.)

### Backend development

If you are using Zod on the backend, bundle size on the scale of Zod is not meaningful. This is true even in resource-constrained environments like Lambda. This post benchmarks cold start times with bundles of various sizes. Here is a subset of the results:

| Bundle size | Lambda cold start time |
| --- | --- |
| `1kb` | `171ms` |
| `17kb` (size of gzipped non-Mini Zod) | `171.6ms` (interpolated) |
| `128kb` | `176ms` |
| `256kb` | `182ms` |
| `512kb` | `279ms` |
| `1mb` | `557ms` |

The minimum cold start time for a negligible `1kb` bundle is `171ms`. The next bundle size tested is `128kb`, which added only `5ms`. When gzipped, the bundle size for the entirely of regular Zod is roughly `17kb`, which would correspond to a `0.6ms` increase in startup time.

### Internet speed

Generally, the round trip time to the server (`100-200ms`) will dwarf the time required to download an additional `10kb`. Only on slow 3G connections (sub-`1Mbps`) does the download time for an additional `10kb` become more significant. If you aren't optimizing specifically for users in rural or developing areas, your time is likely better spent optimizing something else.

All Zod Mini schemas extend the `z.ZodMiniType` base class, which in turn extends `z.core.$ZodType` from `zod/v4/core`. While this class implements far fewer methods than `ZodType` in `zod`, some particularly useful methods remain.

### `.parse`

This is an obvious one. All Zod Mini schemas implement the same parsing methods as `zod`.

### `.check()`

In regular Zod there are dedicated methods on schema subclasses for performing common checks:

In Zod Mini such methods aren't implemented. Instead you pass these checks into schemas using the `.check()` method:

The following checks are implemented. Some of these checks only apply to schemas of certain types (e.g. strings or numbers). The APIs are all type-safe; TypeScript won't let you add an unsupported check to your schema.

### `.register()`

For registering a schema in a registry.

### `.brand()`

For _branding_ a schema. Refer to the Branded types docs for more information.

### `.clone(def)`

Returns an identical clone of the current schema using the provided `def`.

While regular Zod automatically loads the English (`en`) locale, Zod Mini does not. This reduces the bundle size in scenarios where error messages are unnecessary, localized to a non-English language, or otherwise customized.

This means, by default the `message` property of all issues will simply read `"Invalid input"`. To load the English locale:

Refer to the Locales docs for more on localization.