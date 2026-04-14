# React Checkbox component - Material UI

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

# Checkbox

Checkboxes allow the user to select one or more items from a set.

Checkboxes can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.

* View as Markdown
* Feedback
* Bundle size
* Source
* WAI-ARIA
* Material Design
* Figma
* Sketch

## Basic checkboxes

- [x] - [x] - [x] - [x] 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Checkbox {...label} defaultChecked />
<Checkbox {...label} />
<Checkbox {...label} disabled />
<Checkbox {...label} disabled checked />
```

Press Enter to start editing

## Label

You can provide a label to the `Checkbox` thanks to the `FormControlLabel` component.

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
 <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
 <FormControlLabel required control={<Checkbox />} label="Required" />
 <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
</FormGroup>
```

Press Enter to start editing

## Size

Use the `size` prop or customize the font size of the svg icons to change the size of the checkboxes.

- [x] - [x] - [x] 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Checkbox {...label} defaultChecked size="small" />
<Checkbox {...label} defaultChecked />
<Checkbox
 {...label}
 defaultChecked
 sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
/>
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
<Checkbox {...label} defaultChecked />
<Checkbox {...label} defaultChecked color="secondary" />
<Checkbox {...label} defaultChecked color="success" />
<Checkbox {...label} defaultChecked color="default" />
<Checkbox
 {...label}
 defaultChecked
 sx={{
 color: pink[800],
 '&.Mui-checked': {
 color: pink[600],
 },
 }}
/>
```

Press Enter to start editing

## Icon

- [x] - [x] 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
<Checkbox
 {...label}
 icon={<BookmarkBorderIcon />}
 checkedIcon={<BookmarkIcon />}
/>
```

Press Enter to start editing

## Controlled

You can control the checkbox with the `checked` and `onChange` props:

- [x] 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Checkbox
 checked={checked}
 onChange={handleChange}
 slotProps={{
 input: { 'aria-label': 'controlled' },
 }}
/>
```

Press Enter to start editing

## Indeterminate

A checkbox input can only have two states in a form: checked or unchecked. It either submits its value or doesn't. Visually, there are **three** states a checkbox can be in: checked, unchecked, or indeterminate.

You can change the indeterminate icon using the `indeterminateIcon` prop.

- [x] Parent 

- [x] Child 1 - [x] Child 2 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<FormControlLabel
 label="Parent"
 control={
 <Checkbox
 checked={checked[0] && checked[1]}
 indeterminate={checked[0] !== checked[1]}
 onChange={handleChange1}
 />
 }
/>
{children}
```

Press Enter to start editing

When indeterminate is set, the value of the `checked` prop only impacts the form submitted values. It has no accessibility or UX implications.

## FormGroup

`FormGroup` is a helpful wrapper used to group selection control components.

Assign responsibility

- [x] Gilad Gray - [x] Jason Killian - [x] Antoine Llorca 

Be careful

Pick two*

- [x] Gilad Gray - [x] Jason Killian - [x] Antoine Llorca 

You can display an error

 Edit in Chat

JS TS

Show code

## Label placement

You can change the placement of the label:

Label placement

- [x] Bottom - [x] End 

 Edit in Chat

JS TS

Show code

## Customization

Here is an example of customizing the component. You can learn more about this in the overrides documentation page.

- [x] - [x] - [x] 

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<BpCheckbox />
<BpCheckbox defaultChecked />
<BpCheckbox disabled />
```

Press Enter to start editing

🎨 If you are looking for inspiration, you can check MUI Treasury's customization examples.

## When to use

* Checkboxes vs. Radio Buttons
* Checkboxes vs. Switches

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)

* All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` element (FormControlLabel).
* When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (for example `aria-label`, `aria-labelledby`, `title`) via the `slotProps.input` prop.

```jsx
<Checkbox
 value="checkedA"
 slotProps={{
 input: { 'aria-label': 'Checkbox A' },
 }}
/>
```
Copy Copied(or Ctrl + C)

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Checkbox />`
* `<FormControl />`
* `<FormControlLabel />`
* `<FormGroup />`
* `<FormLabel />`

Edit this page

Was this page helpful?

* * *

Button GroupFloating Action Button

* * *

•

Blog
•

Store

Contents

* Basic checkboxes
* Label
* Size
* Color
* Icon
* Controlled
* Indeterminate
* FormGroup
* Label placement
* Customization
* When to use
* Accessibility
* API

Become a Diamond sponsor

MUI stands in solidarity with Ukraine.

###### Cookie Preferences

We use cookies to understand site usage and improve our content. This includes third-party analytics.

Allow analytics Essential only