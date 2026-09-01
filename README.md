# The Layer Line

Independent guides, calibration walkthroughs, and calculators for desktop FDM 3D printing — stringing, warping, layer lines, retraction, and the settings behind them. Built as an informational, AdSense-monetized publication: organic search → useful content → returning readers → ad revenue, not an affiliate funnel.

See [`NICHE_RESEARCH.md`](./NICHE_RESEARCH.md) for why this niche was chosen over 20+ alternatives, and [`CONTENT_GUIDELINES.md`](./CONTENT_GUIDELINES.md) / [`EDITORIAL_POLICY.md`](./EDITORIAL_POLICY.md) for how content is written and verified.

## Stack

- **[Astro](https://astro.build)** (static output) — content collections (MDX) for articles and pillar guides, plain `.astro` pages for tools and static pages.
- **No UI framework** — vanilla CSS (design tokens in `src/styles/tokens.css`) and vanilla `<script>` for the two interactive tools. No Tailwind, no React — kept minimal on purpose for performance and because the design system needed full control, not utility defaults.
- **`@astrojs/sitemap`** for `sitemap-index.xml`, **`@astrojs/mdx`** so articles can embed `<Callout>` and `<AdSlot>` components inline.
- Fonts are self-hosted via `@fontsource` (Archivo Variable, IBM Plex Sans, IBM Plex Mono) — no external font requests.

## Project structure

```
src/
  content.config.ts       # Content collection schemas (articles, pillars)
  content/
    articles/<category>/<slug>.mdx   # Supporting articles
    pillars/<category>.mdx           # The 3 pillar/hub guides
  components/             # Header, Footer, AdSlot, Callout, ArticleCard, TOC, etc.
  layouts/                # BaseLayout, ArticleLayout, PillarLayout
  lib/                    # site.ts (nav/site constants), categories.ts (category metadata)
  pages/
    index.astro                       # Homepage
    [category]/[slug].astro           # Article routes (dynamic)
    print-quality/ calibration/ materials/index.astro   # Pillar hub pages (static)
    tools/                            # Filament cost calculator, print problem diagnostic
    about.astro contact.astro editorial-policy.astro
    privacy-policy.astro terms.astro cookie-policy.astro
    glossary.astro 404.astro
```

Adding a new article: drop a new `.mdx` file in `src/content/articles/<category>/`, following the frontmatter shape in `src/content.config.ts`. No component changes needed — the category hub and homepage pick it up automatically via `getCollection`.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check-links` | Crawl `dist/` after a build and report any internal `href` that doesn't resolve to a real page |

## Documentation index

- [`DEPLOYMENT.md`](./DEPLOYMENT.md) — Cloudflare Pages, environment variables, Search Console, AdSense setup
- [`CONTENT_GUIDELINES.md`](./CONTENT_GUIDELINES.md) — tone, sourcing, AI-use, and originality standards for new content
- [`CONTENT_ROADMAP.md`](./CONTENT_ROADMAP.md) — what's published, what's next, and why
- [`SEO_AUDIT.md`](./SEO_AUDIT.md) — technical/on-page SEO status as of launch
- [`EDITORIAL_POLICY.md`](./EDITORIAL_POLICY.md) — the source-of-truth editorial policy (also published at `/editorial-policy/`)
- [`MONETIZATION.md`](./MONETIZATION.md) — how and when to turn on real AdSense units
- [`NICHE_RESEARCH.md`](./NICHE_RESEARCH.md) — the niche-selection research and scoring behind this site

## Status

Launch foundation: 3 pillar guides, 11 supporting articles, 2 interactive tools, full legal/about page set, SEO plumbing (sitemap, robots.txt, canonical URLs, OG/Twitter meta, JSON-LD). No content has been mass-generated — see `CONTENT_ROADMAP.md` for the plan to scale only after real Search Console data comes in.
