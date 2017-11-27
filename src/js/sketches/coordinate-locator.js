let box;

function setup() {
  const myCanvas = createCanvas(400, 400);
  myCanvas.parent('canvas-center');
}

 function draw() {
   background(40);
   stroke(255);

   if (mouseIsPressed) {
     if (!box) {
       box = {
         x: round(mouseX),
         y: round(mouseY),
         w:0,
         h: 0
       };
     }

     box.w = round(mouseX - box.x);
     box.h = round(mouseY - box.y);


     fill(255);
     noStroke();
     text('x: ' + box.x, 20, 20);
     text('y: ' + box.y, 20, 40);

     (box.w < 0) ? fill(255, 20, 0) : fill(255);
     text('w: ' + box.w, 20, 60);
     (box.h < 0) ? fill(255, 20, 0) : fill(255);
     text('h: ' + box.h, 20, 80);

     noFill();
     if (box.w >= 0 && box.h >= 0) {
       stroke(255);
     } else {
       stroke(255, 20, 0, 100);
     }
     rect(box.x, box.y, box.w, box.h);
     return;
   }

   box = undefined;
   line(mouseX, 0, mouseX, height);
   line(0, mouseY, width, mouseY);

   fill(255);
   noStroke();
   text('mouseX: ' + round(mouseX), 20, 20);
   text('mouseY: ' + round(mouseY), 20, 40);
}
