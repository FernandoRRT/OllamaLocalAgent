Menus display a list of choices on temporary surfaces.

A menu displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control.

* View as Markdown
* Feedback
* Bundle size
* Source
* WAI-ARIA
* Material Design
* Figma
* Sketch

## Introduction

Menus are implemented using a collection of related components:

* Menu: The container/surface of the menu.
* Menu Item: An option for users to select from the menu.
* Menu List (optional): Alternative composable container for Menu Items—see Composition with Menu List for details.

A basic menu opens over the anchor element by default (this option can be changed via props). When close to a screen edge, a basic menu vertically realigns to make sure that all menu items are completely visible.

You should configure the component so that selecting an option immediately confirms it and closes the menu, as shown in the demo below.

In desktop viewport, padding is increased to give more space to the menu.

For the menu that has long list and long text, you can use the `dense` prop to reduce the padding and text size.

If used for item selection, when opened, simple menus places the initial focus on the selected menu item. The currently selected menu item is set using the `selected` prop (from ListItem). To use a selected menu item without impacting the initial focus, set the `variant` prop to "menu".

When device is locked

Show all notification content

Because the `Menu` component uses the `Popover` component to position itself, you can use the same positioning props to position it. For instance, you can display the menu on top of the anchor:

The Menu component uses the Popover component internally. But you might want to use a different positioning strategy, or prefer not to block scrolling, for example.

The Menu List component lets you compose your own menu for these kinds of use cases—its primary purpose is to handle focus. See the demo below for an example of composition that uses Menu List and replaces the Menu's default Popover with a Popper component instead:

`Menu` content can be mixed with other components like `Avatar`.

Contact

Profile

## Customization

Here is an example of customizing the component. You can learn more about this in the overrides documentation page.

The `MenuItem` is a wrapper around `ListItem` with some additional styles. You can use the same list composition features with the `MenuItem` component:

🎨 If you are looking for inspiration, you can check MUI Treasury's customization examples.

If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.

## Limitations

There is a flexbox bug that prevents `text-overflow: ellipsis` from working in a flexbox layout. You can use the `Typography` component with `noWrap` to workaround this issue:

## Change transition

Use a different transition.

Here is an example of a context menu. (Right click to open.)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.

Display categories with the `ListSubheader` component.

## Supplementary projects

For more advanced use cases you might be able to take advantage of:

The package `material-ui-popup-state` that takes care of menu state for you in most cases.

Press Enter to start editing

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<ClickAwayListener />`
* `<Menu />`
* `<MenuItem />`
* `<MenuList />`
* `<Popover />`
* `<Popper />`