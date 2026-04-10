# How to set up Vitest with Next.js

Last updated April 8, 2026

Vitest and React Testing Library are frequently used together for **Unit Testing**. This guide will show you how to setup Vitest with Next.js and write your first tests.

> **Good to know:** Since `async` Server Components are new to the React ecosystem, Vitest currently does not support them. While you can still run **unit tests** for synchronous Server and Client Components, we recommend using **E2E tests** for `async` components.

## Quickstart[](https://nextjs.org/docs/app/guides/testing/vitest#quickstart)

You can use `create-next-app` with the Next.js with-vitest example to quickly get started:

pnpm npm yarn bun

Terminal

`pnpm create next-app --example with-vitest with-vitest-app`

## Manual Setup[](https://nextjs.org/docs/app/guides/testing/vitest#manual-setup)

To manually set up Vitest, install `vitest` and the following packages as dev dependencies:

pnpm npm yarn bun

Terminal

```
# Using TypeScript
pnpm add -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths
# Using JavaScript
pnpm add -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom
```

Create a `vitest.config.mts|js` file in the root of your project, and add the following options:

vitest.config.mts

TypeScript

```
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
  },
})
```

For more information on configuring Vitest, please refer to the Vitest Configuration docs.

Then, add a `test` script to your `package.json`:

package.json

```
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest"
  }
}
```

When you run `npm run test`, Vitest will **watch** for changes in your project by default.

## Creating your first Vitest Unit Test[](https://nextjs.org/docs/app/guides/testing/vitest#creating-your-first-vitest-unit-test)

Check that everything is working by creating a test to check if the `<Page />` component successfully renders a heading:

app/page.tsx

TypeScript

```
import Link from 'next/link'
 
export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
```

__tests__/page.test.tsx

TypeScript

```
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
 
test('Page', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
```

> **Good to know**: The example above uses the common `__tests__` convention, but test files can also be colocated inside the `app` router.

## Running your tests[](https://nextjs.org/docs/app/guides/testing/vitest#running-your-tests)

Then, run the following command to run your tests:

pnpm npm yarn bun

Terminal

`pnpm test`

## Additional Resources[](https://nextjs.org/docs/app/guides/testing/vitest#additional-resources)

You may find these resources helpful:

*   Next.js with Vitest example
*   Vitest Docs
*   React Testing Library Docs

Previous PlaywrightNext Third Party Libraries