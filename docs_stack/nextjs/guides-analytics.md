# How to add analytics to your Next.js application

Last updated April 8, 2026

Next.js has built-in support for measuring and reporting performance metrics. You can either use the `useReportWebVitals` hook to manage reporting yourself, or alternatively, Vercel provides a managed service to automatically collect and visualize metrics for you.

## Client Instrumentation

For more advanced analytics and monitoring needs, Next.js provides a `instrumentation-client.js|ts` file that runs before your application's frontend code starts executing. This is ideal for setting up global analytics, error tracking, or performance monitoring tools.

To use it, create an `instrumentation-client.js` or `instrumentation-client.ts` file in your application's root directory:

instrumentation-client.js

```
// Initialize analytics before the app starts
console.log('Analytics initialized')
 
// Set up global error tracking
window.addEventListener('error', (event) => {
 // Send to your error tracking service
 reportError(event.error)
})
```

## Build Your Own

app/_components/web-vitals.js

```
'use client'
 
import { useReportWebVitals } from 'next/web-vitals'
 
export function WebVitals() {
 useReportWebVitals((metric) => {
 console.log(metric)
 })
}
```

app/layout.js

```
import { WebVitals } from './_components/web-vitals'
 
export default function Layout({ children }) {
 return (
 <html>
 <body>
 <WebVitals />
 {children}
 </body>
 </html>
 )
}
```

> Since the `useReportWebVitals` hook requires the `'use client'` directive, the most performant approach is to create a separate component that the root layout imports. This confines the client boundary exclusively to the `WebVitals` component.

View the API Reference for more information.

## Web Vitals

Web Vitals are a set of useful metrics that aim to capture the user experience of a web page. The following web vitals are all included:

* Time to First Byte (TTFB)
* First Contentful Paint (FCP)
* Largest Contentful Paint (LCP)
* First Input Delay (FID)
* Cumulative Layout Shift (CLS)
* [Interaction to