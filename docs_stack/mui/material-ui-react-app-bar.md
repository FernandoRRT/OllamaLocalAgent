The App Bar displays information and actions relating to the current screen.

The top App bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions.

It can transform into a contextual action bar or be used as a navbar.

* View as Markdown
* Feedback
* Bundle size
* Source
* Material Design
* Figma
* Sketch

## Basic App bar

News

## App bar with menu

Logout

Photos

## App bar with responsive menu

## App bar with search field

A side searchbar.

MUI

## Responsive App bar with Drawer

## App bar with a primary search field

A primary searchbar.

MUI

## Dense (desktop only)

Photos

Edit code

Press Enter to start editing

## Prominent

A prominent app bar.

MUI

## Bottom App bar

## Fixed placement

When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page. This can cause some part of your content to be invisible, behind the app bar. Here are 3 possible solutions:

1. You can use `position="sticky"` instead of fixed.
2. You can render a second `<Toolbar />` component:

```
function App() {
 return (
 <React.Fragment>
 <AppBar position="fixed">
 <Toolbar>{/* content */}</Toolbar>
 </AppBar>
 <Toolbar />
 </React.Fragment>
 );
}
```

1. You can use `theme.mixins.toolbar` CSS:

```
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
 return (
 <React.Fragment>
 <AppBar position="fixed">
 <Toolbar>{/* content */}</Toolbar>
 </AppBar>
 <Offset />
 </React.Fragment>
 );
}
```

## Scrolling

You can use the `useScrollTrigger()` hook to respond to user scroll actions.

### Hide App bar

The app bar hides on scroll down to leave more space for reading.

### Elevate App bar

The app bar elevates on scroll to communicate that the user is not at the top of the page.

### Back to top

A floating action button appears on scroll to make it easy to get back to the top of the page.

### [`useScrollTrigger([options]) => trigger`](https://mui.com/material-ui/react-app-bar/#usescrolltrigger-options-trigger)

#### Arguments

1. `options` (_object_ [optional]):
 * `options.disableHysteresis` (_bool_ [optional]): Defaults to `false`. Disable the hysteresis. Ignore the scroll direction when determining the `trigger` value.
 * `options.target` (_Node_ [optional]): Defaults to `window`.
 * `options.threshold` (_number_ [optional]): Defaults to `100`. Change the `trigger` value when the vertical scroll strictly crosses this threshold (exclusive).

#### Returns

`trigger`: Does the scroll position match the criteria?

#### Examples

```
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
 const trigger = useScrollTrigger();
 return (
 <Slide in={!trigger}>
 <div>Hello</div>
 </Slide>
 );
}
```

## Enable color on dark

Following the Material Design guidelines, the `color` prop has no effect on the appearance of the app bar in dark mode. You can override this behavior by setting the `enableColorOnDark` prop to `true`.

enableColorOnDark

default

Edit code

Press Enter to start editing

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<AppBar />`
* `<Menu />`
* `<Toolbar />`