let box, img, dot = {x: 0, y: 0};
let state = 'color', c;
let h = 50;
let body, button, slider;

function setup() {
  createCanvas(400, 300);
  slider = createSlider(0, 255, 100);
  slider.position(20, height + 60);
  slider.style('width', '360px');

  img = createImage(10, 10);
  img.loadPixels();

  body = select('body');
  button = createButton('X/Y Picker');
  button.position(19, 19);
  button.mousePressed(function () {
    if (state === 'color') {
      state = 'XY';
    } else {
      state = 'color';
    }
  });
}

 function draw() {
   if (state === 'color') {
     const val = slider.value();
     if (val !== h) {
       h = val;
       refreshImage();
     }
     image(img, 0, 0);

     if (mouseIsPressed || !c) {
       body.style('background-color', c);

       if (mouseX < width && mouseX > 0 &&
           mouseY < height && mouseY > 0) {
         dot.x = mouseX;
         dot.y = mouseY;
       }

       c = img.get(dot.x, dot.y);
       c.pop();
       c = 'rgb(' + c.join(', ') + ')';

     }
     noFill();
     ellipse(dot.x, dot.y, 5, 5);
     text(c, 20, 20);
     return;
   }



   if (mouseIsPressed) {
     if (!box) {
       box = {
         x: mouseX,
         y: mouseY,
         w:0,
         h: 0
       };
     }

     box.w = mouseX - box.x;
     box.h = mouseY - box.y;
     noFill();
     stroke(0);
     rect(box.x, box.y, box.w, box.h);
   } else {
     box = undefined;
     stroke(255);
     strokeWeight(2);
     line(mouseX, 0, mouseX, height);
     line(0, mouseY, width, mouseY)
   }
   fill(0);
   noStroke();
   if (!box) {
     text('mouseX: ' + mouseX, 20, 20);
     text('mouseY: ' + mouseY, 20, 40);

   } else {
     text('x: ' + box.x, 20, 20);
     text('y: ' + box.y, 20, 40);
     text('w: ' + box.w, 20, 60);
     text('h: ' + box.h, 20, 80);

   }


 }

function refreshImage() {
  var counter = 0
  img.resize(40, 40);
  for (i = 0; i < img.width; i++) {
    const s = round(map(i, 0, img.width-1, 0, 100));
    for (j = 0; j < img.height; j++) {
      const l = round(map(j, 0, img.height-1, 0, 100));
      const hslStr = `hsl(${h}, ${s}%, ${l}%)`;
      const c = color(hslStr);
      img.set(i, j, c);
      counter++
    }
  }
  img.updatePixels();
  img.resize(width, height);
  console.log(counter)
}
