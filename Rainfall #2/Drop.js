class Drop {
  constructor() {
    this.speed = 10;
    this.width = 8;
    this.pos = createVector(random(0, width), random(0, height));
    this.acc = createVector();
    this.vel = createVector();
  }
  show() {
    image(img, this.pos.x, this.pos.y, 10, 14);
  }

  dropHitTheGround(f) {
    if (this.pos.y > height) {
      this.pos.y = random(-height, 0);
      this.vel.y = 0.2;
      this.pos.x = random(0, width);
      ellipse(this.pos.x, this.pos.y, 4);
    }
  }
  update(f) {
    this.acc.add(f);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
}
