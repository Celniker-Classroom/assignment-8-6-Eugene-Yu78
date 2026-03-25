// ----- Functions to implement -----

// 1) myFunc(): persistent counter
let counter = 0
function myFunc(){
  counter++;
  return counter;
}
// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max){
  
}
// 3) myAdder(x, y): numeric sum
function myAdder(x, y) {
  sum=x+y
  return sum;
}
// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2){
  xdist= (x1-x2)**2;
  ydist= (y1-y2)**2;
  dist = Math.sqrt(xdist + ydist);
  return dist;
}

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0


// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = $('maxRand').value;
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = $('addX').value;
  const y = $('addY').value;
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = $('x1').value, y1 = $('y1').value;
  const x2 = $('x2').value, y2 = $('y2').value;
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = $('qa').value, b = $('qb').value, c = $('qc').value;
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : roots);
}
