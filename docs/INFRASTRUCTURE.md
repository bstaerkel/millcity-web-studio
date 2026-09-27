# Infrastructure & Deployment

This document describes the development hosting plan for **Mill City Web Studio** and the intended production path.

## Development hosting

The development site is designed to publish with **GitHub Pages** from the public repository:

`bstaerkel/millcity-web-studio`

Expected dev URL:

`https://bstaerkel.github.io/millcity-web-studio/`

The repository includes `.github/workflows/deploy.yml`. A push to `main` builds the Astro project and deploys the generated `dist` directory to GitHub Pages.

## GitHub Pages setup

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` or manually run the `Deploy to GitHub Pages` workflow from the Actions tab.
5. Confirm the deployment completes successfully.
6. Open the generated Pages URL.

The Astro config currently contains:

```js
site: 'https://bstaerkel.github.io',
base: '/millcity-web-studio'
```

Internal links use `import.meta.env.BASE_URL` so the site works correctly under the repository subpath.

## Development search behavior

The dev site intentionally includes:

```html
<meta name="robots" content="noindex, nofollow" />
```

This keeps the temporary GitHub Pages URL out of search results while branding, content, and the production domain are still being finalized.

## Planned production hosting

Version 1 is complete on GitHub Pages. The next infrastructure milestone is connecting the production domain and moving the public site to Cloudflare.

When the final domain is purchased, the intended production path is:

```text
GitHub repository
      |
      v
Cloudflare build / Worker
      |
      v
millcitywebstudio.com
```

At that point:

1. Add/connect `millcitywebstudio.com` in Cloudflare and confirm DNS ownership.
2. Deploy the site to its own Cloudflare Worker/static project.
3. Attach the production hostname and confirm HTTPS.
4. Update `astro.config.mjs` so `site` uses the production domain.
5. Remove the GitHub Pages `base` path.
6. Remove the development `noindex` directive.
7. Add canonical URLs, sitemap, robots.txt, analytics, and Search Console verification.
8. Keep GitHub Pages only if a separate dev/preview environment is still useful.

Before changing production routing, verify that the Mill City hostname is isolated from the existing MLAesthetics/client routing so one wildcard Worker route cannot capture multiple unrelated sites.

## Relationship to client hosting

Mill City Web Studio should remain separate from each client site:

```text
millcity-web-studio repo  -> Mill City hosting
client-a repo             -> Client A hosting
client-b repo             -> Client B hosting
```

The existing MLAesthetics project already documents a reusable Cloudflare for SaaS provider setup through `bstaerkel.com`. Before multiple production client domains use that shared provider infrastructure, the current single-client wildcard route must be replaced with hostname-aware routing so each hostname is dispatched to the correct Worker.

## Local development

```bash
npm install
npm run dev
```

Astro normally serves locally at:

`http://localhost:4321/`

## Production build test

```bash
npm run build
npm run preview
```
