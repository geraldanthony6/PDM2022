let spriteMap = [
  {x: 0, y: 0 },
  {x: 80, y: 0},
  {x: 160, y: 0},
  {x: 240, y: 0},
  {x: 320, y: 0},
  {x:400, y: 0},
  {x:480, y: 0},
  {x:560, y: 0},
]


let spriteSheet;
let currScale;
let spriteWidth = 80;
let spriteLength = 80;
let index = 0;
let time = 0;
let newLocation = 0;
let randomStartLoc1;
let randomStartLoc2;
let randomStartLoc3;
let randomStartLoc4;
let randomStartLoc5;
let randomStartLoc6;
let randomStartSprite1;
let randomStartSprite2;
let randomStartSprite3;
let randomStartSprite4;
let randomStartSprite5;
let randomStartSprite6;


function preload(){
  spelunky = loadImage('SpelunkyGuy.png');
  spelunkyGirl = loadImage('s.png');
  warrior = loadImage('JungleWarrior.png');
  red = loadImage('Red.png');
  robot = loadImage('Robot.png');
  cyan = loadImage('Cyan.png');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(200, 200, 200);
  randomStartLoc1 = random(0, 1800);
  randomStartLoc2 = random(0, 1800);
  randomStartLoc3 = random(0, 1800);
  randomStartLoc4 = random(0, 1800);
  randomStartLoc5 = random(0, 1800);
  randomStartLoc6 = random(0, 1800);
  randomStartSprite1 = random([spelunky, spelunkyGirl, warrior, red, robot, cyan])
  randomStartSprite2 = random([spelunky, spelunkyGirl, warrior, red, robot, cyan])
  randomStartSprite3 = random([spelunky, spelunkyGirl, warrior, red, robot, cyan])
  randomStartSprite4 = random([spelunky, spelunkyGirl, warrior, red, robot, cyan])
  randomStartSprite5 = random([spelunky, spelunkyGirl, warrior, red, robot, cyan])
  randomStartSprite6 = random([spelunky, spelunkyGirl, warrior, red, robot, cyan])
}

function draw() {
 background(255, 50, 100);

  push();

  fill(0, 0, 0);
  noStroke();
  rect(0, 300, window.innerWidth, window.innerHeight);

  pop();

  push();
  createBuilding(100, 30, 200, 280);
  createBuilding(500, 30, 200, 280);
  createBuilding(1000, 30, 200, 280);
  createBuilding(1500, 30, 200, 280);
  createBuilding(250, 650, 200, 280);
  createBuilding(600, 650, 200, 280);
  createBuilding(1150, 650, 200, 280);
  createBuilding(1800, 650, 200, 280);
  pop();

  push();
  fill(64, 66, 71);
  rect(0, 300, window.innerWidth, 50);
  rect(0, 920, window.innerWidth, 50);

  //Characters
  push();
  animateCharacterSprite(randomStartLoc1, 300, randomStartSprite1);
  pop();
  push();
  animateCharacterSprite(randomStartLoc2, 500, randomStartSprite2);
  pop();
  push();
  animateCharacterSprite(randomStartLoc3, 850, randomStartSprite3);
  pop();
  push();
  animateCharacterSprite(randomStartLoc4, 400, randomStartSprite4);
  pop();
  push();
  animateCharacterSprite(randomStartLoc5, 550, randomStartSprite5);
  pop();
  push();
  animateCharacterSprite(randomStartLoc6, 855, randomStartSprite6);
  pop();

}

function animateCharacterSprite(locationX, locationY, spriteCharacter){

    cell = spriteMap[index];
    let sprite = spriteCharacter.get(cell.x, cell.y, spriteWidth, spriteLength);

    

    if(currScale == -1.0){
      translate((locationX + newLocation)*2 + 90, 0);
    }

    scale(currScale, 1.0);
    image(sprite, locationX + newLocation, locationY);

    if((keyIsPressed == true) && (keyCode == RIGHT_ARROW)) {

    currScale = 1.0;
    newLocation += 1
    time += .1;
    if(time > 1) {
      index++;
      if(index > spriteMap.length - 1){
        index = 0;
      }
      time = 0;
    }
  } else if ((keyIsPressed == true) && (keyCode == LEFT_ARROW)){
    currScale = -1.0;
    newLocation += -1;
    time += .1;
    if(time > 1) {
      index++;
      if(index > spriteMap.length - 1){
        index = 0;
      }
      time = 0;
    }
  } else {
    index = 0;
  }
}

function createBuilding(locationX, locationY){
  fill(164, 167, 171);
  rect(locationX, locationY, 200, 280);
 
  fill(221, 202, 149);
  stroke('black');
  rect(locationX + 50, locationY + 40, 100, 100);

  fill(180, 120, 71);
  stroke('black');
  rect(locationX + 60, locationY + 205, 75, 75);
}
