# React Switch component - Material UI

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

# Switch

Switches toggle the state of a single setting on or off.

Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it's in, should be made clear from the corresponding inline label.

* View as Markdown
* Feedback
* Bundle size
* Source
* Material Design
* Figma
* Sketch

## Basic switches

- [x] - [x] - [x] - [x] 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Switch {...label} defaultChecked />
<Switch {...label} />
<Switch {...label} disabled defaultChecked />
<Switch {...label} disabled />
```

Press Enter to start editing

## Label

You can provide a label to the `Switch` thanks to the `FormControlLabel` component.

- [x] Label - [x] 

Required*

 - [x] Disabled 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<FormGroup>
 <FormControlLabel control={<Switch defaultChecked />} label="Label" />
 <FormControlLabel required control={<Switch />} label="Required" />
 <FormControlLabel disabled control={<Switch />} label="Disabled" />
</FormGroup>
```

Press Enter to start editing

## Size

Use the `size` prop to change the size of the switch.

- [x] - [x] 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Switch {...label} defaultChecked size="small" />
<Switch {...label} defaultChecked />
```

Press Enter to start editing

## Color

- [x] - [x] - [x] - [x] - [x] 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Switch {...label} defaultChecked />
<Switch {...label} defaultChecked color="secondary" />
<Switch {...label} defaultChecked color="warning" />
<Switch {...label} defaultChecked color="default" />
<PinkSwitch {...label} defaultChecked />
```

Press Enter to start editing

## Controlled

You can control the switch with the `checked` and `onChange` props:

- [x] 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Switch
 checked={checked}
 onChange={handleChange}
 slotProps={{ input: { 'aria-label': 'controlled' } }}
/>
```

Press Enter to start editing

## Switches with FormGroup

`FormGroup` is a helpful wrapper used to group selection controls components that provides an easier API. However, you are encouraged to use Checkboxes instead if multiple related controls are required. (See: When to use).

Assign responsibility

- [x] Gilad Gray - [x] Jason Killian - [x] Antoine Llorca 

Be careful

 Edit in Chat

JS TS

Show code

## Customization

Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.

- [x] MUI switch - [x] Android 12 - [x] iOS style 

Off

- [x] 
On

 Edit in Chat

JS TS

Show code

🎨 If you are looking for inspiration, you can check MUI Treasury's customization examples.

## Label placement

You can change the placement of the label:

Label placement

- [x] Bottom - [x] End 

 Edit in Chat

JS TS

Show code

## When to use

* Checkboxes vs. Switches

## Accessibility

* All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` element (FormControlLabel).
* When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (for example `aria-label`, `aria-labelledby`, `title`) via the `slotProps.input` prop.

```jsx
<Switch value="checkedA" slotProps={{ input: { 'aria-label': 'Switch A' } }} />
```
Copy Copied(or Ctrl + C)

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<FormControl />`
* `<FormControlLabel />`
* `<FormGroup />`
* `<FormLabel />`
* `<Switch />`

Edit this page

Was this page helpful?

* * *

SliderText Field

* * *

•

Blog
•

Store

Contents

* Basic switches
* Label
* Size
* Color
* Controlled
* Switches with FormGroup
* Customization
* Label placement
* When to use
* Accessibility
* API

Become a Diamond sponsor

MUI stands in solidarity with Ukraine.

###### Cookie Preferences

We use cookies to understand site usage and improve our content. This includes third-party analytics.

Allow analytics Essential only