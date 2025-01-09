let x = 0;
let y = 0;

let speed = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  stroke(0,0,0,0);
  
   //Attempting to draw a star
  triangle(50, 150, 25, 210, 75, 210);
  triangle(50, 210, 20, 170, 80, 170);
  fill(255);
  triangle(50, 195, 20, 210, 80, 210);
  
  
  fill(215, 245, 235);
  circle(x, y, 20);
  
  // stroke(255);
  fill(157, 183, 196);
  circle(x + 15, y + 15, 40);
  
  fill(86, 76, 94);
  circle(x + 40 , y + 40, 60);
  
  speed+=0.5;
  x+= speed;
  y+= speed;
  
  if(x>width){
    x = 0;
    speed = 1;
  }
   
  if(y>height){
    y = 0;
    speed = 1;
  }
  
 
  
}
























