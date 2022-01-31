let currentColor, red, orange, yellow, green, cyan, blue, magenta, brown, white, black;

function setup() {
  createCanvas(900, 900);
  background(255);
  currentColor = 0;
  red = new colorBoxes(0, "red");
  orange = new colorBoxes(25, color(239, 134, 51));
  yellow = new colorBoxes(50, color(255, 249, 73));
  green = new colorBoxes(75, "green");
  cyan = new colorBoxes(100, color(117, 249, 251));
  blue = new colorBoxes(125, "blue");
  magenta = new colorBoxes(150, color(232, 94, 250));
  brown = new colorBoxes(175, color(120, 67, 20));
  white = new colorBoxes(200, color(255, 255, 255));
  black = new colorBoxes(225, color(0, 0, 0));
  
}

function draw() {
  if(mouseIsPressed){
  if(mouseX > 26){
    drawArt();
    }
  }
  
  console.log(currentColor);
  
  red.show();
  red.onMousePress();
  orange.show();
  yellow.show();
  green.show();
  cyan.show();
  blue.show();
  magenta.show();
  brown.show();
  white.show();
  black.show();
}  

class colorBoxes{
  constructor(y, color){
    noStroke();
    this.x = 0;
    this.y = y;
    this.width = 25;
    this.height = 25;
    this.color = color;
  }
  
  show(){
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
  
  onMousePress(){
    if(mouseIsPressed){
    if(mouseX < 25){
        if(mouseY > 0 && mouseY < 25){
          currentColor = "red";
        } else if(mouseY > 25 && mouseY < 50){
          currentColor = color(239, 134, 51);
        } else if(mouseY > 50 && mouseY < 75){
          currentColor = color(255, 249, 73);
        } else if(mouseY > 75 && mouseY < 100){
          currentColor = "green";
        } else if(mouseY > 100 && mouseY < 125){
          currentColor = color(117, 249, 251);
        } else if(mouseY > 125 && mouseY < 150){
          currentColor = "blue";
        } else if(mouseY > 150 && mouseY < 175){
          currentColor = color(232, 94, 250);
        } else if(mouseY > 175 && mouseY < 200){
          currentColor = color(120, 67, 20);
        } else if(mouseY > 200 && mouseY < 225){
          currentColor = "white";
        } else if(mouseY > 225 && mouseY < 250){
          currentColor = "black";
        }
      }  
    }
  }
}

function drawArt(){
  push();
  stroke(currentColor);
  strokeWeight(5);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();
}
