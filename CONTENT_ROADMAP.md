# Content Roadmap

## Publishing philosophy

Research → build → publish → index → measure → learn → improve → scale. This launch ships 26 pages (3 pillars, 11 supporting articles, 2 tools, plus about/legal/glossary) — not a keyword list turned into 200 thin pages. The next wave is chosen from real Search Console data, not from this roadmap alone.

**Do not publish the "Next candidates" list below on a fixed schedule.** It's a prioritized backlog, evaluated against actual performance once the current set has had time to index (see "Review checkpoint").

## Published at launch

| Page | Type | Cluster | Status |
|---|---|---|---|
| `/print-quality/` | Pillar | Print Quality | Live |
| `/print-quality/stringing/` | Troubleshooting | Print Quality | Live |
| `/print-quality/warping/` | Troubleshooting | Print Quality | Live |
| `/print-quality/layer-lines/` | Troubleshooting | Print Quality | Live |
| `/print-quality/first-layer-adhesion/` | How-to | Print Quality | Live |
| `/print-quality/under-extrusion-vs-over-extrusion/` | Comparison | Print Quality | Live |
| `/calibration/` | Pillar | Calibration | Live |
| `/calibration/e-steps/` | How-to | Calibration | Live |
| `/calibration/flow-rate/` | How-to | Calibration | Live |
| `/calibration/retraction-tuning/` | How-to | Calibration | Live |
| `/calibration/bed-leveling/` | How-to | Calibration | Live |
| `/materials/` | Pillar | Materials | Live |
| `/materials/pla-vs-petg-vs-abs/` | Comparison | Materials | Live |
| `/materials/petg-guide/` | Guide | Materials | Live |
| `/tools/filament-cost-calculator/` | Tool | Cross-cluster | Live |
| `/tools/print-problem-diagnostic/` | Tool | Cross-cluster | Live |
| `/glossary/` | Reference | Cross-cluster | Live |

## Next candidates (not yet written — prioritized backlog)

Search-demand and difficulty estimates below are directional judgment calls (see `NICHE_RESEARCH.md` methodology note), not licensed keyword-tool data. Priority reflects estimated demand × how well this site could out-do current results, not demand alone.

| Candidate | Intent | Cluster | Priority | Content type | Est. difficulty | Notes |
|---|---|---|---|---|---|---|
| Nozzle clogs: how to clear and prevent them | Troubleshooting | Print Quality | HIGH | Troubleshooting | Medium | Natural 6th print-quality article; high real-world frequency |
| Elephant's foot (bulging first layers) | Troubleshooting | Print Quality | HIGH | Troubleshooting | Low-Medium | Distinct from warping/adhesion; currently redirected into first-layer-adhesion, deserves its own page once that page shows search demand in GSC |
| Temperature tower: how to read and use one | How-to | Calibration | MEDIUM | How-to + tool | Medium | Good candidate for a 3rd interactive tool (a temp tower "planner") once the two existing tools show engagement |
| ABS/ASA printing guide (parallel to PETG guide) | Guide | Materials | MEDIUM | Guide | Medium | Fills out the materials pillar to match PETG's depth |
| TPU / flexible filament guide | Guide | Materials | MEDIUM | Guide | Medium-High | Different extruder requirements make this genuinely distinct, not a rehash |
| Best layer height for a given part | How-to | Print Quality | LOW-MEDIUM | How-to | High (competitive, close to "what is X" territory) | Only worth it with a genuinely original angle (e.g. a layer-height/print-time trade-off calculator) |
| Slicer comparison (Cura vs. PrusaSlicer vs. Orca) | Comparison | Cross-cluster | DO NOT TARGET (yet) | Comparison | High | Requires actual hands-on use of each slicer to write honestly — see `CONTENT_GUIDELINES.md` on not fabricating testing; revisit if/when that testing happens |
| Printer buying guide / recommendations | Comparison | Cross-cluster | DO NOT TARGET | Comparison | High | Requires actual hardware testing and ongoing price tracking neither of which this site does yet; high risk of becoming exactly the "generic AI content" this project is explicitly trying to avoid |

## Review checkpoint

Before adding anything from "Next candidates," check in Google Search Console (see `DEPLOYMENT.md`):

1. **Indexing** — are the 17 content pages actually indexed? (Check Coverage report.)
2. **Impressions** — which pages/queries are getting impressions at all, even without clicks?
3. **CTR and position** — where are we ranking, and is the meta title/description actually earning clicks at that position?
4. **Query gaps** — what related queries show up in Search Console's Queries report that aren't covered by an existing page?

Target a minimum of 4–6 weeks of indexed data before drawing conclusions — FDM troubleshooting queries aren't seasonal, but initial crawl/index lag means early data is noisy. Use query gaps found this way to re-prioritize the table above rather than treating it as fixed.

## Explicitly out of scope for this site

- Resin/SLA/DLP printing (different failure modes, different chemistry — would dilute topical focus)
- Industrial/professional additive manufacturing
- Specific printer model reviews or "best printer" roundups (requires ongoing hands-on testing this site doesn't do — see `CONTENT_GUIDELINES.md`)
- Any YMYL-adjacent content (there isn't any in this niche, but flagging the boundary explicitly)
