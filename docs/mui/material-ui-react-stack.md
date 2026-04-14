Stack is a container component for arranging elements vertically or horizontally.

## Introduction

The Stack component manages the layout of its immediate children along the vertical or horizontal axis, with optional spacing and dividers between each child.

* View as Markdown
* Feedback
* Bundle size
* Source
* Figma
* Sketch

## Basics

```
import Stack from '@mui/material/Stack';
```

The Stack component acts as a generic container, wrapping around the elements to be arranged.

Use the `spacing` prop to control the space between children. The spacing value can be any number, including decimals, or a string. (The prop is converted into a CSS property using the `theme.spacing()` helper.)

Item 1

Item 2

Item 3

Press Enter to start editing

### Stack vs. Grid

`Stack` is concerned with one-dimensional layouts, while Grid handles two-dimensional layouts. The default direction is `column` which stacks children vertically.

## Direction

By default, Stack arranges items vertically in a column. Use the `direction` prop to position items horizontally in a row:

Item 1

Item 2

Item 3

Press Enter to start editing

## Dividers

Use the `divider` prop to insert an element between each child. This works particularly well with the Divider component, as shown below:

Item 1

Item 2

Item 3

Press Enter to start editing

## Responsive values

You can switch the `direction` or `spacing` values based on the active breakpoint.

Item 1

Item 2

Item 3

Press Enter to start editing

## Flexbox gap

To use flexbox `gap` for the spacing implementation, set the `useFlexGap` prop to true.

It removes the known limitations of the default implementation that uses CSS nested selector. However, CSS flexbox gap is not fully supported in some browsers.

We recommend checking the support percentage before using it.

Item 1

Item 2

Long content

Press Enter to start editing

To set the prop to all stack instances, create a theme with default props:

```
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const theme = createTheme({
 components: {
 MuiStack: {
 defaultProps: {
 useFlexGap: true,
 },
 },
 },
});

function App() {
 return (
 <ThemeProvider theme={theme}>
 <Stack>…</Stack> {/* uses flexbox gap by default */}
 </ThemeProvider>
 );
}
```

## Interactive demo

Below is an interactive demo that lets you explore the visual results of the different settings:

Item 1

Item 2

Item 3

```
<Stack
 direction="row"
 spacing={2}
 sx={{
 justifyContent: "center",
 alignItems: "center",
 }}
>
```

## Customization

Use the `sx` prop to quickly customize any Stack instance using a superset of CSS that has access to all the style functions and theme-aware properties exposed in the MUI System package. Below is an example of how to apply center align items using this prop:

```
<Stack sx={{ alignItems: 'center' }} />
```

## Limitations

### Margin on the children

Customizing the margin on the children is not supported by default.

For instance, the top-margin on the `Button` component below will be ignored.

```
<Stack>
 <Button sx={{ marginTop: '30px' }}>...</Button>
</Stack>
```

### white-space: nowrap

The initial setting on flex items is `min-width: auto`. This causes a positioning conflict when children use `white-space: nowrap;`. You can reproduce the issue with:

```
<Stack direction="row">
 <Typography noWrap>
```

In order for the item to stay within the container you need to set `min-width: 0`.

```
<Stack direction="row" sx={{ minWidth: 0 }}>
 <Typography noWrap>
```

W

Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.

W

Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.

Press Enter to start editing

## Anatomy

The Stack component is composed of a single root `<div>` element:

```
<div class="MuiStack-root">
 <!-- Stack contents -->
</div>
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<PigmentStack />`
* `<Stack />`