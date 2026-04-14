The Accordion component lets users show and hide sections of related content on a page.

* View as Markdown
* Feedback
* Bundle size
* Source
* WAI-ARIA
* Material Design
* Figma
* Sketch

## Introduction

The Material UI Accordion component includes several complementary utility components to handle various use cases:

* Accordion: the wrapper for grouping related components.
* Accordion Summary: the wrapper for the Accordion header, which expands or collapses the content when clicked.
* Accordion Details: the wrapper for the Accordion content.
* Accordion Actions: an optional wrapper that groups a set of buttons.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.

## Basics

```
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
```

### Expand icon

Use the `expandIcon` prop on the Accordion Summary component to change the expand indicator icon. The component handles the turning upside-down transition automatically.

### Expanded by default

Use the `defaultExpanded` prop on the Accordion component to have it opened by default.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.

### Transition

Use the `slots.transition` and `slotProps.transition` props to change the Accordion's default transition.

### Disabled item

Use the `disabled` prop on the Accordion component to disable interaction and focus.

### Controlled Accordion

The Accordion component can be controlled or uncontrolled.

## Customization

### Only one expanded at a time

Use the `expanded` prop with React's `useState` hook to allow only one Accordion item to be expanded at a time. The demo below also shows a bit of visual customization.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.

### Changing heading level

By default, the Accordion uses an `h3` element for the heading. You can change the heading element using the `slotProps.heading.component` prop to ensure the correct heading hierarchy in your document.

```
<Accordion slotProps={{ heading: { component: 'h4' } }}>
 <AccordionSummary
 expandIcon={<ExpandMoreIcon />}
 aria-controls="panel1-content"
 id="panel1-header"
 >
 Accordion
 </AccordionSummary>
 <AccordionDetails>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
 lacus ex, sit amet blandit leo lobortis eget.
 </AccordionDetails>
</Accordion>
```

## Performance

The Accordion content is mounted by default even if it's not expanded. This default behavior has server-side rendering and SEO in mind.

If you render the Accordion Details with a big component tree nested inside, or if you have many Accordions, you may want to change this behavior by setting `unmountOnExit` to `true` inside the `slotProps.transition` prop to improve performance:

```
<Accordion slotProps={{ transition: { unmountOnExit: true } }} />
```

## Accessibility

The WAI-ARIA guidelines for accordions recommend setting an `id` and `aria-controls`, which in this case would apply to the Accordion Summary component. The Accordion component then derives the necessary `aria-labelledby` and `id` from its content.

```
<Accordion>
 <AccordionSummary id="panel-header" aria-controls="panel-content">
 Header
 </AccordionSummary>
 <AccordionDetails>
 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 </AccordionDetails>
</Accordion>
```

## Anatomy

The Accordion component consists of a root `<div>` that contains the Accordion Summary, Accordion Details, and optional Accordion Actions for action buttons.

```
<div class="MuiAccordion-root">
 <h3 class="MuiAccordion-heading">
 <button class="MuiButtonBase-root MuiAccordionSummary-root" aria-expanded="">
 <!-- Accordion summary goes here -->
 </button>
 </h3>
 <div class="MuiAccordion-region" role="region">
 <div class="MuiAccordionDetails-root">
 <!-- Accordion content goes here -->
 </div>
 </div>
</div>
```

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Accordion />`
* `<AccordionActions />`
* `<AccordionDetails />`
* `<AccordionSummary />`