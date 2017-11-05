let box;

function setup() {
  createCanvas(400, 300);
}

 function draw() {
   background(40);
   stroke(255);


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
     stroke(255);
     rect(box.x, box.y, box.w, box.h);

     fill(255);
     noStroke();
     text('x: ' + box.x, 20, 20);
     text('y: ' + box.y, 20, 40);
     text('w: ' + box.w, 20, 60);
     text('h: ' + box.h, 20, 80);
     return;
   }

   box = undefined;
   line(mouseX, 0, mouseX, height);
   line(0, mouseY, width, mouseY);

   fill(255);
   noStroke();
   text('mouseX: ' + mouseX, 20, 20);
   text('mouseY: ' + mouseY, 20, 40);
}
