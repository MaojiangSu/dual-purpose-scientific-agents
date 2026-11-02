# Dual-Purpose Experimental Design

Project website for **Dual-Purpose Experimental Design for Benchmarking and Improving Scientific Agents**.

Website: https://maojiangsu.github.io/dual-purpose-scientific-agents/

This repository contains only the static project presentation: HTML, CSS, JavaScript, webfonts and responsive explanatory figures. The preference interaction uses explicitly labeled illustrative values. Measured component/allocation results and scope are described separately on the page.

Preview locally with `python -m http.server 8000`. GitHub Pages serves the root of `main`; `.nojekyll` enables direct static serving. Push updates to `main` to redeploy.

Layout adapted from https://jiale0402.github.io/all-atom-omni/.

## Typography And Equations

Page text uses the locally bundled Inter 4.1 variable font (SIL Open Font License). Equations are pre-rendered as KaTeX 0.19.1 HTML and accessible MathML, with local mathematical fonts. No font CDN or client-side math renderer is required. The overview uses responsive native HTML; the results figure uses native labels and an inline vector interval plot, so they share the page font.

Third-party licenses: `assets/fonts/Inter-LICENSE.txt` and `assets/KaTeX-LICENSE.txt`.
