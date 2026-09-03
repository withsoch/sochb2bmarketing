# Image assets

Drop real photos in here. Every image slot on the site is **optional** — with these
folders empty the site renders exactly as it did before photos existed (flat CSS
mockup blocks and initials discs). Nothing breaks, nothing shows a broken-image icon.

## Folders

| Folder    | What goes here                                  | Shape                  |
| --------- | ----------------------------------------------- | ---------------------- |
| `team/`   | Headshots / candids of the Soch team             | Square, ~800×800       |
| `food/`   | Food & venue photography used in the mockups     | Landscape ~1200×900, or square for the grid |
| `venues/` | Photos of a specific named client venue          | Portrait, ~900×1200    |

## Rules

- **Resize before committing.** Target ≤300 KB per file. These are committed to git,
  so a folder of 4 MB camera originals bloats every clone forever.
- **`venues/` and testimonial avatars are owned photos only.** Those slots are
  captioned with a named venue or a named person, so the image is a factual claim.
  Stock is fine everywhere else (mockup fills, generic food, backgrounds).
- Filenames: lowercase, hyphenated, descriptive — `mixed-grill-platter.jpg`,
  `mahad.jpg`. No spaces.
- Prefer `.jpg` for photos. Next.js re-encodes to AVIF/WebP on the fly, so there is
  no need to pre-convert.

## Wiring a new photo up

- **Team members** — add an entry to `TEAM` in `lib/content.ts` with
  `photo: "/images/team/<file>.jpg"`.
- **Food in the service mockups** — add the path to the `FOOD` manifest at the top of
  `components/CategoryVisual.tsx`.
- **Testimonial avatars** — set `photo` on the entry in `TESTIMONIALS` (`lib/content.ts`).
- **Case-study venues** — set `image` on the entry in `CASE_STUDIES` (`lib/content.ts`).

Paths are plain strings rooted at `public/`, so `public/images/food/wrap.jpg` is
referenced as `/images/food/wrap.jpg`.
