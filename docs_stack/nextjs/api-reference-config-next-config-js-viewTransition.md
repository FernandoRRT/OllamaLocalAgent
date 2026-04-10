# viewTransition

This feature is currently experimental and subject to change, it's not recommended for production. Try it out and share your feedback onGitHub.

Last updated April 8, 2026

`viewTransition` enables React's View Transitions API integration in Next.js. This lets you animate navigations, loading states, and content changes using the native browser View Transitions API.

To enable this feature, you need to set the `viewTransition` property to `true` in your `next.config.js` file.

next.config.js

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
}
 
module.exports = nextConfig
```

The `<ViewTransition>` component is provided by React. The `experimental.viewTransition` flag enables Next.js integration, such as triggering transitions during route navigations.

## Usage[](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition#usage)

You can import the `<ViewTransition>` Component from React in your application:

`import { ViewTransition } from 'react'`

### Live Demo[](https://nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition#live-demo)

Check out the View Transitions Demo to see this feature in action, or read the designing view transitions guide for a step-by-step walkthrough.

The View Transitions API is a baseline web standard, and browser support continues to expand. As React's `<ViewTransition>` component evolves, more transition patterns and use cases will become available.

Previous useLightningcssNext webpack