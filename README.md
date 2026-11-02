# Dual-Purpose Experimental Design

Public project website: https://maojiangsu.github.io/dual-purpose-scientific-agents/

This repository publishes only the static webpage, its browser-local interaction and presentation assets. Manuscript PDFs/LaTeX, experimental-code bundles and private assay/response records are not included.

## Reading The Page

The full paper title and author line lead into Abstract, a compact method loop, Motivation, Problem Setup, Method, the concrete protein example, the selection interaction and measured experiments. Abstract keeps its narrow reading column; all other body sections share a consistent left edge.

The overview is titled The Adaptive Experimental Design Loop. Its central Our Method group contains value estimation and next-item selection. Candidate items, experimental verification and shared feedback provide the surrounding context, and a clear return arrow feeds new information into the next decision. Keep it concise and general: do not add protein variants, fixed measurement costs, run-level execution details or three rows of large panels. Agent updates remain batched.

Problem Setup defines both objectives, followed by the conditional continuation-policy Pareto problem and the separate predicted next-item candidate set. The actual weighted score selects one supported predicted candidate under positive weights; it does not enumerate the entire Pareto set. Uniform exploration may select outside that set.

The selection interaction uses constructed illustrative values. Experiment plots retain recorded values and their scientific scope. The website author line and BibTeX use Maojiang Su and Han Liu.

## Typography And Preview

Preserve the user's All-Atom Omni reference typography: Georgia/Times headings, system sans-serif body and 17px paragraphs. Ordinary interface text stays at least 16px on phones. Use responsive native HTML/CSS and vector arrows; do not shrink a wide bitmap to fit mobile. KaTeX supplies pre-rendered HTML/MathML and local mathematical fonts.

All assets are static, with no runtime LLM or font API. Preview with `python -m http.server 8000`; GitHub Pages publishes the root of main. The workflow is implemented in assets/workflow.css and assets/workflow.js.

Layout reference: https://jiale0402.github.io/all-atom-omni/.
