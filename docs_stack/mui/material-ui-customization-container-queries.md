* Getting started
* Components
* Component API
* Customization

 * How to customize
 * Overriding component structure
 * Dark mode
 * Color
 * Right-to-left
 * Shadow DOM
 * Theme

 * Default theme viewer
 * Customizing the theme
 * Creating themed components
 * Components

 * Tokens

 * Palette
 * Typography
 * Spacing
 * Shape
 * Breakpoints
 * Container queries New
 * Density
 * z-index
 * Transitions

 * Css variables

New 
 * Overview
 * Basic usage
 * Native color
 * Advanced configuration

 * Styles

 * Cascade layers New

* How-to guides
* Integrations
* Experimental APIs
* Migration
* Discover more
* Design resources
* Template store

Material UI provides a utility function for creating CSS container queries based on theme breakpoints.

## Usage

To create CSS container queries, use `theme.containerQueries` with any method available in the `theme.breakpoints`. The value can be unitless (in which case it'll be rendered in pixels), a string, or a breakpoint key. For example:

```
theme.containerQueries.up('sm'); // => '@container (min-width: 600px)'
```

0px

350px

500px

123 Main St, Phoenix AZ

$280,000 — $310,000

Confidence score: 85%

### Named containment contexts

To refer to a containment context, call the `containerQueries` method with the name of the container for access to all breakpoint methods:

```
theme.containerQueries('sidebar').up('500px'); // => '@container sidebar (min-width: 500px)'
```

## Shorthand syntax

When adding styles using the `sx` prop, use the `@<size>` or `@<size>/<name>` notation to apply container queries without referring to the theme.

* `<size>`: a width or a breakpoint key.
* `<name>` (optional): a named containment context.

0px

350px

500px

123 Main St, Phoenix AZ

$280,000 — $310,000

Confidence score: 85%

### Caveats

* The `@` prefix with a unitless value renders as `px`, so `@500` is equivalent to `500px`—but `@500px` is incorrect syntax and won't render correctly.

* `@` with no number renders as `0px`.

* Container queries must share the same units (the sizes can be defined in any order), as shown below:

```
// ✅ These container queries will be sorted correctly.
padding: {
 '@40em': 4,
 '@20em': 2,
 '@': 0,
}

// ❌ These container queries won't be sorted correctly
// because 40em is typically greater than 50px
// and the units don't match.
padding: {
 '@40em': 4,
 '@50': 2,
 '@': 0,
}
``` 

## API

CSS container queries support all the methods available in the breakpoints API.

```
// For default breakpoints
theme.containerQueries.up('sm'); // => '@container (min-width: 600px)'
theme.containerQueries.down('md'); // => '@container (max-width: 900px)'
theme.containerQueries.only('md'); // => '@container (min-width: 600px) and (max-width: 900px)'
theme.containerQueries.between('sm', 'lg'); // => '@container (min-width: 600px) and (max-width: 1200px)'
theme.containerQueries.not('sm'); // => '@container (max-width: 600px)'
```

Contents