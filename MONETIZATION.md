# Monetization

## Primary: Google AdSense

This is the site's primary revenue model. **The AdSense connection script is now live**, gated behind the `PUBLIC_ADSENSE_CLIENT` environment variable (set to `ca-pub-4555323558143314` — the site's real publisher ID) in `BaseLayout.astro`. This is the "connect your site" step: it lets Google crawl and verify the site for review. It does **not** by itself display any ads, and no individual ad unit exists in the code yet — `AdSlot.astro` still renders a labeled placeholder everywhere.

### Where things stand

- ✅ Publisher ID connected (`PUBLIC_ADSENSE_CLIENT` in `.env` locally — **not committed**, per `.gitignore`)
- ⏳ **Action needed:** add the same `PUBLIC_ADSENSE_CLIENT=ca-pub-4555323558143314` variable in the Cloudflare Pages/Workers project's environment variables (Settings → Environment variables), then redeploy — the local `.env` only affects local builds, not the deployed site.
- ⏳ Apply for/await AdSense review at [google.com/adsense](https://www.google.com/adsense) if not already submitted. Policy readiness is already covered — see `SEO_AUDIT.md`'s "AdSense readiness" table (About, Contact, Privacy Policy, Terms, Editorial Policy, Cookie Policy, no thin content).
- ⏳ Once approved, either turn on **Auto ads** in the AdSense dashboard (Google places ads automatically, no more code needed) or create manual ad units per placement and get their slot IDs.

### If you go the manual ad-unit route (recommended, matches the placement plan below)

For each `AdSlot` placement (`in-article`, `article-end`, `sidebar`), create a matching ad unit in AdSense to get a `data-ad-slot` ID, then update `src/components/AdSlot.astro` to render the real unit when both the client ID and that slot's ID are set:

```astro
<ins class="adsbygoogle"
  style="display:block"
  data-ad-client={adsenseClient}
  data-ad-slot={slotId}
  data-ad-format="auto"
  data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

Keep the placeholder as the fallback when a slot ID isn't set yet, so partially-configured placements never ship broken markup.

Re-run the accessibility and layout-shift checks in `SEO_AUDIT.md` once real ads are live — ad dimensions from a live network can differ from the placeholder's reserved space.

### Current placement plan (already reserved, not yet live)

Defined in `AdSlot.astro`, used across `ArticleLayout`, `PillarLayout`, `glossary.astro`, and the two tool pages:

| Slot | Where | Reasoning |
|---|---|---|
| `in-article` | Inline, embedded manually via `<AdSlot slot="in-article" />` in MDX content, placed after the intro and again after a major section | Never before the first sentence; never inside a heading or list |
| `article-end` | After the article body, before Related/Newsletter | Natural break point, reader has already gotten value |
| `sidebar` | Desktop two-column layout only, next to the table of contents | Doesn't compete with reading flow; collapses out of the way on mobile (`article__aside` becomes `order:-1`, stacked above content, not interleaved with paragraphs) |

Placement rules from the brief that are already enforced by the component/layout design: no ad before the first sentence, no ad shaped or labeled like navigation, no more than one ad type per major content break, ads never inside interactive tool UI.

## Secondary options (not yet implemented)

Per the brief, these may be added later **without letting them distort editorial recommendations**:

- **Affiliate links** — only if a specific product genuinely matches what a guide already recommends (e.g. a specific brand of PEI sheet mentioned in the adhesion guide) and only disclosed clearly in-line. Not yet added anywhere in current content.
- **Newsletter** — `Newsletter.astro` exists as UI only; the signup form doesn't connect to a real mailing list provider yet (see the component's inline note). Wire it to a real provider (e.g. a transactional email API) before promoting it, and update the privacy policy's data retention section to match whichever provider is chosen.
- **Downloadable resources** — e.g. a printable calibration checklist. None built yet; would be a genuinely low-effort, high-value addition once the current content set is validated.
- **Proprietary tools** — the two current tools (filament cost calculator, print problem diagnostic) are the extent of this today; `CONTENT_ROADMAP.md` lists a temperature tower planner as the next tool candidate.

## What this site will not do

- Insert placeholder or fake ad units that could be mistaken for real ads or clicked accidentally.
- Let affiliate revenue change which product or setting a guide recommends.
- Run sponsored content without clear disclosure, if that's ever added.
