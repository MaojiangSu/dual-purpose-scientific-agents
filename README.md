# Dual-Purpose Experimental Design

Public project webpage: https://maojiangsu.github.io/dual-purpose-scientific-agents/

This repository publishes the static aggregate webpage and its browser interactions. Manuscript PDFs/LaTeX, raw assay labels, response banks and experimental-code bundles are maintained separately and are not included here.

## Page Structure

The full paper title and Maojiang Su / Han Liu author line lead into Abstract, the compact Adaptive Experimental Design Loop, Motivation, Problem Setup, Method, the concrete protein example, the constructed selection interaction and Experimental Results. Problem Setup ends with the overall conditional Pareto problem. A separate Experimental Memory component ablation follows the three main results, then Citation. Additional diagnostic and theory/update-details panels are omitted from this presentation.

The overview remains concise and general. Its Our Method group contains value estimation and next-item selection; shared experimental feedback returns to the next decision. Preserve its compact geometry and clear loop, without adding run-level or fixed-cost details.

## Current Results

The three main panels are Benchmark Discrimination: Acquisition Process; Benchmark Discrimination: Final Results; and Learning Performance: Acquisition Process. They reuse the same equal-budget GB1 campaigns and focus on Adaptive Joint versus Random. The complete study recorded six policies and three allocation seeds. The matched reference panel has Terra and Sol, with Terra as the improving target.

The shared setup has 512 candidate pairs, 96 validation pairs and 256 held-out pairs. Each campaign acquires 128 warm-up plus 256 subsequent items, ending at 384. The 768 measurement charges count acquisition per policy/seed; other label and LLM accounts remain separate. Validation supplies update-gating and learning feedback; held-out feedback is excluded from updating and selection.

The SNR curve uses the fixed cached reference-run bank. Its observed advantage over Random peaks around 160 items and narrows overall at higher coverage. The graph stops at 384/512 items. Equality at full coverage follows from the same fixed pool and reference-run bank, rather than a measured 512-item result.

The learning curve has 33 evaluated checkpoints, every eight items from 128 to 384. All 18 original policy/seed/budget results and 26 accepted-state validation scores reproduce exactly under the original CPU versions. The figure connects unchanged measured points with straight visual guides; it adds no intermediate score estimates. Three allocation seeds share the cached target response bank. Intermediate trajectories can cross and decrease; the final means remain 70.12% for Adaptive Joint and 69.27% for Random.

The memory ablation is a separate frozen-snapshot GB1 study with no variants shared with the main study. Its complete search acquired 1,024 training pairs and selected the 256-pair snapshot with threshold 0.80 on validation. Frozen evaluation uses 256 held-out pairs with two fresh runs each. It compares with/without memory, while preserving the LLM weights and fallback prompt. Raw records and manuscript results are preserved separately from page presentation choices.

## Selection Illustration

The interaction is explicitly constructed. Four candidate items have predicted benchmarking/learning values. Item 4 at (0.30, 0.40) is strictly dominated by Item 2 at (0.58, 0.68); the card computes and displays this relation. Manual preference buttons select among the other candidates through the unchanged weighted score. The fourth point has no invented fitness or reference answers. This illustration performs no live model call or training.

## Typography And Preview

Use Georgia/Times headings and system sans-serif body text, following the user's All-Atom Omni reference (https://jiale0402.github.io/all-atom-omni/). Body paragraphs are 17px; ordinary interface text remains at least 16px on phones. Main experiment headings are 28px desktop / 25px phone in the hero's serif family; internal headings remain smaller. Except for the Abstract reading column, body sections share one left edge. Accessible equations use local KaTeX HTML/MathML, and figures use responsive vectors.

All assets are static. Preview with python -m http.server 8000; GitHub Pages publishes the root of main. No runtime LLM, remote font API, manuscript download or private-data service is required.
