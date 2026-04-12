# Usage - Material UI

Skip to content

🚀 Material UI and MUI X v9 are out! Check out the announcement blogpost.Search…Ctrl+K

Material UI v9.0.0

* Getting started

 * Overview
 * Installation
 * Usage
 * MCP New
 * llms.txt New
 * Example projects
 * Templates
 * Learn
 * Design resources
 * FAQs
 * Supported components
 * Supported platforms
 * Support

* Components
* Component API
* Customization
* How-to guides
* Integrations
* Experimental APIs
* Migration
* Discover more
* Design resources
* Template store

# Usage

Learn the basics of working with Material UI components.

## Quickstart

After installation, you can import any Material UI component and start playing around. For example, try changing the `variant` on the Button to `outlined` to see how the style changes:

Hello world

 Edit in Chat

JS TS

Collapse code

Copy(or Ctrl + C)

Edit code 

```tsx
import Button from '@mui/material/Button';

export default function ButtonUsage() {
 return <Button variant="contained">Hello world</Button>;
}
```

Press Enter to start editing

## Globals

Since Material UI components are built to function in isolation, they don't require any kind of globally scoped styles. For a better user experience and developer experience, we recommend adding the following globals to your app.

### Responsive meta tag

Material UI is a _mobile-first_ component library—we write code for mobile devices first, and then scale up the components as necessary using CSS media queries.

To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element:

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```
Copy Copied(or Ctrl + C)

### CssBaseline

Material UI provides an optional CssBaseline component. It fixes some inconsistencies across browsers and devices while providing resets that are better tailored to fit Material UI than alternative global style sheets like normalize.css.

### Default font

Material UI uses the Roboto font by default. See Installation—Roboto font for complete details.

Edit this page

Was this page helpful?

* * *

InstallationMCP

* * *

•

Blog
•

Store

Contents

* Quickstart
* Globals
 * Responsive meta tag
 * CssBaseline
 * Default font

Become a Diamond sponsor

MUI stands in solidarity with Ukraine.

###### Cookie Preferences

We use cookies to understand site usage and improve our content. This includes third-party analytics.

Allow analytics Essential only