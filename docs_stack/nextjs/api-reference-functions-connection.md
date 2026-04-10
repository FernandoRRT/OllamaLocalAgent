# connection

Last updated April 8, 2026

The `connection()` function allows you to indicate rendering should wait for an incoming user request before continuing.

It's useful when a component doesn't use Request-time APIs, but you want it to be rendered at runtime and not prerendered at build time. This usually occurs when you access external information that you intentionally want to change the result of a render, such as `Math.random()` or `new Date()`.

app/page.tsx

TypeScript

```
import { connection } from 'next/server'
 
export default async function Page() {
  await connection()
  // Everything below will be excluded from prerendering
  const rand = Math.random()
  return <span>{rand}</span>
}
```

## Reference[](https://nextjs.org/docs/app/api-reference/functions/connection#reference)

### Type[](https://nextjs.org/docs/app/api-reference/functions/connection#type)

`function connection(): Promise<void>`

### Parameters[](https://nextjs.org/docs/app/api-reference/functions/connection#parameters)

*   The function does not accept any parameters.

### Returns[](https://nextjs.org/docs/app/api-reference/functions/connection#returns)

*   The function returns a `void` Promise. It is not meant to be consumed.

## Good to know[](https://nextjs.org/docs/app/api-reference/functions/connection#good-to-know)

*   `connection` replaces `unstable_noStore` to better align with the future of Next.js.
*   The function is only necessary when dynamic rendering is required and common Request-time APIs are not used.

### Version History[](https://nextjs.org/docs/app/api-reference/functions/connection#version-history)

| Version | Changes |
| --- | --- |
| `v15.0.0` | `connection` stabilized. |
| `v15.0.0-RC` | `connection` introduced. |

Previous unstable_catchErrorNext cookies