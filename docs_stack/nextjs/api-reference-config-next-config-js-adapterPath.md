# adapterPath

Last updated April 8, 2026

Next.js provides a built-in adapters API. It allows deployment platforms or build systems to integrate with the Next.js build process.

For a full reference implementation, see the `nextjs/adapter-vercel` adapter.

## Configuration[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#configuration)

To use an adapter, specify the path to your adapter module in `adapterPath`:

next.config.js

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  adapterPath: require.resolve('./my-adapter.js'),
}
 
module.exports = nextConfig
```

Alternatively `NEXT_ADAPTER_PATH` can be set to enable zero-config usage in deployment platforms.

## Adapters[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#adapters)

For full adapter implementation details, use the dedicated Adapters section:

*   Configuration
*   Creating an Adapter
*   API Reference
*   Testing Adapters
*   Routing with `@next/routing`
*   Implementing PPR in an Adapter
*   Runtime Integration
*   Invoking Entrypoints
*   Output Types
*   Routing Information
*   Use Cases

## Creating an Adapter[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#creating-an-adapter)

See Creating an Adapter.

## API Reference[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#api-reference)

See API Reference.

## Testing Adapters[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#testing-adapters)

See Testing Adapters.

## Routing with `@next/routing`[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#routing-with-nextrouting)

See Routing with `@next/routing`.

## Implementing PPR in an Adapter[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#implementing-ppr-in-an-adapter)

See Implementing PPR in an Adapter.

## Runtime Integration[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#runtime-integration)

See Runtime Integration.

## Invoking Entrypoints[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#invoking-entrypoints)

See Invoking Entrypoints.

## Output Types[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#output-types)

See Output Types.

## Routing Information[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#routing-information)

See Routing Information.

## Use Cases[](https://nextjs.org/docs/app/api-reference/config/next-config-js/adapterPath#use-cases)

See Use Cases.

Previous next.config.jsNext allowedDevOrigins