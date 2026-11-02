# Dual-Purpose Experimental Design

Public project website: https://maojiangsu.github.io/dual-purpose-scientific-agents/

This repository contains only the webpage presentation, its interaction code, explanatory figures and mathematical fonts. Manuscript PDFs, LaTeX, experimental-code bundles and private assay/response records are not published here.

## Reading The Page

1. A concrete GB1 protein-variant pair explains one task and agent multi-runs.
2. A constructed selection example lets readers change the objective preference, verify one pair, and see the same feedback score all cached answers and add learning evidence. It is explicitly separated from experimental results.
3. Recorded memory gains, budget curves and a six-policy trade-off plot show completed experiments.
4. Next steps describe diagnostic questions. Equations, theory and the full abstract are in a disclosure below the examples.

## Typography And Reproduction

Typography follows the user's All-Atom Omni reference exactly: Georgia/Times headings (weight500), system sans-serif body, and17px paragraphs at1.62 line-height. Do not substitute Inter or another text family without a user request. KaTeX0.19.1 pre-rendered HTML/MathML supplies equations; its local fonts and MIT license are bundled.

All assets are static; no font CDN, LLM endpoint or other runtime API is called. Run `python -m http.server 8000` to preview. GitHub Pages publishes the root of `main`. Each acquired task costs two variant measurements; memory first fits at16 items and then proposes updates every8. Preserve the distinction between an agent choosing A/B and the allocator choosing a whole task.

Layout and typography reference: https://jiale0402.github.io/all-atom-omni/.

Interface text should remain at least16CSSpx, including phone layouts. Remove redundant counters and repeated status labels instead of shrinking them. SVG chart labels must also be checked at their rendered screen size; retain clear legends, measured values and essential scientific scope.
