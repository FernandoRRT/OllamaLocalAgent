# forbidden.js

This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback onGitHub.

Last updated April 8, 2026

The **forbidden** file is used to render UI when the `forbidden` function is invoked during authentication. Along with allowing you to customize the UI, Next.js will return a `403` status code.

app/forbidden.tsx

TypeScript

```
import Link from 'next/link'
 
export default function Forbidden() {
  return (
    <div>
      <h2>Forbidden</h2>
      <p>You are not authorized to access this resource.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
```

## Reference[](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden#reference)

### Props[](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden#props)

`forbidden.js` components do not accept any props.

## Version History[](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden#version-history)

| Version | Changes |
| --- | --- |
| `v15.1.0` | `forbidden.js` introduced. |

### forbidden API Reference for the forbidden function.

Previous error.jsNext instrumentation.js