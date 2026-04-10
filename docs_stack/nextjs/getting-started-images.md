# Image Optimization

Last updated April 8, 2026

The Next.js `<Image>` component extends the HTML `<img>` element to provide:

*   **Size optimization:** Automatically serving correctly sized images for each device, using modern image formats like WebP.
*   **Visual stability:** Preventing layout shift automatically when images are loading.
*   **Faster page loads:** Only loading images when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.
*   **Asset flexibility:** Resizing images on-demand, even images stored on remote servers.

To start using `<Image>`, import it from `next/image` and render it within your component.

app/page.tsx

TypeScript

```
import Image from 'next/image'
 
export default function Page() {
  return <Image src="" alt="" />
}
```

The `src` property can be a local or remote image.

> **🎥 Watch:** Learn more about how to use `next/image` → YouTube (9 minutes).

## Local images[](https://nextjs.org/docs/app/getting-started/images#local-images)

You can store static files, like images and fonts, under a folder called `public` in the root directory. Files inside `public` can then be referenced by your code starting from the base URL (`/`).

app/page.tsx

TypeScript

```
import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
```

If the image is statically imported, Next.js will automatically determine the intrinsic `width` and `height`. These values are used to determine the image ratio and prevent Cumulative Layout Shift while your image is loading.

app/page.tsx

TypeScript

```
import Image from 'next/image'
import ProfileImage from './profile.png'
 
export default function Page() {
  return (
    <Image
      src={ProfileImage}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}
```

### Images without static imports[](https://nextjs.org/docs/app/getting-started/images#images-without-static-imports)

If you can't use a static `import` for your images, you can use a dynamic `import()` in a Server Component to still get automatic `width`, `height`, and `blurDataURL`:

app/blog/[slug]/page.tsx

TypeScript

```
import Image from 'next/image'
 
async function PostImage({
  imageFilename,
  alt,
}: {
  imageFilename: string
  alt: string
}) {
  const { default: image } = await import(
    `../content/blog/images/${imageFilename}`
  )
  // image contains width, height, and blurDataURL
  return <Image src={image} alt={alt} />
}
```

If you have a path alias configured (e.g. `@/`), you can use it instead of a relative path:

```
const { default: image } = await import(
  `@/content/blog/images/${imageFilename}`
)
```

The path must include a static prefix (like `../content/blog/images/`). Be as specific as possible, since **all** files matching that prefix are bundled. Only files in your specified directory are included, so external input cannot reach outside of it.

## Remote images[](https://nextjs.org/docs/app/getting-started/images#remote-images)

To use a remote image, you can provide a URL string for the `src` property.

app/page.tsx

TypeScript

```
import Image from 'next/image'
 
export default function Page() {
  return (
    <Image
      src="https://s3.amazonaws.com/my-bucket/profile.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}
```

Since Next.js does not have access to remote files during the build process, you'll need to provide the `width`, `height` and optional `blurDataURL` props manually. The `width` and `height` are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. Alternatively, you can use the `fill` property to make the image fill the size of the parent element.

To safely allow images from remote servers, you need to define a list of supported URL patterns in `next.config.js`. Be as specific as possible to prevent malicious usage. For example, the following configuration will only allow images from a specific AWS S3 bucket:

next.config.ts

TypeScript

```
import type { NextConfig } from 'next'
 
const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
        search: '',
      },
    ],
  },
}
 
export default config
```

## API Reference

See the API Reference for the full feature set of Next.js Image.

### Image Component Optimize Images in your Next.js Application using the built-in `next/image` Component.

Previous CSSNext Font Optimization