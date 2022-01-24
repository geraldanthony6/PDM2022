function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0, 0, 129);
  
  stroke(255, 255, 255);
  strokeWeight(3);
  fill(0, 128, 0);
  ellipse(100, 100, 100, 100);
  
  fill(255, 0, 0);
  beginShape();
  vertex(100, 50);
  vertex(115, 90);
  vertex(145, 90);
  vertex(115, 110);
  vertex(125, 140);
  vertex(100, 125);
  vertex(75, 140);
  vertex(85, 110);
  vertex(55, 90);
  vertex(85, 90);
  vertex(100, 50);
  
  endShape();
}