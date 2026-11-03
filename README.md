# Dual-Purpose Experimental Design

Public project website: https://maojiangsu.github.io/dual-purpose-scientific-agents/

This repository publishes only the static webpage, its browser-local interaction and presentation assets. Manuscript PDFs/LaTeX, experimental-code bundles and private assay/response records are not included.

## Reading The Page

The full paper title and author line lead into Abstract, a compact method loop, Motivation, Problem Setup, Method, the concrete protein example, the selection interaction and measured experiments. Abstract keeps its narrow reading column; all other body sections share a consistent left edge.

The overview is titled The Adaptive Experimental Design Loop. Its central Our Method group contains value estimation and next-item selection. Candidate items, experimental verification and shared feedback provide the surrounding context, and a clear return arrow feeds new information into the next decision. Keep it concise and general: do not add protein variants, fixed measurement costs, run-level execution details or three rows of large panels. Agent updates remain batched.

Problem Setup defines scientific items, adaptive decision rounds, both objectives and the conditional continuation-policy Pareto problem. The Method section and constructed interaction explain selection and shared feedback. Detailed one-step Pareto candidates and the explicit benchmarking sample-value definition remain in the manuscript.

The selection interaction uses constructed illustrative values. Experiment plots retain recorded values and their scientific scope. The website author line and BibTeX use Maojiang Su and Han Liu.

## Typography And Preview

Preserve the user's All-Atom Omni reference typography: Georgia/Times headings, system sans-serif body and 17px paragraphs. Ordinary interface text stays at least 16px on phones. Use responsive native HTML/CSS and vector arrows; do not shrink a wide bitmap to fit mobile. KaTeX supplies pre-rendered HTML/MathML and local mathematical fonts.

All assets are static, with no runtime LLM or font API. Preview with `python -m http.server 8000`; GitHub Pages publishes the root of main. The workflow is implemented in assets/workflow.css and assets/workflow.js.

Layout reference: https://jiale0402.github.io/all-atom-omni/.

Experiment themes are the actual section headings: use uppercase EXPERIMENT labels at a readable heading size and omit a second rhetorical question. Other navigation/section titles should be concise descriptive nouns. Preserve the sentence-case question inside the concrete task example.

Experiment 2 includes a configuration table and candidate-pool coverage bar. Keep 384 item-level decision rounds, 256 post-warm-up decisions, 32 post-warm-up memory batches and 47 total proposal records distinct. The 768 retrospective measurement charges apply per policy/seed to acquisition only. Pool percentages use 512 as denominator, and unacquired items are unqueried by the selection policy even though the independent evaluator can audit the full pool.

## Construction-Bank Benchmark Results

Experiment 2 now leads with construction-bank SNR by post-warm-up decision round, two final reference-score tables and SNR versus held-out target learning gain. The completed matched panel is K=2 (Terra and Sol); the Qwen follow-up caches use a different split and cannot be merged into this experiment. Tables can switch allocation seeds 101, 211 and 307 while keeping the two compared policies on the same seed.

Table uncertainty is sample SD across three aggregate runs on one fixed benchmark. Curve bands and policy error bars are sample SD across three allocation seeds, not confidence intervals or run SD. Existing construction runs informed acquisition and are intentionally reused to calculate the defined construction objective; no additional runs are required for that descriptive objective. Future-run robustness is a separate question.

At the 384-item endpoint, Joint has 3.88 times Random's construction SNR and 0.85 percentage points higher held-out target accuracy. Static Joint has higher means on both objectives. With epsilon=0.02, the denominator is floor-dominated and higher SNR mainly reflects greater mean-score separation. Reference profiles are on different selected benchmarks; they are not intrinsic ability improvements. The learning curve is a main result; independent-run MSE and the full policy comparison remain in collapsed diagnostics.

All displayed results are aggregate cached analysis. No model inference, new selection or training is performed in the browser or added by this update. Paper revision v015 and webpage revision v014 retain private versioned records separately.

Formula presentation uses pre-rendered KaTeX HTML/MathML, including the available-information subscript. Conditional Pareto optimization places the operator beside its objective vector and the budget constraint on the second line. Numbered experiment titles use the same black Georgia/Times serif family as the hero, at 28px (25px on phones). Internal headings stay below them, at most 20px (19px on phones).

## Result Blocks And Shared Setup

Each numbered block carries one primary result: harness improvement, benchmark SNR over rounds, the paired final reference tables, held-out learning accuracy over budget, and the two-objective trade-off. Experiments 2-5 reuse the same equal-budget campaigns; they are result views, not new independent experiments. The shared overview keeps K=2, the 512-item pool, 128 warm-up items, 384-item endpoint and three allocation seeds visible. Full configuration and accounting are available in its expandable panel.

Keep plot titles below the numbered experiment title and avoid repeated internal section titles. The independent-run audit plot and full strategies table live in additional diagnostics outside the numbered blocks.

The constructed selection demo has four candidate items. Item 4 has predicted values (0.30, 0.40), strictly below Item 2 at (0.58, 0.68). Its dashed card displays a computed Dominated badge and the dominating item. The weighted selector is unchanged; all weights from 0 to 1 prefer Item 2 over Item 4. Item 4 is a value-only point with no invented fitness or model responses.

Harness Improvement is a separate frozen-snapshot study in the same GB1 setting: Validation selected the 256-pair memory and threshold 0.80 from 64/256/1,024-pair snapshots, with 1,024 training pairs acquired for the full search. Final evaluation uses 256 held-out pairs and two fresh runs per pair. Experiments 2-5 use a fresh split excluding all variants in this study and learn memory separately within each acquisition campaign; the first figure is not a checkpoint from their adaptive trajectories.

The setup table uses Validation (96 pairs) and Held-Out (256 pairs). Validation evaluates memory candidates and supplies learning feedback. Held-Out reports generalization at prespecified budget checkpoints and is excluded from update and acquisition decisions. Prose uses validation set and held-out set.

Experiment 2 leads with the observed budget-dependent advantage over Random: the largest absolute mean-SNR gap is around 160 verified items, and the mean-SNR ratios are 7.81 at 256 items and 3.88 at 384. The gap narrows overall with local fluctuations. The plot ends at 384/512 items. Identical construction SNR at full coverage follows from sharing the fixed item pool, reference-run bank and score definition; it is not a measured 512-item endpoint or a claim about learning-path equality.

Experiments 2 and 3 share the title family Benchmark Discrimination. Their view labels are Acquisition Process and Final Results, respectively: one reports the SNR trajectory and the other the final fixed-benchmark reference-agent comparison. Their underlying campaigns and data remain the same.

Experiment 5 displays four main strategies: Random, Adaptive Joint, Benchmark-Only and Learning-Only. Static Joint and Joint Without Learning Bonus are omitted from this main panel and its legend, while their complete results remain in Additional Diagnostics. The panel explicitly identifies the four-strategy subset, retains all remaining point/error-bar coordinates and links to the full comparison.

Experiment 4 is Learning Performance: Acquisition Process, showing Adaptive Joint and Random at the three measured 128/256/384-item checkpoints. Static Joint is removed from this main curve, its legend and its plotted-values table; full six-policy endpoint results remain in diagnostics. The two-policy point values, connecting lines and tooltips are preserved exactly. Dual-Purpose Trade-off is Experiment 5. Experiments 2-5 are four result views of the same equal-budget campaigns; the learning chart reports held-out performance rather than learning-value predictor accuracy.
