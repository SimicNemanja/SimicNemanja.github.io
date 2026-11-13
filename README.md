# Nemanja Simić — Portfolio

Personal portfolio of **Nemanja Simić**, Frontend Developer & Web Designer based in Belgrade, Serbia.

**Live:** https://simicnemanja.github.io

## About the code

The site is hand-written in plain HTML, CSS and a little vanilla JavaScript. It has no frameworks, no dependencies and no build step, and it deploys to GitHub Pages as is.

- **Semantic HTML5:** landmarks, a logical heading order, a skip link and descriptive alt text
- **Modern CSS:** custom properties (design tokens), Grid, Flexbox, fluid type with `clamp()`, `color-mix()`, and an automatic dark theme via `prefers-color-scheme`
- **Mobile-first and responsive:** tested at phone, tablet and desktop widths
- **Accessible:** keyboard navigation, visible `:focus-visible` states, AA colour contrast, reduced-motion support
- **Progressive enhancement:** JavaScript only adds the mobile menu toggle, scroll reveals and copy-to-clipboard. Everything works without it.
- **Performance:** WebP images with explicit dimensions and `loading="lazy"`
- **SEO:** unique titles and descriptions, canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt`

The visual concept borrows from design hand-off specs: a faint grid, measurement marks and an "inspector" outline on hover. It is a nod to pixel-precise work.

## Structure

```
├── index.html                 Home: hero, work, experience, about, skills, contact
├── work/
│   ├── vog-elektro.html       Case study: VOG Elektro website
│   └── venue-booking-ui.html  Case study: venue booking platform UI
├── css/styles.css             All styles, organised by section (see table of contents)
├── js/main.js                 Small progressive enhancements
├── images/                    Screenshots (WebP) and Open Graph image
├── assets/                    Downloadable CV
├── 404.html                   Custom not-found page
├── favicon.svg
├── robots.txt / sitemap.xml
└── .nojekyll                  Tells GitHub Pages to serve files as is
```

## Running locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Contact

nemanja.simic00@gmail.com · [github.com/SimicNemanja](https://github.com/SimicNemanja)
