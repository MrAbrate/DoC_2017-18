var r = 0;
var bubbleR = 0;
var bubbles = [];


function setup() {
  const myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('canvas');
  angleMode(DEGREES);
}

function draw() {
  background(255);
  if (r < 80) {
    const alpha = map(r, 0, 80, 255, 0);
    stroke(255, 0, 0, alpha);
    strokeWeight(5);
    noFill();
    ellipse(mouseX, mouseY, r);
  }
  if (r > 400) {
    r = 0;
  }
  r += 1;

  if (mouseIsPressed) {
    bubbleR += 1;
    stroke('black');
    noFill();
    ellipse(mouseX, mouseY, bubbleR);
  } else if (bubbleR > 0) {
    bubbles.push(new Bubble(mouseX, mouseY, bubbleR, random(360)));
    bubbleR = 0;
  }

  for (let i = bubbles.length - 1; i >= 0; i -= 1) {
    const bubble = bubbles[i];
    if (bubble.outOfBounds()) {
      bubbles.splice(i, 1);
    }
    bubble.update();
    bubble.show();
  }
}

class Bubble {
  constructor(x, y, size, h) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector(0, 0.3);
    this.size = size;
    this.color = color('hsl(' + floor(h) + ', 80%, 65%)');
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  outOfBounds() {
    const r = this.size / 2;
    return this.pos.x > width + r || this.pos.x < 0 - r || this.pos.y < 0 - r || this.pos.y > height + r;
  }
}


















//
