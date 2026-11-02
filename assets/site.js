"use strict";
const items = [
  { benchmark: .94, learning: .15, cost: 2 },
  { benchmark: .58, learning: .68, cost: 2 },
  { benchmark: .18, learning: .93, cost: 2 }
];
const slider = document.getElementById("preference");
function updatePreference() {
  const lambda = Math.max(0, Math.min(1, Number(slider.value) / 100));
  const scores = items.map(x => (lambda*x.benchmark + (1-lambda)*x.learning)/x.cost);
  const best = scores.indexOf(Math.max(...scores));
  document.getElementById("lambda-value").value = lambda.toFixed(2);
  slider.setAttribute("aria-valuetext", Math.round(lambda*100)+" percent benchmarking, "+Math.round((1-lambda)*100)+" percent learning");
  scores.forEach((value,i) => {
    document.querySelector('[data-item="'+i+'"]').classList.toggle("selected", i===best);
    document.querySelector('[data-score="'+i+'"]').textContent = value.toFixed(3);
    document.querySelector('[data-fill="'+i+'"]').style.width = (100*value/.5)+"%";
  });
  const preference = lambda<.25 ? "Learning-focused" : lambda>.75 ? "Benchmarking-focused" : "Balanced";
  document.getElementById("demo-outcome").textContent = preference+" preference selects Item "+(best+1)+".";
}
slider.addEventListener("input",updatePreference);
updatePreference();
document.getElementById("copy-citation").addEventListener("click",async () => {
  const text = document.getElementById("citation").textContent;
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "Citation copied.";
  } catch {
    const range=document.createRange();
    range.selectNodeContents(document.getElementById("citation"));
    const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);
    status.textContent = "Citation selected. Use your copy shortcut.";
  }
});
document.documentElement.dataset.ready="true";
