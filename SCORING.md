# Scoring & Analytics Logic

Blogy implements deterministic analysis across the generated blog assets and product audit reports based on strict heuristic logic simulating what Google and growth experts look for.

## SEO Score (0-100)
- **Keyword Placement (30%)**: Checks if the primary keyword exists in H1, first paragraph, and at least 3 times in the body.
- **Structure (20%)**: Evaluates H2/H3 depth and presence of an FAQ section.
- **Internal Linking (25%)**: Scores based on contextual exact-match anchor text linking to relevant site areas.
- **Snippet Readiness (25%)**: Detects presence of formatted Summary Blocks (TL;DR) and Table structures.

## Naturalness & AI Detection Risk (0-100)
Calculated inversely based on:
1. Lexical variance (repetition of words like "delve", "crucial", "testament").
2. Sentence length variation.
3. Burstiness of phrasing.
The mock engine targets a <10% AI detection risk by optimizing these elements at generation time.

## Dashboard Audit Severity Matrix
Issues are categorized strictly by Impact vs Effort:
- **UX**: Friction affecting immediate activation.
- **SEO/Technical**: Architecural issues blocking indexability (e.g. missing canonicals on dynamic blog routes).
- **Growth**: Missing loop opportunities (viral sharing capabilities).
