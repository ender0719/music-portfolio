# Kai — Music Portfolio

A lightweight, responsive Astro portfolio for music consulting, community building, and Japan–Taiwan music exchange.

## Local development

```sh
npm install
npm run dev
```

Run `npm run build` to create the production site in `dist/`.

## Content

All page copy, navigation, links, and image paths live in `src/data/portfolio.ts`. Update that file rather than editing the Astro components.

The included email and social links are placeholders. Replace them with verified details before publishing.

## Images

Replace files in `public/images/` while keeping their names, or change the paths and alt text in `src/data/portfolio.ts`. See `IMAGE_GUIDE.md` for sizing and export guidance.

## GitHub Pages

The included workflow deploys pushes to `main`. In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**. The Astro base path is inferred from `GITHUB_REPOSITORY`, so both user pages and project pages are supported.
