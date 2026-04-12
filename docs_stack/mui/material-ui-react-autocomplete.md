The autocomplete is a normal text input enhanced by a panel of suggested options.

The widget is useful for setting the value of a single-line textbox in one of two types of scenarios:

1. The value for the textbox must be chosen from a predefined set of allowed values, for example a location field must contain a valid location name: combo box.
2. The textbox may contain any arbitrary value, but it is advantageous to suggest possible values to the user, for example a search field may suggest similar or previous searches to save the user time: free solo.

It's meant to be an improved version of the "react-select" and "downshift" packages.

* View as Markdown
* Feedback
* Bundle size
* Source
* WAI-ARIA
* Figma
* Sketch

## Combo box

The value must be chosen from a predefined set of allowed values.

Press Enter to start editing

### Options structure

By default, the component accepts the following options structures:

```
interface AutocompleteOption {
 label: string;
}
// or
type AutocompleteOption = string;
```

for instance:

```
const options = [
 { label: 'The Godfather', id: 1 },
 { label: 'Pulp Fiction', id: 2 },
];
// or
const options = ['The Godfather', 'Pulp Fiction'];
```

However, you can use different structures by providing a `getOptionLabel` prop.

If your options are objects, you must provide the `isOptionEqualToValue` prop to ensure correct selection and highlighting. By default, it uses strict equality to compare options with the current value.

### Playground

Each of the following examples demonstrates one feature of the Autocomplete component.

### Country select

Choose one of the 248 countries.

### Controlled states

The component has two states that can be controlled:

1. the "value" state with the `value`/`onChange` props combination. This state represents the value selected by the user, for instance when pressing Enter.
2. the "input value" state with the `inputValue`/`onInputChange` props combination. This state represents the value displayed in the textbox.

These two states are isolated, and should be controlled independently.

value: 'Option 1'

inputValue: 'Option 1'

## Free solo

Set `freeSolo` to true so the textbox can contain any arbitrary value.

### Search input

The prop is designed to cover the primary use case of a **search input** with suggestions, for example Google search or react-autowhatever.

freeSolo

Search input

freeSolo (handle string values)

### Creatable

If you intend to use this mode for a combo box like experience (an enhanced version of a select element) we recommend setting:

* `selectOnFocus` to help the user clear the selected value.
* `clearOnBlur` to help the user enter a new value.
* `handleHomeEndKeys` to move focus inside the popup with the Home and End keys.
* A last option, for instance: `Add "YOUR SEARCH"`.

Free solo with text demo

You could also display a dialog when the user wants to add a new value.

Free solo dialog

## Grouped

You can group the options with the `groupBy` prop. If you do so, make sure that the options are also sorted with the same dimension that they are grouped by, otherwise, you will notice duplicate headers.

Press Enter to start editing

To control how the groups are rendered, provide a custom `renderGroup` prop. This is a function that accepts an object with two fields:

* `group`—a string representing a group name
* `children`—a collection of list items that belong to the group

The following demo shows how to use this prop to define custom markup and override the styles of the default groups:

Press Enter to start editing

## Disabled options

Press Enter to start editing

## `useAutocomplete`

For advanced customization use cases, a headless `useAutocomplete()` hook is exposed. It accepts almost the same options as the Autocomplete component minus all the props related to the rendering of JSX. The Autocomplete component is built on this hook.

```
import { useAutocomplete } from '@mui/base/useAutocomplete';
```

The `useAutocomplete` hook is also reexported from @mui/material for convenience and backward compatibility.

```
import useAutocomplete from '@mui/material/useAutocomplete';
```

* 📦 4.6 kB gzipped.

useAutocomplete

### Customized hook

Customized hook

The Godfather

Head to the customization section for an example with the `Autocomplete` component instead of the hook.

## Asynchronous requests

The component supports two different asynchronous use-cases:

* Load on open: it waits for the component to be interacted with to load the options.
* Search as you type: a new request is made for each keystroke.

### Load on open

It displays a progress state as long as the network request is pending.

### Search as you type

If your logic is fetching new options on each keystroke and using the current value of the textbox to filter on the server, you may want to consider throttling requests.

Additionally, you will need to disable the built-in filtering of the `Autocomplete` component by overriding the `filterOptions` prop:

```
<Autocomplete filterOptions={(x) => x} />
```

### Google Maps place

A customized UI for Google Maps Places Autocomplete. For this demo, we need to load the Google Maps JavaScript and Google Places API.

The demo relies on autosuggest-highlight, a small (1 kB) utility for highlighting text in autosuggest and autocomplete components.

## Single value rendering

By default (when `multiple={false}`), the selected option is displayed as plain text inside the input. The `renderValue` prop allows you to customize how the selected value is rendered. This can be useful for adding custom styles, displaying additional information, or formatting the value differently.

* The `getItemProps` getter provides props like `data-item-index`, `disabled`, `tabIndex` and others. These props should be spread onto the rendered component for proper accessibility.
* If using a custom component other than a Material UI Chip, destructure the `onDelete` prop as it's specific to the Material UI Chip.

freeSolo

Press Enter to start editing

## Multiple values

When `multiple={true}`, the user can select multiple values. These selected values, referred to as "items" can be customized using the `renderValue` prop.

* The `getItemProps` getter supplies essential props like `data-item-index`, `disabled`, `tabIndex` and others. Make sure to spread them on each rendered item.
* If using a custom component other than a Material UI Chip, destructure the `onDelete` prop as it's specific to the Material UI Chip.

freeSolo

### Fixed options

In the event that you need to lock certain tags so that they can't be removed, you can set the chips disabled.

### Selection indicators

This example demonstrates how icons are used to indicate the selection state of each item in the listbox.

### Limit tags

You can use the `limitTags` prop to limit the number of displayed options when not focused.

Press Enter to start editing

## Sizes

Fancy smaller inputs? Use the `size` prop.

## Customization

### Custom input

The `renderInput` prop allows you to customize the rendered input. The first argument of this render prop contains props that you need to forward. Pay specific attention to the `ref` and `inputProps` keys.

Value:

### Globally customized options

To globally customize the Autocomplete options for all components in your app, you can use the theme default props and set the `renderOption` property in the `defaultProps` key. The `renderOption` property takes the `ownerState` as the fourth parameter, which includes props and internal component state. To display the label, you can use the `getOptionLabel` prop from the `ownerState`. This approach enables different options for each Autocomplete component while keeping the options styling consistent.

Press Enter to start editing

### GitHub's picker

This demo reproduces GitHub's label picker:

help wanted

type: bug

Head to the Customized hook section for a customization example with the `useAutocomplete` hook instead of the component.

### Hint

The following demo shows how to add a hint feature to the Autocomplete:

## Highlights

The following demo relies on autosuggest-highlight, a small (1 kB) utility for highlighting text in autosuggest and autocomplete components.

## Custom filter

The component exposes a factory to create a filter method that can be provided to the `filterOptions` prop. You can use it to change the default option filter behavior.

```
import { createFilterOptions } from '@mui/material/Autocomplete';
```

### `createFilterOptions(config) => filterOptions`

#### Arguments

1. `config` (_object_ [optional]):

* `config.ignoreAccents` (_bool_ [optional]): Defaults to `true`. Remove diacritics.
* `config.ignoreCase` (_bool_ [optional]): Defaults to `true`. Lowercase everything.
* `config.limit` (_number_ [optional]): Default to null. Limit the number of suggested options to be shown. For example, if `config.limit` is `100`, only the first `100` matching options are shown. It can be useful if a lot of options match and virtualization wasn't set up.
* `config.matchFrom` (_'any' | 'start'_ [optional]): Defaults to `'any'`.
* `config.stringify` (_func_ [optional]): Controls how an option is converted into a string so that it can be matched against the input text fragment.
* `config.trim` (_bool_ [optional]): Defaults to `false`. Remove trailing spaces.

#### Returns

`filterOptions`: the returned filter method can be provided directly to the `filterOptions` prop of the `Autocomplete` component, or the parameter of the same name for the hook.

In the following demo, the options need to start with the query prefix:

```
const filterOptions = createFilterOptions({
 matchFrom: 'start',
 stringify: (option) => option.title,
});

<Autocomplete filterOptions={filterOptions} />;
```

### Advanced

For richer filtering mechanisms, like fuzzy matching, it's recommended to look at match-sorter. For instance:

```
import { matchSorter } from 'match-sorter';

const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />;
```

## Virtualization

Search within 10,000 randomly generated options. The list is virtualized thanks to react-window.

## Events

If you would like to prevent the default key handler behavior, you can set the event's `defaultMuiPrevented` property to `true`:

```
<Autocomplete
 onKeyDown={(event) => {
 if (event.key === 'Enter') {
 // Prevent's default 'Enter' behavior.
 event.defaultMuiPrevented = true;
 // your handler code
 }
 }}
/>
```

## Limitations

### autocomplete/autofill

Browsers have heuristics to help the user fill in form inputs. However, this can harm the UX of the component.

By default, the component disables the input **autocomplete** feature (remembering what the user has typed for a given field in a previous session) with the `autoComplete="off"` attribute. Google Chrome does not currently support this attribute setting (Issue 41239842). A possible workaround is to remove the `id` to have the component generate a random one.

In addition to remembering past entered values, the browser might also propose **autofill** suggestions (saved login, address, or payment details). In the event you want the avoid autofill, you can try the following:

* Name the input without leaking any information the browser can use. For example `id="field1"` instead of `id="country"`. If you leave the id empty, the component uses a random id.

* Set `autoComplete="new-password"` (some browsers will suggest a strong password for inputs with this attribute setting):

```
<TextField
 {...params}
 slotProps={{
 ...params.slotProps,
 htmlInput: {
 ...params.slotProps.htmlInput,
 autoComplete: 'new-password',
 },
 }}
/>
``` 

Read the guide on MDN for more details.

### iOS VoiceOver

VoiceOver on iOS Safari doesn't support the `aria-owns` attribute very well. You can work around the issue with the `disablePortal` prop.

### ListboxComponent

If you provide a custom `ListboxComponent` prop, you need to make sure that the intended scroll container has the `role` attribute set to `listbox`. This ensures the correct behavior of the scroll, for example when using the keyboard to navigate.

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

We encourage the usage of a label for the textbox. The component implements the WAI-ARIA authoring practices.

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Autocomplete />`
* `<Popper />`
* `<TextField />`