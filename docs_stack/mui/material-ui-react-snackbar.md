Snackbars (also known as toasts) are used for brief notifications of processes that have been or will be performed.

* View as Markdown
* Feedback
* Bundle size
* Source
* WAI-ARIA
* Material Design
* Figma
* Sketch

## Introduction

The Snackbar component appears temporarily and floats above the UI to provide users with (non-critical) updates on an app's processes. The demo below, inspired by Google Keep, shows a basic Snackbar with a text element and two actions:

Press Enter to start editing

### Usage

Snackbars differ from Alerts in that Snackbars have a fixed position and a high z-index, so they're intended to break out of the document flow; Alerts, on the other hand, are usually part of the flow—except when they're used as children of a Snackbar.

Snackbars also differ from Dialogs in that Snackbars are not intended to convey _critical_ information or block the user from interacting with the rest of the app; Dialogs, by contrast, require input from the user in order to be dismissed.

## Basics

### Import

```
import Snackbar from '@mui/material/Snackbar';
```

### Position

Use the `anchorOrigin` prop to control the Snackbar's position on the screen.

Press Enter to start editing

### Content

```
import SnackbarContent from '@mui/material/SnackbarContent';
```

Use the Snackbar Content component to add text and actions to the Snackbar.

### Automatic dismiss

Use the `autoHideDuration` prop to automatically trigger the Snackbar's `onClose` function after a set period of time (in milliseconds).

Make sure to provide sufficient time for the user to process the information displayed on it.

Press Enter to start editing

### Transitions

You can use the `slots.transition` prop to change the transition of the Snackbar from Grow (the default) to others such as Slide.

Press Enter to start editing

## Customization

### Preventing default click away event

If you would like to prevent the default onClickAway behavior, you can set the event's `defaultMuiPrevented` property to `true`:

```
<Snackbar
 slotProps={{
 clickAwayListener: {
 onClickAway: (event) => {
 // Prevent's default 'onClickAway' behavior.
 event.defaultMuiPrevented = true;
 },
 },
 }}
/>
```

### Use with Alerts

Use an Alert inside a Snackbar for messages that communicate a certain severity.

Press Enter to start editing

### Use with Floating Action Buttons

If you're using a Floating Action Button on mobile, Material Design recommends positioning snackbars directly above it, as shown in the demo below:

## Common examples

### Consecutive Snackbars

This demo shows how to display multiple Snackbars without stacking them by using a consecutive animation.

## Supplementary components

### notistack

With an imperative API, notistack lets you vertically stack multiple Snackbars without having to handle their open and close states. Even though this is discouraged in the Material Design guidelines, it is still a common pattern.

## Accessibility

The user should be able to dismiss Snackbars by pressing Escape. If there are multiple instances appearing at the same time and you want Escape to dismiss only the oldest one that's currently open, call `event.preventDefault` in the `onClose` prop.

```
export default function MyComponent() {
 const [open, setOpen] = React.useState(true);

 return (
 <React.Fragment>
 <Snackbar
 open={open}
 onClose={(event, reason) => {
 // `reason === 'escapeKeyDown'` if `Escape` was pressed
 setOpen(false);
 // call `event.preventDefault` to only close one Snackbar at a time.
 }}
 />
 <Snackbar open={open} onClose={() => setOpen(false)} />
 </React.Fragment>
 );
}
```

## Anatomy

The Snackbar component is composed of a root `<div>` that houses interior elements like the Snackbar Content and other optional components (such as buttons or decorators).

```
<div role="presentation" class="MuiSnackbar-root">
 <div class="MuiPaper-root MuiSnackbarContent-root" role="alert">
 <div class="MuiSnackbarContent-message">
 <!-- Snackbar content goes here -->
 </div>
 </div>
</div>
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Snackbar />`
* `<SnackbarContent />`