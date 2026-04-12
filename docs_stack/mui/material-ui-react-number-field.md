# Number field React component - Material UI

Skip to content

🚀 Material UI and MUI X v9 are out! Check out the announcement blogpost.Search…Ctrl+K3

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

# Number Field

A React component for capturing numeric input from users.

Get better output from AI tools without burning time and tokens.ads via Carbon

* View as Markdown
* Bundle size
* Figma
* Sketch

A number field is an input with increment and decrement buttons for capturing numeric input from users.

Material UI does not include a number field component out of the box, but this page provides components composed with the Base UI `NumberField` and styled to align with Material Design (MD2) specifications, so they can be used with Material UI.

As such, you must install Base UI before proceeding. The examples that follow can then be copied and pasted directly into your app. Note that Base UI is tree-shakeable, so the final bundle will only include the components used in your project.

## Installation

npm pnpm yarn

Copy(or Ctrl + C)

```bash
npm install @base-ui/react
```

## Usage

1. Select one of the demos below that fits your visual design needs.
2. Click **Expand code** in the toolbar.
3. Select the file that starts with `./components/`.
4. Copy the code and paste it into your project.

## Outlined field

The outlined field uses the same building-block components as Material UI's outlined `TextField`—`FormControl`, `OutlinedInput`, `InputLabel`, and `FormHelperText`—with end adornments for the increment and decrement buttons. See Text Field—Components for more details.

Number Field 

Number Field

Enter value between 10 and 40

Number Field (Small) 

Number Field (Small)

Enter value between 10 and 40

Number Field with Error 

Number Field with Error

Enter value between 10 and 40

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<NumberField label="Number Field" min={10} max={40} />
<NumberField label="Number Field (Small)" size="small" />
<NumberField
 label="Number Field with Error"
 min={10}
 max={40}
 defaultValue={100}
 size="small"
 error
/>
```

Press Enter to start editing

## Spinner field

For the spinner field component, the increment and decrement buttons are placed next to the outlined input. This is ideal for touch devices and narrow ranges of values.

Number Spinner 

​

Number Spinner (Small) 

​

Spinner with Error 

​

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<NumberSpinner label="Number Spinner" min={10} max={40} />
<NumberSpinner label="Number Spinner (Small)" size="small" />
<NumberSpinner
 label="Spinner with Error"
 min={10}
 max={40}
 defaultValue={100}
 size="small"
 error
/>
```

Press Enter to start editing

## Base UI API

See the documentation below for a complete reference to all of the props.

* `NumberField`

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Button />`
* `<FormControl />`
* `<FormHelperText />`
* `<FormLabel />`
* `<IconButton />`
* `<InputLabel />`
* `<OutlinedInput />`

Edit this page

Was this page helpful?

* * *

Floating Action ButtonRadio Group

* * *

•

Blog
•

Store

Contents

* Installation
* Usage
* Outlined field
* Spinner field
* Base UI API
* API

Become a Diamond sponsor

MUI stands in solidarity with Ukraine.

###### Cookie Preferences

We use cookies to understand site usage and improve our content. This includes third-party analytics.

Allow analytics Essential only