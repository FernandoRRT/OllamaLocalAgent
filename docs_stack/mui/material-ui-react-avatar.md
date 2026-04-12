# React Avatar component - Material UI

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

# Avatar

Avatars are found throughout material design with uses in everything from tables to dialog menus.

Create a website that reflects your personal brand with Squarespace. Start your free trial.ads via Carbon

* View as Markdown
* Feedback
* Bundle size
* Source
* Figma
* Sketch

## Image avatars

Image avatars can be created by passing standard `img` props `src` or `srcSet` to the component.

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
```

Press Enter to start editing

## Letter avatars

Avatars containing simple characters can be created by passing a string as `children`.

H

N

OP

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Avatar>H</Avatar>
<Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
<Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
```

Press Enter to start editing

You can use different background colors for the avatar. The following demo generates the color based on the name of the person.

KD

JW

TN

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Avatar {...stringAvatar('Kent Dodds')} />
<Avatar {...stringAvatar('Jed Watson')} />
<Avatar {...stringAvatar('Tim Neutkens')} />
```

Press Enter to start editing

## Sizes

You can change the size of the avatar with the `height` and `width` CSS properties.

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Avatar
 alt="Remy Sharp"
 src="/static/images/avatar/1.jpg"
 sx={{ width: 24, height: 24 }}
/>
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
<Avatar
 alt="Remy Sharp"
 src="/static/images/avatar/1.jpg"
 sx={{ width: 56, height: 56 }}
/>
```

Press Enter to start editing

## Icon avatars

Icon avatars are created by passing an icon as `children`.

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Avatar>
 <FolderIcon />
</Avatar>
<Avatar sx={{ bgcolor: pink[500] }}>
 <PageviewIcon />
</Avatar>
<Avatar sx={{ bgcolor: green[500] }}>
 <AssignmentIcon />
</Avatar>
```

Press Enter to start editing

## Variants

If you need square or rounded avatars, use the `variant` prop.

N

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
 N
</Avatar>
<Avatar sx={{ bgcolor: green[500] }} variant="rounded">
 <AssignmentIcon />
</Avatar>
```

Press Enter to start editing

## Fallbacks

If there is an error loading the avatar image, the component falls back to an alternative in the following order:

* the provided children
* the first letter of the `alt` text
* a generic avatar icon

B

R

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<Avatar
 sx={{ bgcolor: deepOrange[500] }}
 alt="Remy Sharp"
 src="/broken-image.jpg"
>
 B
</Avatar>
<Avatar
 sx={{ bgcolor: deepOrange[500] }}
 alt="Remy Sharp"
 src="/broken-image.jpg"
/>
<Avatar src="/broken-image.jpg" />
```

Press Enter to start editing

## Grouped

`AvatarGroup` renders its children as a stack. Use the `max` prop to limit the number of avatars.

+2

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<AvatarGroup max={4}>
 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
 <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
 <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
 <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
 <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
```

Press Enter to start editing

### Total avatars

If you need to control the total number of avatars not shown, you can use the `total` prop.

+20

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<AvatarGroup total={24}>
 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
 <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
 <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
 <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
```

Press Enter to start editing

### Custom surplus

Set the `renderSurplus` prop as a callback to customize the surplus avatar. The callback will receive the surplus number as an argument based on the children and the `max` prop, and should return a `React.ReactNode`.

The `renderSurplus` prop is useful when you need to render the surplus based on the data sent from the server.

+4 k

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<AvatarGroup
 renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
 total={4251}
>
 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
 <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
 <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
 <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
```

Press Enter to start editing

### Spacing

You can change the spacing between avatars using the `spacing` prop. You can use one of the presets (`"medium"`, the default, or `"small"`) or set a custom numeric value.

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<AvatarGroup spacing="medium">
 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
 <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
 <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
</AvatarGroup>
<AvatarGroup spacing="small">
 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
 <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
 <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
</AvatarGroup>
<AvatarGroup spacing={24}>
 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
 <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
 <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
</AvatarGroup>
```

Press Enter to start editing

## With badge

 Edit in Chat

JS TS

Expand code

Copy(or Ctrl + C)

Edit code 

```tsx
<StyledBadge
 overlap="circular"
 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
 variant="dot"
>
 <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
</StyledBadge>
<Badge
 overlap="circular"
 anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
 badgeContent={
 <SmallAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
 }
>
 <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
</Badge>
```

Press Enter to start editing

## Avatar upload

 Edit in Chat

JS TS

Show code

## API

See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.

* `<Avatar />`
* `<AvatarGroup />`
* `<Badge />`

Edit this page

Was this page helpful?

* * *

Toggle ButtonBadge

* * *

•

Blog
•

Store

Contents

* Image avatars
* Letter avatars
* Sizes
* Icon avatars
* Variants
* Fallbacks
* Grouped
 * Total avatars
 * Custom surplus
 * Spacing

* With badge
* Avatar upload
* API

Become a Diamond sponsor

MUI stands in solidarity with Ukraine.

###### Cookie Preferences

We use cookies to understand site usage and improve our content. This includes third-party analytics.

Allow analytics Essential only