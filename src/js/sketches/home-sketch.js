const dots = [];
const bkgrd = getComputedStyle(document.body)['background-color'];



function setup() {
  const myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.parent('canvas');
  

  angleMode(DEGREES);
  for (let i = 0; i < 7; i += 1) {
    dots.push(new Dot());
  }
}

function draw() {
  background(bkgrd);
  dots.forEach(dot => {
    dot.move();
    dot.show();
  });
}

class Dot {
  constructor(x, y) {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector();
    var r = random(3) >= 1  ? random(100, 255): 255;
    var g = random(3) >= 1  ? random(100, 255): 255;
    var b = random(3) >= 1  ? random(100, 255): 255;
    this.color = color(r, g, b);
  };
  distFromBox() {
    if (this.pos.x > box.x ) {

    }
  }
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
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 10);
  }
}
