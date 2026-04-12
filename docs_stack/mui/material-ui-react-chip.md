# React Chip component - Material UI

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

# Chip

Chips are compact elements that represent an input, attribute, or action.

Chips allow users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.

* View as Markdown
* Feedback
* Bundle size
* Source
* Material Design
* Figma
* Sketch

## Basic chip

The `Chip` component supports outlined and filled styling.

Chip Filled

Chip Outlined

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip label="Chip Filled" />
<Chip label="Chip Outlined" variant="outlined" />
```

Press Enter to start editing

## Chip actions

You can use the following actions.

* Chips with the `onClick` prop defined change appearance on focus, hover, and click.
* Chips with the `onDelete` prop defined will display a delete icon which changes appearance on hover.

### Clickable

Clickable

Clickable

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip label="Clickable" onClick={handleClick} />
<Chip label="Clickable" variant="outlined" onClick={handleClick} />
```

Press Enter to start editing

### Deletable

Deletable

Deletable

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip label="Deletable" onDelete={handleDelete} />
<Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
```

Press Enter to start editing

### Clickable and deletable

Clickable Deletable

Clickable Deletable

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip
 label="Clickable Deletable"
 onClick={handleClick}
 onDelete={handleDelete}
/>
<Chip
 label="Clickable Deletable"
 variant="outlined"
 onClick={handleClick}
 onDelete={handleDelete}
/>
```

Press Enter to start editing

### Clickable link

Clickable LinkClickable Link

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
<Chip
 label="Clickable Link"
 component="a"
 href="#basic-chip"
 variant="outlined"
 clickable
/>
```

Press Enter to start editing

### Custom delete icon

Custom delete icon

Custom delete icon

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip
 label="Custom delete icon"
 onClick={handleClick}
 onDelete={handleDelete}
 deleteIcon={<DoneIcon />}
/>
<Chip
 label="Custom delete icon"
 onClick={handleClick}
 onDelete={handleDelete}
 deleteIcon={<DeleteIcon />}
 variant="outlined"
/>
```

Press Enter to start editing

## Chip adornments

You can add ornaments to the beginning of the component.

Use the `avatar` prop to add an avatar or use the `icon` prop to add an icon.

### Avatar chip

M

Avatar

Avatar

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
<Chip
 avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
 label="Avatar"
 variant="outlined"
/>
```

Press Enter to start editing

### Icon chip

With Icon

With Icon

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip icon={<FaceIcon />} label="With Icon" />
<Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
```

Press Enter to start editing

## Color chip

You can use the `color` prop to define a color from theme palette.

primary

success

primary

success

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Stack direction="row" spacing={1}>
 <Chip label="primary" color="primary" />
 <Chip label="success" color="success" />
</Stack>
<Stack direction="row" spacing={1}>
 <Chip label="primary" color="primary" variant="outlined" />
 <Chip label="success" color="success" variant="outlined" />
</Stack>
```

Press Enter to start editing

## Sizes chip

You can use the `size` prop to define a small Chip.

Small

Small

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip label="Small" size="small" />
<Chip label="Small" size="small" variant="outlined" />
```

Press Enter to start editing

## Multiline chip

By default, Chips displays labels only in a single line. To have them support multiline content, use the `sx` prop to add `height:auto` to the Chip component, and `whiteSpace: normal` to the `label` styles.

This is a chip that has multiple lines.

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Chip
 sx={{
 height: 'auto',
 '& .MuiChip-label': {
 display: 'block',
 whiteSpace: 'normal',
 },
 }}
 label="This is a chip that has multiple lines."
/>
```

Press Enter to start editing

## Chip array

An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no `onClick` prop is defined, the `Chip` can be focused, but does not gain depth while clicked or touched.

* Angular 
* jQuery 
* Polymer 
* React 
* Vue.js 

 Edit in Chat

JS TS

Show code

## Chip playground

Chip Component

variant 

filled outlined 

color 

default primary secondary error info success warning 

size 

medium small 

icon 

none icon 

avatar 

none letter img 

onDelete 

none default custom 

Copy(or Ctrl + C)

```jsx
<Chip />
```

## Accessibility

If the Chip is deletable or clickable then it is a button in tab order. When the Chip is focused (for example when tabbing) releasing (`keyup` event) `Backspace` or `Delete` will call the `onDelete` handler while releasing `Escape` will blur the Chip.

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Chip />`

Edit this page

Was this page helpful?

* * *

BadgeDivider

* * *

•

Blog
•

Store

Contents

* Basic chip
* Chip actions
 * Clickable
 * Deletable
 * Clickable and deletable
 * Clickable link
 * Custom delete icon

* Chip adornments
 * Avatar chip
 * Icon chip

* Color chip
* Sizes chip
* Multiline chip
* Chip array
* Chip playground
* Accessibility
* API

Become a Diamond sponsor

MUI stands in solidarity with Ukraine.

###### Cookie Preferences

We use cookies to understand site usage and improve our content. This includes third-party analytics.

Allow analytics Essential only