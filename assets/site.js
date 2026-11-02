"use strict";
// Constructed examples explain the allocation protocol; these are not experimental records.
const illustrationTasks = [
  {id:1, variants:["VDGV","ADGA"], bench:.94, learn:.15, fitness:[1.20,.55], answers:{Terra:["A","A","B"],Sol:["B","B","B"]}},
  {id:2, variants:["VDGA","FDGV"], bench:.58, learn:.68, fitness:[.35,1.05], answers:{Terra:["B","A","B"],Sol:["A","A","B"]}},
  {id:3, variants:["ADGV","VDGW"], bench:.18, learn:.93, fitness:[.86,.63], answers:{Terra:["A","B","A"],Sol:["B","B","A"]}},
  // Value-only illustrative point: strictly dominated and never selected.
  {id:4, bench:.30, learn:.40}
];
let preference = .5;
let verified = false;
function currentTask() {
  return illustrationTasks.reduce((best,item)=>
    preference*item.bench+(1-preference)*item.learn > preference*best.bench+(1-preference)*best.learn ? item : best);
}
function dominatingTask(item) {
  return illustrationTasks.find(other=>other.id!==item.id &&
    other.bench>=item.bench && other.learn>=item.learn &&
    (other.bench>item.bench || other.learn>item.learn));
}
function renderSelection() {
  const selected=currentTask();
  const winner=selected.fitness[0]>selected.fitness[1]?"A":"B";
  document.getElementById("candidate-pool").innerHTML=illustrationTasks.map(item=>{
    const selectedHere=item.id===selected.id;
    const dominator=dominatingTask(item);
    const status=dominator?"Dominated":selectedHere?(verified?"Verified":"Selected Next"):"";
    return '<article class="candidate'+(selectedHere?' is-selected':'')+(selectedHere&&verified?' is-verified':'')+(dominator?' is-dominated':'')+'" data-task-id="'+item.id+'"'+(dominator?' data-dominated-by="'+dominator.id+'"':'')+'>'+
      '<div class="candidate-header"><strong>Item '+item.id+'</strong><span class="candidate-status">'+status+'</span></div>'+
      '<div class="candidate-values"><div class="value-row"><span>Benchmark</span><div class="value-track"><div class="value-fill" style="width:'+100*item.bench+'%"></div></div><small>'+item.bench.toFixed(2)+'</small></div>'+
      '<div class="value-row learning"><span>Learning</span><div class="value-track"><div class="value-fill" style="width:'+100*item.learn+'%"></div></div><small>'+item.learn.toFixed(2)+'</small></div></div>'+(dominator?'<p class="candidate-dominance">Item '+dominator.id+' is higher on both values.</p>':'')+'</article>';
  }).join("");
  document.querySelectorAll("[data-preference]").forEach(button=>{
    button.setAttribute("aria-pressed",String(Number(button.dataset.preference)===preference));
    button.disabled=verified;
  });
  document.getElementById("selected-task-name").textContent="Item "+selected.id;
  const explanation=preference===1?"It has the highest predicted benchmarking value.":preference===0?"It has the highest predicted learning value.":"It has the highest combined score with equal weight on both values.";
  document.getElementById("selection-reason").textContent=explanation;
  document.getElementById("selected-pair").innerHTML="<span>A: "+selected.variants[0].split("").join(" ")+"</span><span>B: "+selected.variants[1].split("").join(" ")+"</span>";
  document.getElementById("selected-runs").innerHTML=Object.entries(selected.answers).map(([agent,answers])=>{
    const correct=answers.filter(x=>x===winner).length;
    return '<tr><td>'+agent+'</td>'+answers.map(answer=>'<td><span class="vote'+(verified?(answer===winner?' is-correct':' is-wrong'):'')+'">'+answer+'</span></td>').join("")+
      '<td class="score-cell">'+(verified?correct+'/3':'Hidden')+'</td></tr>';
  }).join("");
  for(const [index,letter] of [[0,"a"],[1,"b"]]){
    document.getElementById("fitness-"+letter).textContent=verified?selected.fitness[index].toFixed(2):"Hidden";
    document.getElementById("fitness-box-"+letter).classList.toggle("is-winner",verified&&letter.toUpperCase()===winner);
  }
  const verifyButton=document.getElementById("verify-task");verifyButton.disabled=verified;
  verifyButton.textContent=verified?"Verified: Variant "+winner+" Wins":"Verify Selected Pair \u00b7 Cost 2";
  document.getElementById("benchmark-feedback").textContent=verified?
    Object.entries(selected.answers).map(([agent,answers])=>agent+": "+answers.filter(x=>x===winner).length+"/3 runs correct").join(". ")+". The same measured winner scores both agents.":
    "After verification, compare every cached A/B answer with the measured winner.";
  document.getElementById("memory-feedback").textContent=verified?
    "Both measured variants enter the training data. The active memory changes only after a batch update.":
    "Both labeled variants become training evidence for the target's external fitness predictor.";
}
document.querySelectorAll("[data-preference]").forEach(button=>button.addEventListener("click",()=>{
  if(verified)return;preference=Number(button.dataset.preference);renderSelection();
}));
document.getElementById("verify-task").addEventListener("click",()=>{
  if(verified)return;verified=true;renderSelection();
});
document.getElementById("reset-demo").addEventListener("click",()=>{verified=false;preference=.5;renderSelection();});
document.getElementById("copy-citation").addEventListener("click",async()=>{
  const text=document.getElementById("citation").textContent,status=document.getElementById("copy-status");
  try{await navigator.clipboard.writeText(text);status.textContent="Citation copied.";}
  catch{const range=document.createRange();range.selectNodeContents(document.getElementById("citation"));const selection=window.getSelection();selection.removeAllRanges();selection.addRange(range);status.textContent="Citation selected. Use your copy shortcut.";}
});
renderSelection();
document.documentElement.dataset.ready="true";
