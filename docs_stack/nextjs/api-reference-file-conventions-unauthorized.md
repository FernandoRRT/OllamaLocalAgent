# unauthorized.js

This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback onGitHub.

Last updated April 8, 2026

The **unauthorized** file is used to render UI when the `unauthorized` function is invoked during authentication. Along with allowing you to customize the UI, Next.js will return a `401` status code.

app/unauthorized.tsx

TypeScript

```
import Login from '@/app/components/Login'
 
export default function Unauthorized() {
  return (
    <main>
      <h1>401 - Unauthorized</h1>
      <p>Please log in to access this page.</p>
      <Login />
    </main>
  )
}
```

## Reference[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#reference)

### Props[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#props)

`unauthorized.js` components do not accept any props.

## Examples[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#examples)

### Displaying login UI to unauthenticated users[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#displaying-login-ui-to-unauthenticated-users)

You can use `unauthorized` function to render the `unauthorized.js` file with a login UI.

app/dashboard/page.tsx

TypeScript

```
import { verifySession } from '@/app/lib/dal'
import { unauthorized } from 'next/navigation'
 
export default async function DashboardPage() {
  const session = await verifySession()
 
  if (!session) {
    unauthorized()
  }
 
  return <div>Dashboard</div>
}
```

app/unauthorized.tsx

TypeScript

```
import Login from '@/app/components/Login'
 
export default function UnauthorizedPage() {
  return (
    <main>
      <h1>401 - Unauthorized</h1>
      <p>Please log in to access this page.</p>
      <Login />
    </main>
  )
}
```

## Version History[](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized#version-history)

| Version | Changes |
| --- | --- |
| `v15.1.0` | `unauthorized.js` introduced. |

### unauthorized API Reference for the unauthorized function.

Previous template.jsNext Metadata Files