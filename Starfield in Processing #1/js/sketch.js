let stars = [];

function setup() {
  createCanvas(640, 480);

  for (let i = 0; i < 800; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(55);
  translate(width / 2, height / 2);

  stars.forEach(star => {
    star.show();
    star.update();
  });
}
