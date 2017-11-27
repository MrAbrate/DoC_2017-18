var r = 0;
var bubbleR = 0;
var bubbles = [];
const bkgrd = getComputedStyle(document.body)['background-color'];

function setup() {
  const myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('canvas');
  angleMode(DEGREES);
}

function draw() {
  background(bkgrd);
  const mouseSpeed = getMouseSpeed();
  const randomness = random(0, 80);

  if (mouseSpeed > randomness) {
    bubbles.push(new Bubble(mouseX, mouseY, random(5, 30), random(360)));
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
    this.acc = createVector(0, map(size, 5, 30, 0.1, 1));
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



function getMouseSpeed() {
  const m = createVector(mouseX, mouseY);
  const pm = createVector(pmouseX, pmouseY);
  const dif = m.sub(pm);
  return dif.mag();
}














//
