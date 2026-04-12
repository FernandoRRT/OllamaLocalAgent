Customize Material UI with your theme. You can change the colors, the typography and much more.

The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements, etc.

Themes let you apply a consistent tone to your app. It allows you to **customize all design aspects** of your project in order to meet the specific needs of your business or brand.

To promote greater consistency between apps, light and dark theme types are available to choose from. By default, components use the light theme type.

## Theme provider

Material UI components adhere to the library's default theme out of the box. Use `ThemeProvider` to inject a custom theme into your application.

`ThemeProvider` relies on the context feature of React to pass the theme down to the components, so you need to make sure that `ThemeProvider` is a parent of the components you are trying to customize. You can learn more about this in the API section.

## Theme configuration variables

Changing the theme configuration variables is the most effective way to match Material UI to your needs. The following sections cover the most important theme variables:

* `.palette`
* `.typography`
* `.spacing`
* `.breakpoints`
* `.zIndex`
* `.transitions`
* `.components`

You can check out the default theme section to view the default theme in full.

### Custom variables

When using Material UI's theme with MUI System or any other styling solution, it can be convenient to add additional variables to the theme so you can use them everywhere. For instance:

```
const theme = createTheme({
 status: {
 danger: orange[500],
 },
});
```

### TypeScript

You have to use module augmentation to add new variables to the `Theme` and `ThemeOptions`.

```
declare module '@mui/material/styles' {
 interface Theme {
 status: {
 danger: string;
 };
 }
 // allow configuration using `createTheme()`
 interface ThemeOptions {
 status?: {
 danger?: string;
 };
 }
}
```

To add extra variables to the `theme.palette`, see palette customization.

## Theme builder

The community has built great tools to build a theme:

* mui-theme-creator: A tool to help design and customize themes for the Material UI component library. Includes basic site templates to show various components and how they are affected by the theme
* MUI Theme Builder: A tool to generate, preview, and edit Material UI themes
* Material palette generator: The Material palette generator can be used to generate a palette for any color you input.

## Accessing the theme in a component

You can access the theme variables inside your functional React components using the `useTheme` hook:

```
import { useTheme } from '@mui/material/styles';

function DeepChild() {
 const theme = useTheme();
 return <span>{`spacing ${theme.spacing}`}</span>;
}
```

## Nesting the theme

You can nest multiple theme providers.

The inner theme will **override** the outer theme. You can extend the outer theme by providing a function:

## CSS theme variables

To generate CSS variables from the theme, set `cssVariables` to `true` in the theme configuration and pass it to the `ThemeProvider`:

```
const theme = createTheme({
 cssVariables: true,
});

function App() {
 return <ThemeProvider theme={theme}>...</ThemeProvider>;
}
```

This generates a global stylesheet with the CSS theme variables:

```
:root {
 --mui-palette-primary-main: #1976d2;
 /* ...other variables */
}
```

All components under the `ThemeProvider` will use those CSS theme variables instead of raw values.

Button styles

```
- color: #1976d2;
+ color: var(--mui-palette-primary-main);
```

To learn more about this feature, see the CSS theme variables guide.

## API

### `createTheme(options, ...args) => theme`

Generate a theme base on the options received. Then, pass it as a prop to `ThemeProvider`.

#### Arguments

1. `options` (_object_): Takes an incomplete theme object and adds the missing parts.
2. `...args` (_object[]_): Deep merge the arguments with the about to be returned theme.

```
import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';

const theme = createTheme(deepmerge(options1, options2));
```

#### Returns

`theme` (_object_): A complete, ready-to-use theme object.

#### Examples

```
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
 palette: {
 primary: {
 main: purple[500],
 },
 secondary: {
 main: green[500],
 },
 },
});
```

#### Theme composition: using theme options to define other options

When the value for a theme option is dependent on another theme option, you should compose the theme in steps.

```
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
 palette: {
 primary: {
 main: '#0052cc',
 },
 secondary: {
 main: '#edf2ff',
 },
 },
});

theme = createTheme(theme, {
 palette: {
 info: {
 main: theme.palette.secondary.main,
 },
 },
});
```

Think of creating a theme as a two-step composition process: first, you define the basic design options; then, you'll use these design options to compose other options.

**WARNING**: `theme.vars` is a private field used for CSS variables support. Please use another name for a custom object.

### Merging className and style props in defaultProps

By default, when a component has `defaultProps` defined in the theme, props passed to the component override the default props completely.

```
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 components: {
 MuiButton: {
 defaultProps: {
 className: 'default-button-class',
 style: { marginTop: 8 },
 },
 },
 },
});

// className will be: "custom-button-class" (default ignored)
// style will be: { color: 'blue' } (default ignored)
<Button className="custom-button-class" style={{ color: 'blue' }}>
 Click me
</Button>;
```

You can change this behavior by configuring the theme to merge `className` and `style` props instead of replacing them.

To do this, set `theme.components.mergeClassNameAndStyle` to `true`:

```
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 components: {
 mergeClassNameAndStyle: true,
 MuiButton: {
 defaultProps: {
 className: 'default-button-class',
 style: { marginTop: 8 },
 },
 },
 },
});
```

Here's what the example above looks like with this configuration:

```
// className will be: "default-button-class custom-button-class"
// style will be: { marginTop: 8, color: 'blue' }
<Button className="custom-button-class" style={{ color: 'blue' }}>
 Click me
</Button>
```

### `responsiveFontSizes(theme, options) => theme`

Generate responsive typography settings based on the options received.

#### Arguments

1. `theme` (_object_): The theme object to enhance.
2. `options` (_object_ [optional]):

* `breakpoints` (_array<string>_ [optional]): Default to `['sm', 'md', 'lg']`. Array of breakpoints (identifiers).
* `disableAlign` (_bool_ [optional]): Default to `false`. Whether font sizes change slightly so line heights are preserved and align to Material Design's 4px line height grid. This requires a unitless line height in the theme's styles.
* `factor` (_number_ [optional]): Default to `2`. This value determines the strength of font size resizing. The higher the value, the less difference there is between font sizes on small screens. The lower the value, the bigger font sizes for small screens. The value must be greater than 1.
* `variants` (_array<string>_ [optional]): Default to all. The typography variants to handle.

#### Returns

`theme` (_object_): The new theme with a responsive typography.

#### Examples

```
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);
```

### `unstable_createMuiStrictModeTheme(options, ...args) => theme`

**WARNING**: Do not use this method in production.

Generates a theme that reduces the amount of warnings inside `React.StrictMode` like `Warning: findDOMNode is deprecated in StrictMode`.

#### Requirements

Currently `unstable_createMuiStrictModeTheme` adds no additional requirements.

#### Arguments

1. `options` (_object_): Takes an incomplete theme object and adds the missing parts.
2. `...args` (_object[]_): Deep merge the arguments with the about to be returned theme.

#### Returns

`theme` (_object_): A complete, ready-to-use theme object.

#### Examples

```
import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';

const theme = unstable_createMuiStrictModeTheme();

function App() {
 return (
 <React.StrictMode>
 <ThemeProvider theme={theme}>
 <LandingPage />
 </ThemeProvider>
 </React.StrictMode>
 );
}
```

### `ThemeProvider`

This component takes a `theme` prop and applies it to the entire React tree that it is wrapping around. It should preferably be used at **the root of your component tree**.

#### Props

| Name | Type | Description |
| --- | --- | --- |
| children* | node | Your component tree. |
| theme* | union:object|func | A theme object, usually the result of `createTheme()`. The provided theme will be merged with the default theme. You can provide a function to extend the outer theme. |

#### Examples

```
import * as React from 'react';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
 palette: {
 primary: {
 main: red[500],
 },
 },
});

function App() {
 return <ThemeProvider theme={theme}>...</ThemeProvider>;
}
```