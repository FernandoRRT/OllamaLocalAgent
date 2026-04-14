Select components are used for collecting user provided information from a list of options.

* View as Markdown
* Feedback
* Bundle size
* Source
* WAI-ARIA
* Material Design
* Figma
* Sketch

## Basic select

Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport.

Age

Press Enter to start editing

## Advanced features

The Select component is meant to be interchangeable with a native `<select>` element.

If you are looking for more advanced features, like combobox, multiselect, autocomplete, async or creatable support, head to the `Autocomplete` component. It's meant to be an improved version of the "react-select" and "downshift" packages.

## Props

The Select component is implemented as a custom `<input>` element of the InputBase. It extends the text field components subcomponents, either the OutlinedInput, Input, or FilledInput, depending on the variant selected. It shares the same styles and many of the same props. Refer to the respective component's API page for details.

### Filled and standard variants

Age

Age

### Labels and helper text

Age

With label + helper text

_None_

Without label

Age

### Small Size

Age

### Other props

Age

Disabled

Age

Error

Age

Read only

Age

Required

## Native select

As the user experience can be improved on mobile using the native select of the platform, we allow such pattern.

Age

Press Enter to start editing

## TextField

The `TextField` wrapper component is a complete form control including a label, input and help text. You can find an example with the select mode in this section.

## Customization

Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.

The first step is to style the `InputBase` component. Once it's styled, you can either use it directly as a text field or provide it to the select `input` prop to have a `select` field. Notice that the `"standard"` variant is easier to customize, since it does not wrap the contents in a `fieldset`/`legend` markup.

Age

Age

Age

🎨 If you are looking for inspiration, you can check MUI Treasury's customization examples.

## Multiple select

The `Select` component can handle multiple selections. It's enabled with the `multiple` prop.

Like with the single selection, you can pull out the new value by accessing `event.target.value` in the `onChange` callback. It's always an array.

### Default

Name

### Selection indicators

This example demonstrates how icons are used to indicate the selection state of each item in the listbox.

Tag

### Chip

Chip

### Placeholder

_Placeholder_

### Native

Native

## Controlling the open state

You can control the open state of the select with the `open` prop. Alternatively, it is also possible to set the initial (uncontrolled) open state of the component with the `defaultOpen` prop.

Age

## With a dialog

While it's discouraged by the Material Design guidelines, you can use a select inside a dialog.

## Grouping

Display categories with the `ListSubheader` component or the native `<optgroup>` element.

Grouping

Grouping

## Accessibility

To properly label your `Select` input you need an extra element with an `id` that contains a label. That `id` needs to match the `labelId` of the `Select`, for example:

```
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
 <MenuItem value="10">Ten</MenuItem>
 <MenuItem value="20">Twenty</MenuItem>
</Select>
```

Alternatively a `TextField` with an `id` and `label` creates the proper markup and ids for you:

```
<TextField id="select" label="Age" value="20" select>
 <MenuItem value="10">Ten</MenuItem>
 <MenuItem value="20">Twenty</MenuItem>
</TextField>
```

For a native select, you should mention a label by giving the value of the `id` attribute of the select element to the `InputLabel`'s `htmlFor` attribute:

```
<InputLabel htmlFor="select">Age</InputLabel>
<NativeSelect id="select">
 <option value="10">Ten</option>
 <option value="20">Twenty</option>
</NativeSelect>
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<NativeSelect />`
* `<Select />`