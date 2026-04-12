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

Tables display sets of data. They can be fully customized.

Tables display information in a way that's easy to scan, so that users can look for patterns and insights. They can be embedded in primary content, such as cards. They can include:

* A corresponding visualization
* Navigation
* Tools to query and manipulate data

* View as Markdown
* Feedback
* Bundle size
* Source
* WAI-ARIA
* Material Design
* Figma
* Sketch

## Introduction

Tables are implemented using a collection of related components:

* `<TableContainer />`: A wrapper that provides horizontally scrolling behavior for the `<Table />` component.
* `<Table />`: The main component for the table element. Renders as a `<table>` by default.
* `<TableHead />`: The container for the header row(s) of `<Table />`. Renders as a `<thead>` by default.
* `<TableBody />`: The container for the body rows of `<Table />`. Renders as a `<tbody>` by default.
* `<TableRow />`: A row in a table. Can be used in `<TableHead />`, `<TableBody />`, or `<TableFooter />`. Renders as a `<tr>` by default.
* `<TableCell />`: A cell in a table. Can be used in `<TableRow />` . Renders as a `<th>` in `<TableHead />` and `<td>` in `<TableBody />` by default.
* `<TableFooter />`: An optional container for the footer row(s) of the table. Renders as a `<tfoot>` by default.
* `<TablePagination />`: A component that provides controls for paginating table data. See the 'Sorting & selecting' example and 'Custom Table Pagination Action' example.
* `<TableSortLabel />`: A component used to display sorting controls for column headers, allowing users to sort data in ascending or descending order. See the 'Sorting & selecting' example.

## Basic table

A simple example with no frills.

| Dessert (100g serving) | Calories | Fat(g) | Carbs(g) | Protein(g) |
| --- | --- | --- | --- | --- |
| Frozen yoghurt | 159 | 6 | 24 | 4 |
| Ice cream sandwich | 237 | 9 | 37 | 4.3 |
| Eclair | 262 | 16 | 24 | 6 |
| Cupcake | 305 | 3.7 | 67 | 4.3 |
| Gingerbread | 356 | 16 | 49 | 3.9 |

## Data table

The `Table` component has a close mapping to the native `<table>` elements. This constraint makes building rich data tables challenging.

The `DataGrid` component is designed for use-cases that are focused on handling large amounts of tabular data. While it comes with a more rigid structure, in exchange, you gain more powerful features.

Press Enter to start editing

## Dense table

A simple example of a dense table with no frills.

| Dessert (100g serving) | Calories | Fat(g) | Carbs(g) | Protein(g) |
| --- | --- | --- | --- | --- |
| Frozen yoghurt | 159 | 6 | 24 | 4 |
| Ice cream sandwich | 237 | 9 | 37 | 4.3 |
| Eclair | 262 | 16 | 24 | 6 |
| Cupcake | 305 | 3.7 | 67 | 4.3 |
| Gingerbread | 356 | 16 | 49 | 3.9 |

## Sorting & selecting

This example demonstrates the use of `Checkbox` and clickable rows for selection, with a custom `Toolbar`. It uses the `TableSortLabel` component to help style column headings.

The Table has been given a fixed width to demonstrate horizontal scrolling. In order to prevent the pagination controls from scrolling, the TablePagination component is used outside of the Table. (The 'Custom Table Pagination Action' example below shows the pagination within the TableFooter.)

Nutrition

| | Dessert(100g serving) | Calories sorted ascending | Fat(g) | Carbs(g) | Protein(g) |
| --- | --- | --- | --- | --- | --- |
| | Frozen yoghurt | 159 | 6 | 24 | 4 |
| | Ice cream sandwich | 237 | 9 | 37 | 4.3 |
| | Eclair | 262 | 16 | 24 | 6 |
| | Cupcake | 305 | 3.7 | 67 | 4.3 |
| | Marshmallow | 318 | 0 | 81 | 2 |

Dense padding

## Customization

Here is an example of customizing the component. You can learn more about this in the overrides documentation page.

| Dessert (100g serving) | Calories | Fat(g) | Carbs(g) | Protein(g) |
| --- | --- | --- | --- | --- |
| Frozen yoghurt | 159 | 6 | 24 | 4 |
| Ice cream sandwich | 237 | 9 | 37 | 4.3 |
| Eclair | 262 | 16 | 24 | 6 |
| Cupcake | 305 | 3.7 | 67 | 4.3 |
| Gingerbread | 356 | 16 | 49 | 3.9 |

It's possible to customize the options shown in the "Rows per page" select using the `rowsPerPageOptions` prop. You should either provide an array of:

* **numbers**, each number will be used for the option's label and value.

```
<TablePagination rowsPerPageOptions={[10, 50]} />
``` 
* **objects**, the `value` and `label` keys will be used respectively for the value and label of the option (useful for language strings such as 'All').

```
<TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />
``` 

The `ActionsComponent` prop of the `TablePagination` component allows the implementation of custom actions.

| Frozen yoghurt | 159 | 6 |
| --- |
| Ice cream sandwich | 237 | 9 |
| Eclair | 262 | 16 |
| Cupcake | 305 | 3.7 |
| Marshmallow | 318 | 0 |
| |

Here is an example of a table with scrollable rows and fixed column headers. It leverages the `stickyHeader` prop.

## Column grouping

You can group column headers by rendering multiple table rows inside a table head:

```
<TableHead>
 <TableRow />
 <TableRow />
</TableHead>
```

## Collapsible table

An example of a table with expandable rows, revealing more information. It utilizes the `Collapse` component.

| | Dessert (100g serving) | Calories | Fat(g) | Carbs(g) | Protein(g) |
| --- | --- | --- | --- | --- | --- |
| | Frozen yoghurt | 159 | 6 | 24 | 4 |
| |
| | Ice cream sandwich | 237 | 9 | 37 | 4.3 |
| |
| | Eclair | 262 | 16 | 24 | 6 |
| |
| | Cupcake | 305 | 3.7 | 67 | 4.3 |
| |
| | Gingerbread | 356 | 16 | 49 | 3.9 |
| |

## Spanning table

A simple example with spanning rows & columns.

| Details | Price |
| --- | --- |
| Desc | Qty. | Unit | Sum |
| Paperclips (Box) | 100 | 1.15 | 115.00 |
| Paper (Case) | 10 | 45.99 | 459.90 |
| Waste Basket | 2 | 17.99 | 35.98 |
| | Subtotal | 610.88 |
| Tax | 7 % | 42.76 |
| Total | 653.64 |

## Virtualized table

In the following example, we demonstrate how to use react-virtuoso with the `Table` component. It renders 200 rows and can easily handle more. Virtualization helps with performance issues.

| First Name | Last Name | Age | State | Phone Number |
| --- | --- | --- | --- | --- |
| Seth | Lucas | 26 | Colorado | (775) 614-2403 |
| Todd | Kondo | 34 | Oklahoma | (617) 700-9729 |
| Ophelia | Becucci | 18 | Alabama | (381) 636-5722 |
| David | Colzi | 43 | Hawaii | (631) 229-4297 |
| Brian | Browne | 47 | Texas | (335) 954-1418 |
| Alberta | Patrick | 39 | Maine | (209) 995-8275 |
| Michael | Herrera | 29 | Tennessee | (724) 716-5456 |
| |

Press Enter to start editing

## Accessibility

(WAI tutorial: https://www.w3.org/WAI/tutorials/tables/)

### Caption

A caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it's about and decide if they want to read it.

A basic table example with a caption| Dessert (100g serving) | Calories | Fat(g) | Carbs(g) | Protein(g) |
| --- | --- | --- | --- | --- |
| Frozen yoghurt | 159 | 6 | 24 | 4 |
| Ice cream sandwich | 237 | 9 | 37 | 4.3 |
| Eclair | 262 | 16 | 24 | 6 |

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Table />`
* `<TableBody />`
* `<TableCell />`
* `<TableContainer />`
* `<TableFooter />`
* `<TableHead />`
* `<TablePagination />`
* `<TableRow />`
* `<TableSortLabel />`

Contents