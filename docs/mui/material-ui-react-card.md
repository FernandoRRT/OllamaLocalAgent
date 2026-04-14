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

Cards contain content and actions about a single subject.

* View as Markdown
* Feedback
* Bundle size
* Source
* Material Design
* Figma
* Sketch

## Introduction

Cards are surfaces that display content and actions on a single topic. The Material UI Card component includes several complementary utility components to handle various use cases:

* Card: a surface-level container for grouping related components.
* Card Content: the wrapper for the Card content.
* Card Header: an optional wrapper for the Card header.
* Card Media: an optional container for displaying images, videos, etc.
* Card Actions: an optional wrapper that groups a set of buttons.
* Card Action Area: an optional wrapper that allows users to interact with the specified area of the Card.

Word of the Day

be•nev•o•lent

adjective

well meaning and kindly.

"a benevolent smile"

## Basics

```
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
```

### Outlined Card

Set `variant="outlined"` to render an outlined card.

Word of the Day

be•nev•o•lent

adjective

well meaning and kindly.

"a benevolent smile"

Press Enter to start editing

## Complex Interaction

On desktop, card content can expand. (Click the downward chevron to view the recipe.)

This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.

Example of a card using an image to reinforce the content.

Lizard

Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica

By default, we use the combination of a `<div>` element and a _background image_ to display the media. It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the `component` prop for these use cases:

Lizard

Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica

## Primary action

Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a `CardActionArea` component.

A card can also offer supplemental actions which should stand detached from the main action area in order to avoid event overlap.

## UI Controls

Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card.

Here's an example of a media control card.

Live From Space

Mac Miller

## Active state styles

To customize a Card's styles when it's in an active state, you can attach a `data-active` attribute to the Card Action Area component and apply styles with the `&[data-active]` selector, as shown below:

🎨 If you are looking for inspiration, you can check MUI Treasury's customization examples.

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Card />`
* `<CardActionArea />`
* `<CardActions />`
* `<CardContent />`
* `<CardHeader />`
* `<CardMedia />`
* `<Collapse />`
* `<Paper />`

Contents