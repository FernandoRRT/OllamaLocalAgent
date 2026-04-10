# Adapters

Last updated April 8, 2026

Use this section to build and validate deployment adapters that integrate with the Next.js build and runtime model.

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

### Configuration Configure `adapterPath` or `NEXT_ADAPTER_PATH` to use a custom deployment adapter.### Creating an Adapter Create an adapter module that implements the `NextAdapter` interface.### API Reference Reference for `modifyConfig` and `onBuildComplete` in the `NextAdapter` interface.### Testing Adapters Validate adapters with the Next.js compatibility test harness and custom lifecycle scripts.### Routing with @next/routing Use `@next/routing` to apply Next.js route matching behavior in adapters.### Implementing PPR in an Adapter Implement Partial Prerendering support in an adapter using fallback output and cache hooks.### Runtime Integration Understand how build-time adapters and runtime cache interfaces work together.### Invoking Entrypoints Invoke Node.js and Edge build entrypoints with adapter runtime context.### Output Types Reference for all build output types exposed to adapters.### Routing Information Reference for routing phases and route fields exposed in `onBuildComplete`.### Use Cases Common patterns and examples for deployment adapter implementations.

Previous next CLINext Configuration