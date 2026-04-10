# How to install Tailwind CSS v3 in your Next.js application

Last updated April 8, 2026

This guide will walk you through how to install Tailwind CSS v3 in your Next.js application.

> **Good to know:** For the latest Tailwind 4 setup, see the Tailwind CSS setup instructions.

## Installing Tailwind v3[](https://nextjs.org/docs/app/guides/tailwind-v3-css#installing-tailwind-v3)

Install Tailwind CSS and its peer dependencies, then run the `init` command to generate both `tailwind.config.js` and `postcss.config.js` files:

pnpm npm yarn bun

Terminal

```
pnpm add -D tailwindcss@^3 postcss autoprefixer
npx tailwindcss init -p
```

## Configuring Tailwind v3[](https://nextjs.org/docs/app/guides/tailwind-v3-css#configuring-tailwind-v3)

Configure your template paths in your `tailwind.config.js` file:

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the Tailwind directives to your global CSS file:

app/globals.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the CSS file in your root layout:

app/layout.tsx

TypeScript

```
import './globals.css'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

## Using classes[](https://nextjs.org/docs/app/guides/tailwind-v3-css#using-classes)

After installing Tailwind CSS and adding the global styles, you can use Tailwind's utility classes in your application.

app/page.tsx

TypeScript

```
export default function Page() {
  return <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
}
```

## Usage with Turbopack[](https://nextjs.org/docs/app/guides/tailwind-v3-css#usage-with-turbopack)

As of Next.js 13.1, Tailwind CSS and PostCSS are supported with Turbopack.

Previous StreamingNext Testing