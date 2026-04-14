Tooltips display informative text when users hover over, focus on, or tap an element.

When activated, Tooltips display a text label identifying an element, such as a description of its function.

* View as Markdown
* Feedback
* Bundle size
* Source
* WAI-ARIA
* Material Design
* Figma
* Sketch

## Basic tooltip

Press Enter to start editing

## Labels and descriptions

By default, the tooltip only labels its child element. This is notably different from `title` which can either label or describe its child depending on whether the child already has a label. For example, in the element below, the `title` acts as an accessible description:

```
<button title="some more information">A button</button>
```

If you want the tooltip to act as an accessible description, you can pass the `describeChild` prop. You shouldn't use `describeChild` if the tooltip provides the only visual label. In that case, the child would have no accessible name and the tooltip would violate success criterion 2.5.3 in WCAG 2.1. If the trigger already has either visible text or an `aria-label`, use the tooltip as a description and pass the `describeChild` prop. Otherwise, you can use the default behavior and let the tooltip label the trigger.

Press Enter to start editing

## Positioned tooltips

The `Tooltip` has 12 **placement** choices. They don't have directional arrows; instead, they rely on motion emanating from the source to convey direction.

## Customization

Here are some examples of customizing the component. You can learn more about this in the overrides documentation page.

## Arrow tooltips

You can use the `arrow` prop to give your tooltip an arrow indicating which element it refers to.

Press Enter to start editing

## Distance from anchor

To adjust the distance between the tooltip and its anchor, you can use the `slotProps` prop to modify the offset of the popper.

Alternatively, you can use the `slotProps` prop to customize the margin of the popper.

## Custom child element

The tooltip needs to apply DOM event listeners to its child element. If the child is a custom React element, you need to make sure that it spreads its props to the underlying DOM element.

```
const MyComponent = React.forwardRef(function MyComponent(props, ref) {
 // Spread the props to the underlying DOM element.
 return (
 <div {...props} ref={ref}>
 Bin
 </div>
 );
});

// ...

<Tooltip title="Delete">
 <MyComponent />
</Tooltip>;
```

If using a class component as a child, you'll also need to ensure that the ref is forwarded to the underlying DOM element. (A ref to the class component itself will not work.)

```
class MyComponent extends React.Component {
 render() {
 const { innerRef, ...props } = this.props;
 // Spread the props to the underlying DOM element.
 return (
 <div {...props} ref={innerRef}>
 Bin
 </div>
 );
 }
}

// Wrap MyComponent to forward the ref as expected by Tooltip
const WrappedMyComponent = React.forwardRef(function WrappedMyComponent(props, ref) {
 return <MyComponent {...props} innerRef={ref} />;
});

// ...

<Tooltip title="Delete">
 <WrappedMyComponent />
</Tooltip>;
```

## Triggers

You can define the types of events that cause a tooltip to show.

The touch action requires a long press due to the `enterTouchDelay` prop being set to `700`ms by default.

## Controlled tooltips

You can use the `open`, `onOpen` and `onClose` props to control the behavior of the tooltip.

Press Enter to start editing

## Variable width

The `Tooltip` wraps long text by default to make it readable.

Press Enter to start editing

## Interactive

Tooltips are interactive by default (to pass WCAG 2.1 success criterion 1.4.13). It won't close when the user hovers over the tooltip before the `leaveDelay` is expired. You can disable this behavior (thus failing the success criterion which is required to reach level AA) by passing `disableInteractive`.

Press Enter to start editing

## Disabled elements

By default disabled elements like `<button>` do not trigger user interactions so a `Tooltip` will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a `span`.

Press Enter to start editing

```
<Tooltip describeChild title="You don't have permission to do this">
 <span>
 <button disabled={disabled} style={disabled ? { pointerEvents: 'none' } : {}}>
 A disabled button
 </button>
 </span>
</Tooltip>
```

## Transitions

Use a different transition.

## Follow cursor

You can enable the tooltip to follow the cursor by setting `followCursor={true}`.

Disabled Action

Press Enter to start editing

## Virtual element

In the event you need to implement a custom placement, you can use the `anchorEl` prop: The value of the `anchorEl` prop can be a reference to a fake DOM element. You need to create an object shaped like the `VirtualElement`.

Hover

## Showing and hiding

The tooltip is normally shown immediately when the user's mouse hovers over the element, and hides immediately when the user's mouse leaves. A delay in showing or hiding the tooltip can be added through the `enterDelay` and `leaveDelay` props.

On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the `disableTouchListener` prop.

Press Enter to start editing

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

Tooltips should wrap triggers that are focusable and hoverable (for example, buttons) so that all users can activate them. When tooltips are displayed, they are automatically linked to the trigger. The trigger element is either labeled or described by the tooltip content. However, tooltip content should not be used as a full text alternative for truncated content.

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Tooltip />`