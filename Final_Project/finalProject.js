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

let nukeSynth = new Tone.MembraneSynth();
const reverb = new Tone.JCReverb(0.8).toDestination();
nukeSynth.connect(reverb);

const startSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 3);
}, ["A2", "A4", "C2", "A3", ["G1", "B1", "B4"]], '3n');

const yellowSeq = new Tone.Sequence((time, note) => {
  nukeSynth.triggerAttackRelease(note, 5);
},  ["C1", "E2", "D1", ["A4", "C2"]], '4n');

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background(0, 0, 0);
  //rectMode(CENTER);

  for(let i = 0; i <= 49; i++){
  randomCircleMovementX[i] = 1;
  randomCircleMovementY[i] = 1;
  randomCircleChangeDirectionX[i] = false;
  randomCircleChangeDirectionY[i] = false;
  }

  for(var i = 0; i < 50;i++){
    randomSquarePositionx[i] = 120;
    randomSquarePositiony[i] = 0;
    randomSquareChangeDirectionX[i] = false;
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
  randomCircleSpeeds[24] = 27;
  randomCircleSpeeds[25] = 100;
  randomCircleSpeeds[26] = 59;
  randomCircleSpeeds[27] = 62;
  randomCircleSpeeds[28] = 23;
  randomCircleSpeeds[29] = 79;
  randomCircleSpeeds[30] = 105;
  randomCircleSpeeds[31] = 93;
  randomCircleSpeeds[32] = 87;
  randomCircleSpeeds[33] = 59;
  randomCircleSpeeds[34] = 222;
  randomCircleSpeeds[35] = 34;
  randomCircleSpeeds[36] = 199;
  randomCircleSpeeds[37] = 24;
  randomCircleSpeeds[38] = 26;
  randomCircleSpeeds[39] = 49;
  randomCircleSpeeds[40] = 38;
  randomCircleSpeeds[41] = 68;
  randomCircleSpeeds[42] = 32;
  randomCircleSpeeds[43] = 110;
  randomCircleSpeeds[44] = 120;
  randomCircleSpeeds[45] = 130;
  randomCircleSpeeds[46] = 145;
  randomCircleSpeeds[47] = 135;
  randomCircleSpeeds[48] = 115;
  randomCircleSpeeds[49] = 23;
}

function draw(){

  Tone.start();
  Tone.Transport.start();
  background(0, 0, 0);
  textSize(40);

  text('Click Left Arrow for Circles', 700, window.innerHeight/2);
  text('Click Right Arrow for Squares', 670, window.innerHeight/2 + 100);


  if((keyIsPressed == true) && (keyCode == LEFT_ARROW)){
    SpawnCircle();
    startSeq.start();
    //redSeq.stop();
  } else if((keyIsPressed == true) && (keyCode == RIGHT_ARROW)){
    SpawnSquare();
    startSeq.stop();
    //redSeq.start();
  }


  if((keyIsPressed == true) && (keyCode == 32)){
    clear();
    background(0, 0, 0);
  }
}

function SpawnCircle(){
  for(let i = 1;i <= 49; i++){
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

function SpawnSquare(){
  rectMode(CENTER);
  translate(width/2, height/2);
  for (var i = 0; i < 50; i++) {
    push();
    rotate(TWO_PI * i / 16);
    rect(randomSquarePositionx[i], randomSquarePositiony[i], 100, 100);
    if(frameCount % 25 == 0){
    rotate(radians(frameCount));
    }
    if(randomCircleMovementX[i] > width){
      randomCircleChangeDirectionX[i] = true;
    } else if(randomCircleMovementX[i] <= 0){
      randomCircleChangeDirectionX[i] = false;
    }
    
    if(randomCircleChangeDirectionX[i] == false){
      randomSquarePositionx[i] = randomSquarePositionx[i] + 10;
    } else if(randomCircleChangeDirectionX[i] == true){
      randomSquarePositionx[i] = randomSquarePositionx[i] - 25;
    }
    
    pop();
  }
}

// function SpawnTriangle(){
//   randomTrianglePositionx1 = random([10], [200]);
//   randomTrianglePositiony1 = random([10], [200]);
//   randomTrianglePositionx2 = random([10], [200]);
//   randomTrianglePositiony2 = random([10], [200]);
//   randomTrianglePositionx3 = random([10], [200]);
//   randomTrianglePositiony3 = random([10], [200]);
//   fill(random([0, 255]), random([0, 255]), random([0, 255]));
//   triangle(randomTrianglePositionx1, randomTrianglePositiony1, randomTrianglePositionx2, randomTrianglePositiony2, randomTrianglePositionx3, randomTrianglePositiony3);
// }



