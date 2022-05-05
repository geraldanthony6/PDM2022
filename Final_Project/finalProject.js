//Arduino Stuff
let serialPDM;                        
let portName = 'COM3';  

//Shape Stuff
let randomCirclePositiony;
let randomCirclePositionx;
let randomCircleSize;

let randomSquarePositionx = [];
let randomSquarePositiony = [];
let randomSquareSize = [];
var randomSquareChangeDirectionX = [];

let randomTrianglePositiony1;
let randomTrianglePositionx1;
let randomTrianglePositiony2;
let randomTrianglePositionx2;
let randomTrianglePositiony3;
let randomTrianglePositionx3;


let randomCircleSpeeds = [];
var randomCircleMovementX = [];
var randomCircleMovementY = [];
var randomCircleChangeDirectionX = [];
var randomCircleChangeDirectionY = [];

//Sound Stuff
let synth = new Tone.AMSynth().toDestination();

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(0, 0, 0);
  //rectMode(CENTER);

  for(let i = 0; i <= 23; i++){
  randomCircleMovementX[i] = 1;
  randomCircleMovementY[i] = 1;
  randomCircleChangeDirectionX[i] = false;
  randomCircleChangeDirectionY[i] = false;
  }

  for(var i = 0; i < 8;i++){
    randomSquarePositionx[i] = 120;
    randomSquarePositiony[i] = 0;
  }

  

  randomCircleSpeeds[0] = 5;
  randomCircleSpeeds[1] = 15;
  randomCircleSpeeds[2] = 40;
  randomCircleSpeeds[3] = 10;
  randomCircleSpeeds[4] = 15;
  randomCircleSpeeds[5] = 12;
  randomCircleSpeeds[6] = 4;
  randomCircleSpeeds[7] = 19;
  randomCircleSpeeds[8] = 26;
  randomCircleSpeeds[9] = 11;
  randomCircleSpeeds[10] = 5;
  randomCircleSpeeds[11] = 30;
  randomCircleSpeeds[12] = 35;
  randomCircleSpeeds[13] = 32;
  randomCircleSpeeds[14] = 12;
  randomCircleSpeeds[15] = 50;
  randomCircleSpeeds[16] = 7;
  randomCircleSpeeds[17] = 14;
  randomCircleSpeeds[18] = 77;
  randomCircleSpeeds[19] = 55;
  randomCircleSpeeds[20] = 32;
  randomCircleSpeeds[21] = 11;
  randomCircleSpeeds[22] = 2;
  randomCircleSpeeds[23] = 30;
}

function draw(){
  background(0, 0, 0);

  if((keyIsPressed == true) && (keyCode == UP_ARROW)){
    SpawnCircle();
  }

  if((keyIsPressed == true) && (keyCode == RIGHT_ARROW)){
    rectMode(CENTER);
    translate(width/2, height/2);
    for (var i = 0; i < 8; i++) {
      push();
      rotate(TWO_PI * i / 8);
      rect(randomSquarePositionx[i], randomSquarePositiony[i], 20, 20);

      
      
      randomSquarePositionx[i] = randomSquarePositionx[i] + 1;
      
      pop();
    }
  }

  if((keyIsPressed == true) && (keyCode == LEFT_ARROW)){
    SpawnTriangle();
  }

  if((keyIsPressed == true) && (keyCode == 32)){
    clear();
    background(0, 0, 0);
  }
}

function SpawnCircle(){
  for(let i = 1;i <= 23; i++){
  fill(random([0, 255]), random([0, 255]), random([0, 255]));
  circle(randomCircleMovementX[i], randomCircleMovementY[i], random([50], [100]));
    if(randomCircleMovementX[i] > width){
      randomCircleChangeDirectionX[i] = true;
    } else if(randomCircleMovementX[i] <= 0){
      randomCircleChangeDirectionX[i] = false;
    }
  
    if(randomCircleMovementY[i] > height){
      randomCircleChangeDirectionY[i] = true;
    } else if(randomCircleMovementY[i] <= 0){
      randomCircleChangeDirectionY[i] = false;
    }
  
    if(randomCircleChangeDirectionX[i] == false){
      randomCircleMovementX[i] = randomCircleMovementX[i] + randomCircleSpeeds[i];
    } else if(randomCircleChangeDirectionX[i] == true){
      randomCircleMovementX[i] = randomCircleMovementX[i] - randomCircleSpeeds[i];
    }
  
      if(randomCircleChangeDirectionY[i] == false){
        randomCircleMovementY[i] = randomCircleMovementY[i] + randomCircleSpeeds[i];
      } else if(randomCircleChangeDirectionY[i] == true){
        randomCircleMovementY[i] = randomCircleMovementY[i] - randomCircleSpeeds[i];
      }
    }
}

function SpawnTriangle(){
  randomTrianglePositionx1 = random([10], [window.innerWidth]);
  randomTrianglePositiony1 = random([10], [window.innerHeight]);
  randomTrianglePositionx2 = random([10], [window.innerWidth]);
  randomTrianglePositiony2 = random([10], [window.innerHeight]);
  randomTrianglePositionx3 = random([10], [window.innerWidth]);
  randomTrianglePositiony3 = random([10], [window.innerHeight]);
  fill(random([0, 255]), random([0, 255]), random([0, 255]));
  triangle(randomTrianglePositionx1, randomTrianglePositiony1, randomTrianglePositionx2, randomTrianglePositiony2, randomTrianglePositionx3, randomTrianglePositiony3);
}

function SpawnSquare(){
  // randomSquarePositionx = random([10], [window.innerWidth]);
  // randomSquarePositiony = random([10], [window.innerHeight]);
  // randomSquareSize = random([50], [1000]);
  // translate(randomSquarePositionx, randomSquarePositiony);
  // rotate(radians(frameCount));
  // fill(random([0, 255]), random([0, 255]), random([0, 255]));
  // square(randomSquarePositionx, randomSquarePositiony, randomSquareSize);
}



