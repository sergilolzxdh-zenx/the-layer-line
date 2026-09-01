# Monetization

## Primary: Google AdSense

This is the site's primary planned revenue model. **No AdSense script, publisher ID, or ad code is present in this codebase.** That's deliberate — AdSense approval requires a live site with substantial original content first, and inserting real ad code before approval (or before there's enough content to review) risks a rejected application.

### Sequence to turn this on for real

1. Deploy the site to its real domain (see `DEPLOYMENT.md`) and let it accumulate some organic indexing — Google generally wants to see a real, navigable, policy-compliant site.
2. Confirm AdSense policy readiness against `SEO_AUDIT.md`'s "AdSense readiness" table (About, Contact, Privacy Policy, Terms, Editorial Policy, Cookie Policy, no thin content) — all present at launch.
3. Apply at [google.com/adsense](https://www.google.com/adsense).
4. Once approved, Google gives you a publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`). Set it as `PUBLIC_ADSENSE_CLIENT` in your deployment environment.
5. Update `src/components/AdSlot.astro` to render the real `<ins class="adsbygoogle">` unit (with a real ad slot ID per placement from your AdSense dashboard) when `import.meta.env.PUBLIC_ADSENSE_CLIENT` is set, falling back to the current placeholder otherwise. Add the AdSense loader script (`<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=...">`) to `BaseLayout.astro`, gated the same way the GA4 script already is.
6. Re-run the accessibility and layout-shift checks in `SEO_AUDIT.md` once real ads are live — ad dimensions from a live network can differ from the placeholder's reserved space.

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
