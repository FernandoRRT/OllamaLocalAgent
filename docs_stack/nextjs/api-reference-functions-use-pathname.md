# usePathname

Last updated April 8, 2026

`usePathname` is a **Client Component** hook that lets you read the current URL's **pathname**.

> **Good to know**: When `cacheComponents` is enabled `usePathname` may require a `Suspense` boundary around it if your route has a dynamic param. If you use `generateStaticParams` the `Suspense` boundary is optional

app/example-client-component.tsx

TypeScript

```
'use client'
 
import { usePathname } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const pathname = usePathname()
  return <p>Current pathname: {pathname}</p>
}
```

`usePathname` intentionally requires using a Client Component. It's important to note Client Components are not a de-optimization. They are an integral part of the Server Components architecture.

For example, a Client Component with `usePathname` will be rendered into HTML on the initial page load. When navigating to a new route, this component does not need to be re-fetched. Instead, the component is downloaded once (in the client JavaScript bundle), and re-renders based on the current state.

> **Good to know**:
> 
> 
> *   Reading the current URL from a Server Component is not supported. This design is intentional to support layout state being preserved across page navigations.
> *   If your page is being statically prerendered and your app has rewrites in `next.config` or a Proxy file, reading the pathname with `usePathname()` can result in hydration mismatch errors—because the initial value comes from the server and may not match the actual browser pathname after routing. See our example for a way to mitigate this issue.

Compatibility with Pages Router
If you have components that use `usePathname` and they are imported into routes within the Pages Router, be aware that `usePathname` may return `null` if the router is not yet initialized. This can occur in cases such as fallback routes or during Automatic Static Optimization in the Pages Router.

To enhance compatibility between routing systems, if your project contains both an `app` and a `pages` directory, Next.js will automatically adjust the return type of `usePathname`.

## Parameters[](https://nextjs.org/docs/app/api-reference/functions/use-pathname#parameters)

`const pathname = usePathname()`

`usePathname` does not take any parameters.

## Returns[](https://nextjs.org/docs/app/api-reference/functions/use-pathname#returns)

`usePathname` returns a string of the current URL's pathname. For example:

| URL | Returned value |
| --- | --- |
| `/` | `'/'` |
| `/dashboard` | `'/dashboard'` |
| `/dashboard?v=2` | `'/dashboard'` |
| `/blog/hello-world` | `'/blog/hello-world'` |

## Examples[](https://nextjs.org/docs/app/api-reference/functions/use-pathname#examples)

### Do something in response to a route change[](https://nextjs.org/docs/app/api-reference/functions/use-pathname#do-something-in-response-to-a-route-change)

app/example-client-component.tsx

TypeScript

```
'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
 
function ExampleClientComponent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    // Do something here...
  }, [pathname, searchParams])
}
```

### Avoid hydration mismatch with rewrites[](https://nextjs.org/docs/app/api-reference/functions/use-pathname#avoid-hydration-mismatch-with-rewrites)

When a page is prerendered, the HTML is generated for the source pathname. If the page is then reached through a rewrite using `next.config` or `Proxy`, the browser URL may differ, and `usePathname()` will read the rewritten pathname on the client.

To avoid hydration mismatches, design the UI so that only a small, isolated part depends on the client pathname. Render a stable fallback on the server and update that part after mount.

app/example-client-component.tsx

TypeScript

```
'use client'
 
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
 
export default function PathnameBadge() {
  const pathname = usePathname()
  const [clientPathname, setClientPathname] = useState('')
 
  useEffect(() => {
    setClientPathname(pathname)
  }, [pathname])
 
  return (
    <p>
      Current pathname: <span>{clientPathname}</span>
    </p>
  )
}
```

| Version | Changes |
| --- | --- |
| `v13.0.0` | `usePathname` introduced. |

Previous useParamsNext useReportWebVitals