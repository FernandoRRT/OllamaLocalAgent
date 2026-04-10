# useReportWebVitals

Last updated April 8, 2026

The `useReportWebVitals` hook allows you to report Core Web Vitals, and can be used in combination with your analytics service.

New functions passed to `useReportWebVitals` are called with the available metrics up to that point. To prevent reporting duplicated data, ensure that the callback function reference does not change (as shown in the code examples below).

app/_components/web-vitals.js

```
'use client'
 
import { useReportWebVitals } from 'next/web-vitals'
 
const logWebVitals = (metric) => {
 console.log(metric)
}
 
export function WebVitals() {
 useReportWebVitals(logWebVitals)
 
 return null
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

## useReportWebVitals

The `metric` object passed as the hook's argument consists of a number of properties:

* `id`: Unique identifier for the metric in the context of the current page load
* `name`: The name of the performance metric. Possible values include names of Web Vitals metrics (TTFB, FCP, LCP, FID, CLS) specific to a web application.
* `delta`: The difference between the current value and the previous value of the metric. The value is typically in milliseconds and represents the change in the metric's value over time.
* `entries`: An array of Performance Entries associated with the metric. These entries provide detailed information about the performance events related to the metric.
* `navigationType`: Indicates the navigation type that triggered metric collection. Values are derived from PerformanceNavigationTiming.type and may include `"navigate"`, `"reload"`, `"prerender"`, `"back-forward"` (normalized from `"back_forward"`), `"back-forward-cache"` (BFCache restore), and `"restore"` (page restored after discard).
* `rating`: A qualitative rating of the metric value, providing an assessment of the performance. Possible values are `"good"`, `"needs-improvement"`, and `"poor"`. The rating is typically determined by comparing the metric value against predefined thresholds that indicate acceptable or suboptimal performance.
* `value`: The actual value or duration of the performance entry, typically in milliseconds. The value provides a quantitative measure of the performance aspect being tracked by the metric. The source of the value depends on the specific metric being measured and can come from various Performance APIs.

## Web Vitals

Web Vitals are a set of useful metrics that aim to capture the user experience of a web page. The following web vitals are all included:

* Time to First Byte (TTFB)
* First Contentful Paint (FCP)
* Largest Contentful Paint (LCP)
* First Input Delay (FID)
* Cumulative Layout Shift (CLS)
* [Interaction to