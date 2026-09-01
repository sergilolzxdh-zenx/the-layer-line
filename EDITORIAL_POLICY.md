# Editorial Policy

This is the source-of-truth version of the policy also published at [`/editorial-policy/`](./src/pages/editorial-policy.astro) on the live site. Keep both in sync when either changes.

## What this site covers

Desktop FDM (fused deposition modeling) 3D printing: print quality troubleshooting, calibration, and material behavior. Not resin/SLA/DLP printing, not industrial additive manufacturing, not printer reviews.

## Research and sourcing

Guides are built primarily from well-established, widely documented engineering principles of FDM printing — thermoplastic behavior, extrusion mechanics, motion control — the kind of material covered consistently across printer/slicer manufacturer documentation, materials science references, and the broader 3D printing community's shared, tested knowledge.

Where a specific claim comes from a particular source rather than general consensus, that source is linked directly in the article. Every external link is checked to confirm it actually resolves to the claimed content before publishing — see `CONTENT_GUIDELINES.md`.

This site does not claim to have personally tested every printer, filament brand, or setting combination described in a guide. Where first-hand testing hasn't been done, articles explain the underlying mechanism and general ranges rather than presenting an untested specific number as verified fact.

## AI usage

AI tools are used internally for research assistance, outlining, drafting, and editing. Every published article is reviewed for technical accuracy before publication against `CONTENT_GUIDELINES.md`. AI is not used to fabricate test results, personal experience, statistics, or sources.

## Authorship

No invented author names, credentials, or biographies. Content represents the editorial position of The Layer Line as a publication, which is an accurate description of how it's produced — not a claimed individual expert.

## Updates and corrections

Articles show a `publishDate` and, where substantively revised, an `updatedDate` (see the `articles`/`pillars` schema in `src/content.config.ts`). Corrections reported via `/contact/` are reviewed and, where warranted, the article is updated with a note of what changed.

## Monetization and editorial independence

Monetized primarily through Google AdSense (see `MONETIZATION.md`). Advertising has no influence over topic selection or recommendations. Any future affiliate links will only point to products genuinely relevant to the guide they appear in and won't change that guide's recommendations.
