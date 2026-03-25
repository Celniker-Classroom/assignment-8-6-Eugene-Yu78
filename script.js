// ----- Functions to implement -----

// 1) myFunc(): persistent counter
let counter = 0
function myFunc(){
  counter++;
  return counter;
}
// 2) getRandomNum(max): 1..max int or 0 if invalid
function getRandomNum(max){
  if (typeof max !== 'number' || max < 1 || !Number.isInteger(max)) return 0;
  return Math.floor(Math.random() * max) + 1;
}
// 3) myAdder(x, y): numeric sum
function myAdder(x, y) {
  return x + y;
}
// 4) distance(x1, y1, x2, y2): Euclidean distance
function distance(x1, y1, x2, y2){
  let xdist = (x1 - x2) ** 2;
  let ydist = (y1 - y2) ** 2;
  let dist = Math.sqrt(xdist + ydist);
  return dist;
}

// 5) quadratic(a, b, c): roots of ax^2 + bx + c = 0
function quadratic(a, b, c) {
  let discriminant = b * b - 4 * a * c;
  let real = -b / (2 * a);
  if (discriminant >= 0) {
    let sqrtD = Math.sqrt(discriminant);
    let root1 = real + sqrtD / (2 * a);
    let root2 = real - sqrtD / (2 * a);
    return [root1.toString(), root2.toString()];
  } else {
    let imag = Math.sqrt(-discriminant) / (2 * a);
    let root1 = `${real} + ${imag}i`;
    let root2 = `${real} - ${imag}i`;
    return [root1, root2];
  }
}



// ----- Helpers -----
function $(id) { return document.getElementById(id); }
function setText(id, value) { $(id).textContent = String(value); }

// ----- Click Handlers (wire UI -> functions -> DOM) -----

function onMyFuncClick() {
  const val = myFunc();
  setText('outMyFunc', val);
}

function onRandomClick() {
  const max = parseInt($('maxRand').value);
  const val = getRandomNum(max);
  setText('outRandom', val);
}

function onAdderClick() {
  const x = parseFloat($('addX').value);
  const y = parseFloat($('addY').value);
  const sum = myAdder(x, y);
  setText('outAdder', sum);
}

function onDistanceClick() {
  const x1 = parseFloat($('x1').value), y1 = parseFloat($('y1').value);
  const x2 = parseFloat($('x2').value), y2 = parseFloat($('y2').value);
  const d = distance(x1, y1, x2, y2);
  setText('outDistance', d);
}

function onQuadraticClick() {
  const a = parseFloat($('qa').value), b = parseFloat($('qb').value), c = parseFloat($('qc').value);
  const roots = quadratic(a, b, c);
  setText('outQuadratic', Array.isArray(roots) ? roots.join(', ') : 'No real roots');
}
