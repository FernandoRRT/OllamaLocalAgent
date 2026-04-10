# forbidden

This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback onGitHub.

Last updated April 8, 2026

The `forbidden` function throws an error that renders a Next.js 403 error page. It's useful for handling authorization errors in your application. You can customize the UI using the `forbidden.js` file.

To start using `forbidden`, enable the experimental `authInterrupts` configuration option in your `next.config.js` file:

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
}
 
export default nextConfig
```

`forbidden` can be invoked in Server Components, Server Functions, and Route Handlers.

app/auth/page.tsx

TypeScript

```
import { verifySession } from '@/app/lib/dal'
import { forbidden } from 'next/navigation'
 
export default async function AdminPage() {
  const session = await verifySession()
 
  // Check if the user has the 'admin' role
  if (session.role !== 'admin') {
    forbidden()
  }
 
  // Render the admin page for authorized users
  return <></>
}
```

## Good to know[](https://nextjs.org/docs/app/api-reference/functions/forbidden#good-to-know)

*   The `forbidden` function cannot be called in the root layout.

## Examples[](https://nextjs.org/docs/app/api-reference/functions/forbidden#examples)

### Role-based route protection[](https://nextjs.org/docs/app/api-reference/functions/forbidden#role-based-route-protection)

You can use `forbidden` to restrict access to certain routes based on user roles. This ensures that users who are authenticated but lack the required permissions cannot access the route.

app/admin/page.tsx

TypeScript

```
import { verifySession } from '@/app/lib/dal'
import { forbidden } from 'next/navigation'
 
export default async function AdminPage() {
  const session = await verifySession()
 
  // Check if the user has the 'admin' role
  if (session.role !== 'admin') {
    forbidden()
  }
 
  // Render the admin page for authorized users
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
    </main>
  )
}
```

### Mutations with Server Actions[](https://nextjs.org/docs/app/api-reference/functions/forbidden#mutations-with-server-actions)

When implementing mutations in Server Actions, you can use `forbidden` to only allow users with a specific role to update sensitive data.

app/actions/update-role.ts

TypeScript

```
'use server'
 
import { verifySession } from '@/app/lib/dal'
import { forbidden } from 'next/navigation'
import db from '@/app/lib/db'
 
export async function updateRole(formData: FormData) {
  const session = await verifySession()
 
  // Ensure only admins can update roles
  if (session.role !== 'admin') {
    forbidden()
  }
 
  // Perform the role update for authorized users
  // ...
}
```

## Version History[](https://nextjs.org/docs/app/api-reference/functions/forbidden#version-history)

| Version | Changes |
| --- | --- |
| `v15.1.0` | `forbidden` introduced. |

### forbidden.js API reference for the forbidden.js special file.

Previous fetchNext generateImageMetadata