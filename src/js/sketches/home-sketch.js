const dots = [];

function setup() {
  const myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.parent('canvas');
  angleMode(DEGREES);
  for (let i = 0; i < 7; i += 1) {
    dots.push(new Dot());
  }
}

function draw() {
  background(255, 100);
  dots.forEach(dot => {
    dot.move();
    dot.show();
  });
}

class Dot {
  constructor(x, y) {
    this.pos = createVector(100, 100);
    this.vel = createVector();
  };
  move() {
    if (mouseIsPressed) {
      this.acc = this.pos.copy().sub(createVector(mouseX, mouseY)).setMag(3);
    } else {
      this.acc = createVector(mouseX, mouseY).sub(this.pos).setMag(1.5);
    }

    this.acc.rotate(random(-90,90));
    this.vel = this.vel.add(this.acc).setMag(4);
    this.pos.add(this.vel);
  }
  show() {
    fill('red');
    ellipse(this.pos.x, this.pos.y, 10);
  }
}