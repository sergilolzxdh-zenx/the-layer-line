# Deployment

## Framework and build

This is an **Astro** project with static output. Verified locally:

```bash
npm install
npm run build     # outputs to ./dist
```

Build succeeds with 0 errors and produces static HTML for every route (26 pages at last check). `npm run preview` serves the built `dist/` output locally for a final check before pushing.

## Cloudflare Pages

1. Push this repository to GitHub (see below).
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, select the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (unless you move the project into a subfolder)
4. Environment variables (Cloudflare Pages → Settings → Environment variables) — see the table below. All are optional; the site works with none of them set.
5. Deploy. Cloudflare will build on every push to the connected branch.

### Environment variables

| Variable | Purpose | Required? |
| --- | --- | --- |
| `PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`). When unset, no GA script loads. | No |
| `PUBLIC_ADSENSE_CLIENT` | AdSense publisher ID (`ca-pub-4555323558143314`). Loads the AdSense connection script site-wide when set. **Must be added in Cloudflare's environment variables to take effect on the live site** — see `MONETIZATION.md`. | No (site works without it, but AdSense review needs it live) |

Copy `.env.example` to `.env` for local testing; never commit `.env`.

### Custom domain

`astro.config.mjs` sets `site: 'https://thelayerline.com'`, which feeds the sitemap and canonical URLs. **If you deploy under a different domain, update that value before going live** — canonical tags and the sitemap will otherwise point at the wrong host. In Cloudflare Pages: **Custom domains → Set up a custom domain**, then update DNS as instructed there.

## GitHub

```bash
git init
git add .
git commit -m "Initial commit: The Layer Line launch foundation"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

`.gitignore` already excludes `node_modules/`, `dist/`, `.astro/`, and `.env*`. Double-check `git status` before your first push — never commit `.env` or real credentials.

## Google Search Console

1. Deploy the site first (Search Console needs a live URL to verify).
2. At [search.google.com/search-console](https://search.google.com/search-console), add a property for `https://thelayerline.com` (Domain property, if you can set the DNS TXT record, is more robust than URL-prefix).
3. Submit the sitemap: **Sitemaps → Add a new sitemap** → `sitemap-index.xml` (generated automatically by `@astrojs/sitemap` at build time, listing `sitemap-0.xml`).
4. `robots.txt` (in `public/robots.txt`) already references the sitemap and allows all crawling.
5. Use **URL Inspection → Request indexing** for the homepage and the 3 pillar pages to speed up initial discovery; the rest will be found via internal links and the sitemap.

## Google Analytics

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com), get the measurement ID (`G-XXXXXXXXXX`).
2. Set `PUBLIC_GA_ID` in Cloudflare Pages' environment variables and redeploy. `BaseLayout.astro` loads `gtag.js` only when this variable is present.

## Google AdSense

The AdSense connection script is already wired in `BaseLayout.astro`, gated on `PUBLIC_ADSENSE_CLIENT` (publisher ID `ca-pub-4555323558143314`). **To activate it on the live site**, add `PUBLIC_ADSENSE_CLIENT=ca-pub-4555323558143314` to the Cloudflare project's environment variables and redeploy — it's already set locally in `.env` (not committed), but that has no effect on the deployed build. See `MONETIZATION.md` for what happens next (review, then Auto ads or manual ad units).

## Post-deploy checklist

- [ ] `site` in `astro.config.mjs` matches the real domain
- [ ] Custom domain DNS configured and SSL active
- [ ] `PUBLIC_GA_ID` set (optional, once you have a GA4 property)
- [ ] `PUBLIC_ADSENSE_CLIENT` set in Cloudflare's environment variables (not just local `.env`)
- [ ] Sitemap submitted in Search Console
- [ ] Homepage + pillar pages requested for indexing
- [ ] `mailto:` addresses in About/Contact/legal pages point to inboxes you actually control
