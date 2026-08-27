# potbound

Container gardening site — Next.js 15.3.6, Pages Router. Every container size cited to a real root/growth mechanism, not a rounded-off average.

## Run locally
```
npm install
npm run dev
```

## Deploy
Push to GitHub, import into Vercel. No env vars, no database.

## Structure (flat, matches your existing project pattern)
- `Header.js`, `Footer.js`, `Logo.js`, `ContainerTool.js` — shared components at root
- `data.js` — crop list, powers homepage + sitemap
- `pages/index.js` — homepage
- `pages/tomatoes-in-containers.js`, `pages/peppers-in-containers.js`, `pages/cucumbers-in-containers.js`, `pages/lettuce-and-greens-in-containers.js`, `pages/herbs-in-containers.js` — the 5 launch pages
- `pages/sitemap.xml.js` — getServerSideProps sitemap
- `styles/globals.css` — full design system (CSS variables at top)

## STILL NEEDED before this is fully live
1. **Logo image assets** — `Logo.js` is a coded re-creation of the approved pot+roots mark, but you'll still want to export real PNG/ICO files from your approved GPT image for:
   - `public/favicon.ico`
   - `public/logo-192.png`, `public/logo-512.png` (app icons / PWA)
   - `public/og-image.png` (social share preview — 1200x630 recommended)
   Then wire `favicon.ico` into `pages/_document.js` (already linked) and add an OG meta tag using `og-image.png` once it exists.
2. **The actual downloadable PDF** — every crop page links to `/downloads/container-size-cheat-sheet.pdf`, but that file doesn't exist yet. Drop the real PDF into `public/downloads/` once it's built.
3. Update `SITE_URL` in `pages/sitemap.xml.js` once you're off the Vercel subdomain and onto a real domain.

## Adding a 6th crop later
Duplicate one of the existing crop pages, write new content following the same pattern (open with the contradiction between sources, name the real mechanism, interactive tool, cited table, 7-question FAQ). Add it to `crops` in `data.js` — the homepage and sitemap pick it up automatically.
