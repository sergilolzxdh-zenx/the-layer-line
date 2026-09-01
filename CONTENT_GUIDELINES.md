# Content Guidelines

Internal standard for anyone (human or AI-assisted) writing for The Layer Line. If a draft doesn't meet these, it doesn't get published — the site's only real moat against AI-generated competition is that this content is more trustworthy and more useful, not just present.

## Tone

- Plain, direct, mechanism-first. Explain *why* something happens before telling the reader what to do about it.
- No filler introductions ("In today's fast-paced world of 3D printing..."), no restating the title as the first sentence, no summary paragraph that just repeats the article back to the reader at the end.
- Specific over clever. "PETG strings more than PLA because of its molten viscosity" beats any pun about "stringy situations."
- It's fine to say "this is the most common cause" or "this matters more than people expect" — confident, specific claims — but never invent a statistic, a percentage, or a study to sound more authoritative.

## Originality standard

Every article needs at least one genuine differentiator over what's already ranking — not a rewrite with different words. Acceptable differentiators used on this site so far:

- An ordered, prioritized troubleshooting sequence (not just a list of possible causes)
- A comparison table with specific, checkable values
- An embedded interactive tool
- Explaining the underlying physical/mechanical cause, not just the fix
- Explicit "common mistakes" sections that name a wrong-but-common approach and explain why it's wrong

Not acceptable: reordering an existing article's headings, paraphrasing a manufacturer's knowledge base article, or padding word count with restated information.

## Research and sourcing standard

- Default to explaining mechanisms from well-established, community-consensus engineering knowledge (thermoplastic behavior, extrusion mechanics, motion control) rather than citing a single blog post as the source of a general fact.
- When a claim is specific to one source (a named guide, a manufacturer's documented range), link to that source directly and verify the URL actually resolves to that content before publishing — a plausible-looking URL that hasn't been checked doesn't go in an article.
- Never fabricate: statistics, study results, personal test results, "we tested this on our X printer" framing, screenshots, or user testimonials. If we haven't tested something, the article says "consult your filament's datasheet" or "typical range" instead of presenting an unverified specific number as measured fact.
- Prefer official manufacturer documentation, well-established community references (RepRap wiki, long-standing manufacturer knowledge bases), and physical/materials-science fundamentals over random forum posts or SEO-optimized competitor content.

## AI usage

AI tools may be used for research assistance, outlining, drafting, and copyediting. Every draft is checked against this document and the sourcing standard above before publishing — an unedited AI draft is not a finished article. See `EDITORIAL_POLICY.md` for the published version of this commitment.

## Structure standard

- Direct, useful information within the first 1–2 paragraphs — no throat-clearing before the actual answer.
- Headings should be scannable on their own (a reader skimming just the H2s should understand the article's structure).
- Use a table when comparing 2+ things across the same set of attributes; use an ordered list when sequence matters; use an unordered list when it doesn't.
- Internal links should be earned, not stuffed: link to another guide only where a reader genuinely benefits from that detour, and every pillar/article should have at least 2–3 purposeful internal links, in both directions where it makes sense (see the topical graph in `SEO_AUDIT.md`).
- No arbitrary word count targets. A troubleshooting article that fully answers the question in 900 words is done at 900 words.

## AdSense-relevant rules

- No content that could be read as instructions for anything dangerous (electrical, chemical, or fire-risk shortcuts) — 3D printers involve heat and moving parts, and safety-relevant claims should match manufacturer guidance, not personal shortcuts.
- No deceptive formatting — no fake "download" buttons, no content designed to induce accidental ad clicks, no claims designed to manipulate rather than inform.
- No duplicated or lightly-spun content, on this site or copied from elsewhere.

## Updating existing content

- Add or bump the `updatedDate` frontmatter field only when the change is substantive (a corrected fact, a materially expanded section) — not for typo fixes.
- If a correction changes a recommendation the article previously made, note what changed rather than silently overwriting it, especially for anything a reader might have already acted on.
