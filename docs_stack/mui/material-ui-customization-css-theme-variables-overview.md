# CSS theme variables - Material UI

Skip to content

🚀 Material UI and MUI X v9 are out! Check out the announcement blogpost.Search…Ctrl+K3

Material UI v9.0.0

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

 * Css variables New 
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

# CSS theme variables

An overview of adopting CSS theme variables in Material UI.

5 minutes to a working notification inbox. No backend required. Try Novu free.ads via Carbon

CSS variables are a modern cross-browser feature that let you declare variables in CSS and reuse them in other properties. You can implement them to improve Material UI's theming and customization experience.

If this is your first time encountering CSS variables, you should check out the MDN Web Docs on CSS custom properties before continuing here.

## Introduction

CSS theme variables replace raw values in Material UI components for a better developer experience because, in the browser dev tool, you will see which theme token is used as a value.

In addition with these variables, you can inject a theme into your app's stylesheet _at build time_ to apply the user's selected settings before the whole app is rendered.

## Advantages

* It lets you prevent dark-mode SSR flickering.
* You can create unlimited color schemes beyond `light` and `dark`.
* It offers a better debugging experience not only for developers but also designers on your team.
* The color scheme of your website is automatically synced between browser tabs.
* It simplifies integration with third-party tools because CSS theme variables are available globally.
* It reduces the need for a nested theme when you want to apply dark styles to a specific part of your application.

## Trade-offs

For server-side applications, there are some trade-offs to consider:

| | Compare to the default method | Reason |
| --- | --- | --- |
| HTML size | Bigger | CSS variables are generated for both light and dark mode at build time. |
| First Contentful Paint (FCP) | Longer | Since the HTML size is bigger, the time to download the HTML before showing the content is a bit longer. |
| Time to Interactive (TTI) | Shorter (for dark mode) | Stylesheets are not regenerated between light and dark mode, a lot less time is spent running JavaScript code. |

The comparison described in the table above may not be applicable to large and complex applications since there are so many factors that can impact performance metrics.

## What's next

* To start a new project with CSS theme variables, check out the basic usage guide.
* For theming and customization, check out the how-to guide.

Edit this page

Was this page helpful?

* * *

TransitionsBasic usage

* * *

•

Blog
•

Store

Contents

* Introduction
* Advantages
* Trade-offs
* What's next

Become a Diamond sponsor

MUI stands in solidarity with Ukraine.

###### Cookie Preferences

We use cookies to understand site usage and improve our content. This includes third-party analytics.

Allow analytics Essential only