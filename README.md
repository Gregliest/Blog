# Canyons and Code

My goal is to create a website that is simple, elegant, responsive, and performant. Let me know if you have any suggestions, or find a bug!

Based loosely on the [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).

## Design

- Typescript
- Tailwind
- Frontmatter
- Yarn
- NextJS and Vercel
- Mdx

## Installation

```bash
yarn install
```

## Development

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. The site will live update as you code.

## Extend / Customize

`data/siteMetadata.js` - contains most of the site related information which should be modified for a user's need.

`data/authors/default.md` - default author information (required). Additional authors can be added as files in `data/authors`.

`data/projectsData.js` - data used to generate styled card on the projects page.

`data/headerNavLinks.js` - navigation links.

`data/logo.svg` - replace with your own logo.

`data/blog` - replace with your own blog posts.

`public/static` - store assets such as images and favicons.

`tailwind.config.js` and `css/tailwind.css` - contain the tailwind stylesheet which can be modified to change the overall look and feel of the site.

`css/prism.css` - controls the styles associated with the code blocks. Feel free to customize it and use your preferred prismjs theme e.g. [prism themes](https://github.com/PrismJS/prism-themes).

`components/social-icons` - to add other icons, simply copy an svg file from [Simple Icons](https://simpleicons.org/) and map them in `index.js`. Other icons use [heroicons](https://heroicons.com/).

`components/MDXComponents.js` - pass your own JSX code or React component by specifying it over here. You can then call them directly in the `.mdx` or `.md` file. By default, a custom link and image component is passed.

`layouts` - main templates used in pages.

`pages` - pages to route to. Read the [Next.js documentation](https://nextjs.org/docs) for more information.

`next.config.js` - configuration related to Next.js. You need to adapt the Content Security Policy if you want to load scripts, images etc. from other domains.

## Post

### Frontmatter

Frontmatter populates the metadata for a post. Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

See [PostFrontMatter](https://github.com/Gregliest/Blog/blob/main/types/PostFrontMatter.ts) for required and optional fields.

### Series

A post can be part of a series. Each post in a series should have the same PostSeries name, and incrementing numbers. The series will then populate the next/previous navigation on each post.

### Compose

Add a new post to the `data/blog` with the required frontmatter.

## Deploy

Vercel: Push to main will trigger a deploy on Vercel.

## License

### Photography

Please give proper attribution, and link back to the source page on this blog. Otherwise, you are free to use as you see fit. [CC](https://github.com/Gregliest/Blog/blob/main/CCLICENSE).

For non-watermarked images and prints, contact me at prints @ gregliest dot com

### Software

This repo: [MIT](https://github.com/Gregliest/Blog/blob/main/LICENSE)

Original (for the template): [MIT](https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/LICENSE) © [Timothy Lin](https://www.timrlx.com)
