let size; 
let spread; 
let sCol;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER); 
  angleMode (DEGREES);
  size =50; 
  spread=100;
  sCol = 0; 
}

function draw() {
  background(255);
  strokeWeight(3);
  stroke (sCol, 0, 0) 
  sCol++;
  
  //with push and pop 
  for (j=0; j<height+spread; j+=spread){ 
    for(i=0; i<width+spread; i+=spread){
    push();
    translate (i, j); 
    rotate (frameCount);
    square (0,0, size);
    pop();
  }
  }
  
  
}