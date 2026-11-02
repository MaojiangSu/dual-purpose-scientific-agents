// Draw a compact acquisition loop around responsive, readable HTML labels.
(()=>{const board=document.getElementById('workflow-board'),svg=document.getElementById('workflow-connectors'),group=document.getElementById('workflow-paths');if(!board||!svg||!group)return;
const box=id=>{const b=board.getBoundingClientRect(),r=document.getElementById(id).getBoundingClientRect();return {x:r.left-b.left,y:r.top-b.top,w:r.width,h:r.height,cx:r.left-b.left+r.width/2,cy:r.top-b.top+r.height/2}};
const path=(d,style='')=>{const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',d);p.setAttribute('class','flow-link '+style);group.append(p)};
function draw(){const width=board.clientWidth,height=board.clientHeight;svg.setAttribute('viewBox',`0 0 ${width} ${height}`);group.replaceChildren();const pool=box('flow-pool'),method=box('flow-method'),values=box('flow-values'),select=box('flow-select'),verify=box('flow-verify'),shared=box('flow-shared'),loop=box('flow-feedback'),vertical=matchMedia('(max-width:1100px)').matches;
path(`M${values.x+values.w+3} ${values.cy}H${select.x-4}`);
if(!vertical){path(`M${pool.x+pool.w+3} ${pool.cy}H${method.x-4}`);path(`M${method.x+method.w+3} ${method.cy}H${verify.x-4}`);path(`M${verify.x+verify.w+3} ${verify.cy}H${shared.x-4}`);path(`M${shared.cx} ${shared.y+shared.h+3}V${loop.cy}H${method.cx}V${method.y+method.h+4}`,'flow-return');}
else{path(`M${pool.cx} ${pool.y+pool.h+3}V${method.y-4}`);path(`M${method.cx} ${method.y+method.h+3}V${verify.y-4}`);path(`M${verify.cx} ${verify.y+verify.h+3}V${shared.y-4}`);path(`M${shared.x-2} ${shared.cy}H${innerWidth<=540?12:17}V${method.cy}H${method.x-4}`,'flow-return');}
board.dataset.workflowReady='true';}
let frame;const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(draw)};new ResizeObserver(schedule).observe(board);window.addEventListener('resize',schedule);document.fonts.ready.then(schedule);schedule();})();
