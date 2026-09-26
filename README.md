# Mill City Web Studio

Development site for **Mill City Web Studio**, an independent Minneapolis web studio focused on thoughtful, practical websites for small businesses.

## Current status

- Framework: Astro
- Development hosting: GitHub Pages
- Planned production hosting: Cloudflare
- Working production domain: `millcitywebstudio.com` (not yet purchased/connected)
- Dev site is intentionally `noindex` until production launch

## Run locally

```bash
git clone https://github.com/bstaerkel/millcity-web-studio.git
cd millcity-web-studio
npm install
npm run dev
```

Open the local address Astro prints, normally:

```text
http://localhost:4321/
```

## Run it again later

```bash
cd millcity-web-studio
git pull
npm run dev
```

## Build test

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The project includes `.github/workflows/deploy.yml`. Every push to `main` builds the Astro site and publishes `dist` to GitHub Pages.

Expected dev URL:

`https://bstaerkel.github.io/millcity-web-studio/`

Enable **Settings → Pages → Source → GitHub Actions** in the repository.

## Content structure

- `src/pages/index.astro` — Home
- `src/pages/work.astro` — Portfolio / case studies
- `src/pages/services.astro` — Services and process
- `src/pages/about.astro` — Founder story and approach
- `src/pages/contact.astro` — Project inquiry
- `src/layouts/BaseLayout.astro` — shared header, navigation, metadata, and footer
- `src/styles/global.css` — visual system and responsive styling
- `src/lib/paths.ts` — GitHub Pages-aware internal URLs

## Documentation

- `docs/BRAND.md` — positioning, Minneapolis story, voice, and visual direction
- `docs/INFRASTRUCTURE.md` — GitHub Pages dev hosting and planned Cloudflare production path
- `docs/SEO.md` — dev noindex strategy and production SEO checklist

## Before production launch

- Purchase/connect the final domain.
- Move or deploy production hosting to Cloudflare.
- Update `astro.config.mjs` for the production domain and remove the GitHub Pages base path.
- Replace the temporary contact form email/endpoint.
- Remove `noindex, nofollow` from the production layout.
- Add production canonical/social metadata, sitemap, robots.txt, Search Console, and analytics if desired.
- Add a final logo/brand asset if the text/monogram treatment changes.
