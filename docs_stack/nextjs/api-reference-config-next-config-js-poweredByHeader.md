# poweredByHeader

Last updated April 8, 2026

By default Next.js will add the `x-powered-by` header. To opt-out of it, open `next.config.js` and disable the `poweredByHeader` config:

next.config.js

```
module.exports = {
  poweredByHeader: false,
}
```

Previous pageExtensionsNext productionBrowserSourceMaps