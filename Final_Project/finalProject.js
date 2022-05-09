//Arduino Stuff
let serialPDM;                        
let portName = 'COM3';  

let sensors;

//Shape Stuff
let randomCirclePositiony;
let randomCirclePositionx;
let randomCircleSize;

let randomSquarePositionx = [];
let randomSquarePositiony = [];
let randomSquareSize = [];
var randomSquareChangeDirectionX = [];
var randomSquareChangeDirectionY = [];


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

let pluckSynth = new Tone.PluckSynth().toDestination();

let osc =  new Tone.AMOscillator(500, 'sine', 'triangle').start();
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let env = new Tone.AmplitudeEnvelope({
  attack: .1,
  decay: .2,
  sustain: 1.0,
  release: 0.8
}).connect(pan);
osc.connect(env);

let freqLFO = new Tone.LFO(2, 100, 10000).start();
freqLFO.connect(osc.frequency);

const circleSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 3);
}, ["C2", "B4", "C2", "B3", ["G1", "B1", "B4"]], '3n');

const nullSeq = new Tone.Sequence((time, note) => {
  pluckSynth.triggerAttackRelease(note, 5);
},  ["C1", "E2", "D1", ["A4", "C2"]], '4n');

const squareSeq = new Tone.Sequence((time, note) => {
  nukeSynth.triggerAttackRelease(note, 5);
},  ["C1", "E2", "D1", ["A4", "C2"]], '4n');



function setup(){
  serialPDM = new PDMSerial(portName);
  sensors = serialPDM.sensorData;

  createCanvas(window.innerWidth, window.innerHeight);
  background(255, 255, 255);
  textSize(50);
  textAlign(CENTER);
  text('Constant Change', window.innerWidth/2, window.innerHeight/2 - 300);
  text('Epilepsy Warning, many flashing colors!', window.innerWidth/2, window.innerHeight/2 - 100);
  text('Hold Left Arrow//Button for Circles', window.innerWidth/2, window.innerHeight/2 + 100);
  text('Hold Right Arrow/Button for Squares', window.innerWidth/2, window.innerHeight/2 + 200);
  text('Hold Space for neither', window.innerWidth/2, window.innerHeight/2 + 300);

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
    randomSquareChangeDirectionY[i] = false;
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
  //background(0, 0, 0);
  textSize(40);


  if(((keyIsPressed == true) && (keyCode == LEFT_ARROW)) || sensors.circle > 0){
    background(0, 0, 0);
    text('Hold Left Arrow//Button for Circles', window.innerWidth/2, window.innerHeight/2 + 100);
    text('Hold Right Arrow/Button for Squares', window.innerWidth/2, window.innerHeight/2 + 200);
    text('Hold Space for neither', window.innerWidth/2, window.innerHeight/2 + 300);
    Tone.start();
    Tone.Transport.start();
    SpawnCircle();
    circleSeq.start();
    squareSeq.stop();
    nullSeq.stop();
    serialPDM.transmit('led13', 1);
  } else if(((keyIsPressed == true) && (keyCode == RIGHT_ARROW)) || sensors.square > 0){
    background(100, 230, 135);
    text('Hold Left Arrow//Button for Circles', window.innerWidth/2, window.innerHeight/2 + 100);
    text('Hold Right Arrow/Button for Squares', window.innerWidth/2, window.innerHeight/2 + 200);
    text('Hold Space for neither', window.innerWidth/2, window.innerHeight/2 + 300);
    Tone.start();
    Tone.Transport.start();
    SpawnSquare();
    circleSeq.stop();
    nullSeq.stop();
    squareSeq.start();
    serialPDM.transmit('led13', 1);
  } else if(((keyIsPressed == true) && (keyCode == 32)) || sensors.spaceBar > 0){
    background(200, 211, 123);
    text('Hold Left Arrow//Button for Circles', window.innerWidth/2, window.innerHeight/2 + 100);
    text('Hold Right Arrow/Button for Squares', window.innerWidth/2, window.innerHeight/2 + 200);
    text('Hold Space for neither', window.innerWidth/2, window.innerHeight/2 + 300);
    Tone.start();
    Tone.Transport.start();
    circleSeq.stop();
    squareSeq.stop();
    nullSeq.start();
    serialPDM.transmit('led13', 1);
    }
}

function SpawnCircle(){
  for(let i = 1;i <= 49; i++){
  fill(random([0, 255]), random([0, 255]), random([0, 255]));
  circle(randomCircleMovementX[i], randomCircleMovementY[i], random([50], [200]));
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
      randomCircleMovementX[i] = randomCircleMovementX[i] + randomCircleSpeeds[i]/5;
    } else if(randomCircleChangeDirectionX[i] == true){
      randomCircleMovementX[i] = randomCircleMovementX[i] - randomCircleSpeeds[i]/5;
    }
  
      if(randomCircleChangeDirectionY[i] == false){
        randomCircleMovementY[i] = randomCircleMovementY[i] + randomCircleSpeeds[i]/5;
      } else if(randomCircleChangeDirectionY[i] == true){
        randomCircleMovementY[i] = randomCircleMovementY[i] - randomCircleSpeeds[i]/5;
      }
    }
}

function SpawnSquare(){
  rectMode(CENTER);
  translate(width/2, height/2);
  for (var i = 0; i < 50; i++) {
    push();
    rotate(TWO_PI * i / 16);
    rect(randomSquarePositionx[i], randomSquarePositiony[i], random([100], [200]), 100);
    if(frameCount % 60 == 0){
    rotate(radians(frameCount));
    }
    if(randomSquarePositionx[i] > width){
      randomSquareChangeDirectionX[i] = true;
    } else if(randomSquarePositionx[i] <= 0){
      randomSquareChangeDirectionX[i] = false;
    }
  
    if(randomSquarePositiony[i] > height){
      randomSquareChangeDirectionY[i] = true;
    } else if(randomSquarePositiony[i] <= 0){
      randomSquareChangeDirectionY[i] = false;
    }
  
    if(randomSquareChangeDirectionX[i] == false){
      randomSquarePositionx[i] = randomSquarePositionx[i] + randomCircleSpeeds[i]/5;
    } else if(randomSquareChangeDirectionX[i] == true){
      randomSquarePositionx[i] = randomSquarePositionx[i] - randomCircleSpeeds[i]/5;
    }
  
    if(randomSquareChangeDirectionY[i] == false){
      randomSquarePositiony[i] = randomSquarePositiony[i] + randomCircleSpeeds[i]/5;
    } else if(randomSquareChangeDirectionX[i] == true){
      randomSquarePositiony[i] = randomSquarePositiony[i] - randomCircleSpeeds[i]/5;
    }
    
    pop();
  }
}




