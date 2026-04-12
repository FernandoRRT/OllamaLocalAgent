Tabs make it easy to explore and switch between different views.

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.

* View as Markdown
* Feedback
* Bundle size
* Source
* WAI-ARIA
* Material Design
* Figma
* Sketch

## Introduction

Tabs are implemented using a collection of related components:

* `<Tab />` - the tab element itself. Clicking on a tab displays its corresponding panel.
* `<Tabs />` - the container that houses the tabs. Responsible for handling focus and keyboard navigation between tabs.

Item One

Press Enter to start editing

## Basics

```
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
```

## Experimental API

`@mui/lab` offers utility components that inject props to implement accessible tabs following WAI-ARIA Authoring Practices:

* `<TabList />` - the container that houses the tabs. Responsible for handling focus and keyboard navigation between tabs.
* `<TabPanel />` - the card that hosts the content associated with a tab.
* `<TabContext />` - the top-level component that wraps the Tab List and Tab Panel components.

Item One

Press Enter to start editing

## Wrapped labels

Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow, and the text will not be visible.

Press Enter to start editing

## Colored tab

Press Enter to start editing

## Disabled tab

A tab can be disabled by setting the `disabled` prop.

Press Enter to start editing

## Fixed tabs

Fixed tabs should be used with a limited number of tabs, and when a consistent placement will aid muscle memory.

### Full width

The `variant="fullWidth"` prop should be used for smaller views.

Item One

### Centered

The `centered` prop should be used for larger views.

Press Enter to start editing

### Automatic scroll buttons

Use the `variant="scrollable"` and `scrollButtons="auto"` props to display left and right scroll buttons on desktop that are hidden on mobile:

Press Enter to start editing

### Forced scroll buttons

Apply `scrollButtons={true}` and the `allowScrollButtonsMobile` prop to display the left and right scroll buttons on all viewports:

Press Enter to start editing

If you want to make sure the buttons are always visible, you should customize the opacity.

```
.MuiTabs-scrollButtons.Mui-disabled {
 opacity: 0.3;
}
```

### Prevent scroll buttons

Left and right scroll buttons are never be presented with `scrollButtons={false}`. All scrolling must be initiated through user agent scrolling mechanisms (for example left/right swipe, shift mouse wheel, etc.)

Press Enter to start editing

## Customization

Here is an example of customizing the component. You can learn more about this in the overrides documentation page.

🎨 If you are looking for inspiration, you can check MUI Treasury's customization examples.

## Vertical tabs

To make vertical tabs instead of default horizontal ones, there is `orientation="vertical"`:

Item One

Note that you can restore the scrollbar with `visibleScrollbar`.

## Nav tabs

By default, tabs use a `button` element, but you can provide your custom tag or component. Here's an example of implementing tabbed navigation:

Press Enter to start editing

### Third-party routing library

One frequent use case is to perform navigation on the client only, without an HTTP round-trip to the server. The `Tab` component provides the `component` prop to handle this use case. Here is a more detailed guide.

## Icon tabs

Tab labels may be either all icons or all text.

Press Enter to start editing

Press Enter to start editing

## Icon position

By default, the icon is positioned at the `top` of a tab. Other supported positions are `start`, `end`, `bottom`.

Press Enter to start editing

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

The following steps are needed in order to provide necessary information for assistive technologies:

1. Label `Tabs` via `aria-label` or `aria-labelledby`.
2. `Tab`s need to be connected to their corresponding `[role="tabpanel"]` by setting the correct `id`, `aria-controls` and `aria-labelledby`.

An example for the current implementation can be found in the demos on this page. We've also published an experimental API in `@mui/lab` that does not require extra work.

### Keyboard navigation

The components implement keyboard navigation using the "manual activation" behavior. If you want to switch to the "selection automatically follows focus" behavior you have to pass `selectionFollowsFocus` to the `Tabs` component. The WAI-ARIA authoring practices have a detailed guide on how to decide when to make selection automatically follow focus.

#### Demo

The following two demos only differ in their keyboard navigation behavior. Focus a tab and navigate with arrow keys to notice the difference, for example Arrow Left.

```
/* Tabs where selection follows focus */
<Tabs selectionFollowsFocus />
```

```
/* Tabs where each tab needs to be selected manually */
<Tabs />
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Tab />`
* `<TabContext />`
* `<TabList />`
* `<TabPanel />`
* `<TabScrollButton />`
* `<Tabs />`