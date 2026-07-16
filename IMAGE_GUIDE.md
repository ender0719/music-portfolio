# Image replacement guide

All image references and alt text are managed in `src/data/portfolio.ts`.

## Recommended files

| File | Suggested dimensions | Use |
| --- | ---: | --- |
| `hero.webp` | 1600 × 1100 px | Main hero image; keep the subject away from the left-side headline |
| `about.webp` | 900 × 1100 px | Vertical portrait or guitar detail |
| `community-1.webp` | 1000 × 1200 px | Main community image |
| `community-2.webp` | 900 × 650 px | Supporting landscape image |
| `community-3.webp` | 900 × 650 px | Supporting landscape image |

## Export settings

- Export as WebP at roughly 75–82% quality.
- Keep the hero under 300 KB and other images under 200 KB where practical.
- Do not upscale a small source image.
- Use descriptive alt text that communicates the image’s purpose. Use an empty alt string only when an image is purely decorative.

To use different filenames, update the matching `src` values in `src/data/portfolio.ts`. Paths should begin with `/images/`.
