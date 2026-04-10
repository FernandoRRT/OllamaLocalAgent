# adapterPath

Last updated April 8, 2026

Next.js provides a built-in adapters API. It allows deployment platforms or build systems to integrate with the Next.js build process.

For a full reference implementation, see the `nextjs/adapter-vercel` adapter.

## Configuration

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

## Adapters

For full adapter implementation details, use the dedicated Adapters section:

* Configuration
* Creating an Adapter
* API Reference
* Testing Adapters
* Routing with `@next/routing`
* Implementing PPR in an Adapter
* Runtime Integration
* Invoking Entrypoints
* Output Types
* Routing Information
* Use Cases

## Creating an Adapter

See Creating an Adapter.

## API Reference

See API Reference.

## Testing Adapters

See Testing Adapters.

## Routing with `@next/routing`

See Routing with `@next/routing`.

## Implementing PPR in an Adapter

See Implementing PPR in an Adapter.

## Runtime Integration

See Runtime Integration.

## Invoking Entrypoints

See Invoking Entrypoints.

## Output Types

See Output Types.

## Routing Information

See Routing Information.

## Use Cases

See Use Cases.