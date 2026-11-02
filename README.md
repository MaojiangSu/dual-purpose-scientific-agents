# Dual-Purpose Experimental Design

Public project website: https://maojiangsu.github.io/dual-purpose-scientific-agents/

This repository contains only the webpage presentation, its interaction code, explanatory figures and mathematical fonts. Manuscript PDFs, LaTeX, experimental-code bundles and private assay/response records are not published here.

## Reading The Page

1. The visible abstract follows the current paper, followed by the motivation for sharing experimental feedback between benchmarking and learning.
2. A responsive overview figure follows the abstract: item pool and cached multi-runs, two value estimates, budget-aware selection, verification, two uses of feedback and a return loop. Its HTML text stays at least 16px; SVG connectors follow the live layout instead of shrinking a bitmap.
3. Problem Setup defines scientific items, a fixed reference panel with independent multi-runs, the improving target, two objectives and an explicit benchmarking sample value under one budget.
4. Adaptive Item Selection explains warm-up, both value estimators, cost-aware acquisition, feedback reuse and validation-gated batch memory updates.
5. A concrete GB1 protein-variant pair and a constructed selection interaction illustrate the setup and algorithm. The illustrative values are distinguished from measured results.
6. Recorded memory gains, budget curves and a six-policy trade-off plot show completed experiments. Next steps and a theory disclosure follow.

The webpage author line and its BibTeX use Maojiang Su and Han Liu. Preserve the paper-first narrative order; the task example should follow Problem Setup and Method.

## Typography And Reproduction

Typography follows the user's All-Atom Omni reference exactly: Georgia/Times headings (weight500), system sans-serif body, and17px paragraphs at1.62 line-height. Do not substitute Inter or another text family without a user request. KaTeX0.19.1 pre-rendered HTML/MathML supplies equations; its local fonts and MIT license are bundled.

All assets are static; no font CDN, LLM endpoint or other runtime API is called. Run `python -m http.server 8000` to preview. GitHub Pages publishes the root of `main`. Each acquired task costs two variant measurements; memory first fits at16 items and then proposes updates every8. Preserve the distinction between an agent choosing A/B and the allocator choosing a whole task.

Layout and typography reference: https://jiale0402.github.io/all-atom-omni/.

Interface text should remain at least16CSSpx, including phone layouts. Remove redundant counters and repeated status labels instead of shrinking them. SVG chart labels must also be checked at their rendered screen size; retain clear legends, measured values and essential scientific scope.

The overview is code-native HTML/CSS with vector arrows (assets/workflow.css and assets/workflow.js). It remains after the abstract and before Motivation. Keep outcomes and batch-level gains distinct, show within-agent multi-runs, and label memory fitting as a batch update.

The hero uses the exact full manuscript title as one h1, with responsive natural wrapping. Keep the author line and remove any redundant subtitle.
