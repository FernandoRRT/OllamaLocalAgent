Install Material UI, the world's most popular React UI framework.

## Default installation

Run one of the following commands to add Material UI to your project:

`npm install @mui/material @emotion/react @emotion/styled`

### Peer dependencies

Please note that react and react-dom are peer dependencies, meaning you should ensure they are installed before installing Material UI.

```
"peerDependencies": {
 "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
 "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
},
```

### React 18 and below

If you are using React 18 or below, you need to set up a resolution of `react-is` package to the same version as the `react` you are using.

For example, if you are using `react@18.3.1`, do the following steps:

1. Install `react-is@18.3.1`.

`npm install react-is@18.3.1`

1. Set the resolutions or overrides in the `package.json`.

```
{
 …
 "overrides": {
 "react-is": "^18.3.1"
 }
}
```

#### Why is this needed?

Material UI uses `react-is@19`, which changed how React elements are identified.

If you're on React 18 or below, mismatched versions of `react-is` can cause runtime errors in prop type checks. Forcing `react-is` to match your React version prevents these errors.

## With styled-components

Material UI uses Emotion as its default styling engine. If you want to use styled-components instead, run one of the following commands:

`npm install @mui/material @mui/styled-engine-sc styled-components`

Next, follow the styled-components how-to guide to properly configure your bundler to support `@mui/styled-engine-sc`.

## Roboto font

Material UI uses the Roboto font by default. Add it to your project via Fontsource, or with the Google Fonts CDN.

`npm install @fontsource/roboto`

Then you can import it in your entry point like this:

```
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

### Google Web Fonts

To install Roboto through the Google Web Fonts CDN, add the following code inside your project's `<head />` tag:

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
 rel="stylesheet"
 href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
```

## Icons

To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos), you must first install the Material Icons font. You can do so with npm, or with the Google Web Fonts CDN.

`npm install @mui/icons-material`

### Google Web Fonts

To install the Material Icons font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's `<head />` tag:

To use the font `Icon` component, you must first add the Material Icons font. Here are some instructions on how to do so. For instance, via Google Web Fonts:

```
<link
 rel="stylesheet"
 href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

## CDN

You can start using Material UI right away with minimal front-end infrastructure by installing it via CDN, which is a great option for rapid prototyping.

Follow this CDN example to get started.