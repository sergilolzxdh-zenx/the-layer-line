# Monetization

## Primary: Google AdSense

This is the site's primary revenue model, run via **Google AdSense Auto ads** — Google's script analyzes each page and inserts ad units automatically, rather than the site hand-placing fixed slots.

### Where things stand

- ✅ Publisher ID connected (`PUBLIC_ADSENSE_CLIENT` = `ca-pub-4555323558143314`, set in Cloudflare's build environment variables and locally in `.env`, not committed)
- ✅ `ads.txt` live at the site root, declaring Google as an authorized seller
- ✅ Site ownership verified in AdSense, review requested
- ✅ Consent message configured for EEA/UK/Swiss visitors (3-option: Consentir / No consentir / Gestionar opciones — the compliant pattern, since GDPR requires rejecting to be as easy as accepting)
- ⏳ Waiting on AdSense's review decision

### Why Auto ads instead of manually placed slots

The site previously reserved three fixed positions (`in-article`, `article-end`, `sidebar`) via a placeholder `AdSlot` component. That component and every placeholder reference has been **removed** — Auto ads doesn't target manual slots, so keeping empty placeholder boxes next to independently-injected real ads would have been confusing and pointless. Auto ads decides placement itself once enabled in the AdSense dashboard.

### Enabling it (Google dashboard, not code)

Once AdSense approves the site:

1. AdSense dashboard → **Anuncios** → **Anuncios automáticos** (Auto ads) → toggle on for `thelayerline.site`.
2. Go into the format settings and **disable the more intrusive formats** — interstitial/vignette (full-page ads between navigations) and overlay/anchor ads — to stay consistent with the site's own "readability first" principle below. Leave in-content and multiplex ad formats on.
3. No further code changes needed — the connection script already live in `BaseLayout.astro` is everything Auto ads requires.

If a more controlled, manually-placed approach is ever wanted instead, that would mean re-adding fixed slot components and creating individual ad units in AdSense to get `data-ad-slot` IDs — a bigger change than toggling Auto ads, and not the current plan.

## Secondary options (not yet implemented)

Per the brief, these may be added later **without letting them distort editorial recommendations**:

- **Affiliate links** — only if a specific product genuinely matches what a guide already recommends (e.g. a specific brand of PEI sheet mentioned in the adhesion guide) and only disclosed clearly in-line. Not yet added anywhere in current content.
- **Newsletter** — `Newsletter.astro` exists as UI only; the signup form doesn't connect to a real mailing list provider yet (see the component's inline note). Wire it to a real provider (e.g. a transactional email API) before promoting it, and update the privacy policy's data retention section to match whichever provider is chosen.
- **Downloadable resources** — e.g. a printable calibration checklist. None built yet; would be a genuinely low-effort, high-value addition once the current content set is validated.
- **Proprietary tools** — the two current tools (filament cost calculator, print problem diagnostic) are the extent of this today; `CONTENT_ROADMAP.md` lists a temperature tower planner as the next tool candidate.

## What this site will not do

- Enable Auto ads' interstitial/vignette or overlay/anchor formats — those interrupt reading in ways the site's design deliberately avoids.
- Let affiliate revenue change which product or setting a guide recommends.
- Run sponsored content without clear disclosure, if that's ever added.

## Trade-off, stated plainly

Auto ads means giving up exact control over where ads land on the page, in exchange for zero ongoing placement maintenance. If ad placement ever looks genuinely disruptive once live (e.g. an ad breaking up a short paragraph awkwardly), the fix is tightening the format settings in the AdSense dashboard first, not necessarily reverting to manual slots.
