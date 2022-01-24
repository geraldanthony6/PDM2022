function setup() {
  createCanvas(200, 100);
}

function draw() {
  background(0);
  
  fill(255, 248, 74);
  arc(50, 50, 80, 80, 5*PI/4, 3*PI/4);
  
  fill(234, 65, 44);
  ellipse(150, 50, 80, 80);
  rect(110, 50, 80, 40);
  //arc(150, 90, 100, 160, PI, 0);
   
  fill(255, 255, 255);
  noStroke();
  circle(170, 50, 25);
  circle(130, 50, 25);
  
  fill(0, 68, 247);
  circle(170, 50, 15);
  circle(130, 50, 15);
}