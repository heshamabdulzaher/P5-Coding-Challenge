let drops = [];
let img;
function preload() {
  img = loadImage("https://image.flaticon.com/icons/svg/427/427112.svg");
}
function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 100; i++) {
    let drop = new Drop();
    drops.push(drop);
  }
}

function draw() {
  //   frameRate(20);
  background(55);
  let gravity = createVector(0, 0.3);
  drops.forEach(drop => {
    drop.show();
    drop.update(gravity);
    drop.dropHitTheGround(gravity);
  });
}
