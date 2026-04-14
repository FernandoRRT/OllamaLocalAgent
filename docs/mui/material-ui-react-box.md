# React Box - Material UI

Skip to content

🚀 Material UI and MUI X v9 are out! Check out the announcement blogpost.Search…Ctrl+K

Material UI v9.0.0

* Getting started
* Components

 * All components
 * Inputs 
 * Autocomplete
 * Button
 * Button Group
 * Checkbox
 * Floating Action Button
 * Number Field New
 * Radio Group
 * Rating
 * Select
 * Slider
 * Switch
 * Text Field
 * Transfer List
 * Toggle Button

 * Data display 
 * Avatar
 * Badge
 * Chip
 * Divider
 * Icons
 * Material Icons
 * List
 * Table
 * Tooltip
 * Typography

 * Feedback 
 * Alert
 * Backdrop
 * Dialog
 * Progress
 * Skeleton
 * Snackbar

 * Surfaces 
 * Accordion
 * App Bar
 * Card
 * Paper

 * Navigation 
 * Bottom Navigation
 * Breadcrumbs
 * Drawer
 * Link
 * Menu
 * Menubar New
 * Pagination
 * Speed Dial
 * Stepper
 * Tabs

 * Layout 
 * Box
 * Container
 * Grid
 * Stack
 * Image List

 * Utils 
 * Click-Away Listener
 * CSS Baseline
 * InitColorSchemeScript
 * Modal
 * No SSR
 * Popover
 * Popper
 * Portal
 * Textarea Autosize
 * Transitions
 * useMediaQuery

 * MUI X 
 * Data Grid
 * Date and Time Pickers
 * Charts
 * Tree View

 * Lab 
 * About the lab 🧪
 * Masonry
 * Timeline

* Component API
* Customization
* How-to guides
* Integrations
* Experimental APIs
* Migration
* Discover more
* Design resources
* Template store

# Box

The Box component is a generic, theme-aware container with access to CSS utilities from MUI System.

* View as Markdown
* Feedback
* Bundle size
* Source

## Introduction

The Box component is a generic container for grouping other components. It's a fundamental building block when working with Material UI—you can think of it as a `<div>` with extra built-in features, like access to your app's theme and the `sx` prop.

### Usage

The Box component differs from other containers available in Material UI in that its usage is intended to be multipurpose and open-ended, just like a `<div>`. Components like Container, Stack and Paper, by contrast, feature usage-specific props that make them ideal for certain use cases: Container for main layout orientation, Stack for one-dimensional layouts, and Paper for elevated surfaces.

## Basics

```jsx
import Box from '@mui/material/Box';
```
Copy Copied(or Ctrl + C)

The Box component renders as a `<div>` by default, but you can swap in any other valid HTML tag or React component using the `component` prop. The demo below replaces the `<div>` with a `<section>` element:

This Box renders as an HTML section element.

 Edit in Chat

JS TS

Collapse code

Copy(or Ctrl + C)

Edit code 

```tsx
import Box from '@mui/material/Box';

export default function BoxBasic() {
 return (
 <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
 This Box renders as an HTML section element.
 </Box>
 );
}
```

Press Enter to start editing

## Customization

Use the `sx` prop to quickly customize any Box instance using a superset of CSS that has access to all the style functions and theme-aware properties exposed in the MUI System package. The demo below shows how to apply colors from the theme using this prop:

 Edit in Chat

JS TS

Hide code

Copy(or Ctrl + C)

Edit code 

```tsx
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

export default function BoxSx() {
 return (
 <ThemeProvider
 theme={{
 palette: {
 primary: {
 main: '#007FFF',
 dark: '#0066CC',
 },
 },
 }}
 >
 <Box
 sx={{
 width: 100,
 height: 100,
 borderRadius: 1,
 bgcolor: 'primary.main',
 '&:hover': {
 bgcolor: 'primary.dark',
 },
 }}
 />
 </ThemeProvider>
 );
}
```

Press Enter to start editing

## Anatomy

The Box component is composed of a single root `<div>` element:

```html
<div className="MuiBox-root">
 <!-- contents of the Box -->
</div>
```
Copy Copied(or Ctrl + C)

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Box />`

Edit this page

Was this page helpful?

* * *

TabsContainer

* * *

•

Blog
•

Store

Contents

* Introduction
 * Usage

* Basics
* Customization
* Anatomy
* API

Become a Diamond sponsor

MUI stands in solidarity with Ukraine.

###### Cookie Preferences

We use cookies to understand site usage and improve our content. This includes third-party analytics.

Allow analytics Essential only