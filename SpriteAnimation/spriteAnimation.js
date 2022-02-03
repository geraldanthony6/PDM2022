let animation;
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


function preload(){
  spelunky = loadImage('SpelunkyGuy.png');
  spelunkyGirl = loadImage('s.png');
  warrior = loadImage('JungleWarrior.png');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(200, 200, 200);
}

function draw() {
 background(255, 0, 100);

  push();

  fill(0, 0, 0);
  noStroke();
  rect(0, 120, window.innerWidth, window.innerHeight);

  pop();

  push();
  animateCharacterSprite(50, 50, spelunky);
  pop();

  push();
  animateCharacterSprite(100, 200, warrior);
  pop();

  push();
  animateCharacterSprite(60, 400, spelunkyGirl);
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
    time += .3;
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