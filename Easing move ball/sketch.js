let x = 1;
let y = 1;
let easing = 0.05;

function setup() {
  createCanvas(900, 675);
  noStroke();
}

function draw() {
  background(33);
  let dx = mouseX - x;
  x += dx * easing;

  let dy = mouseY - y;
  y += dy * easing;
  ellipse(x, y, 50);
}
