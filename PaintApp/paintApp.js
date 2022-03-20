let currentColor, red, orange, yellow, green, cyan, blue, magenta, brown, white, black;

let synth = new Tone.AMSynth().toDestination();
const startSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 3);
}, ["A2", "A4", "C2", "A3", ["G1", "B1", "B4"]], '3n');
const redSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 5);
},  ["C4", "E4", "G4", ["A4", "G4"]], '4n');

const orangeSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 5);
},  ["A2", "D4", "A3", "B2", ["A3", "G2"]], '2n');

const yellowSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 5);
},  ["C1", "E2", "D1", ["A4", "C2"]], '4n');

const greenSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 5);
},  ["G1", "C2", ["G2", "D3"], "E4"], '4n');

const lightBlueSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 5);
},  [["A1", "B3", "A4"], "G3", "B4", ["C1", "B2"]], '4n');

const blueSeq = new Tone.Sequence((time, note) => {
  drumSynth.triggerAttackRelease(note, 5);
},  ["G1", "G2", "G3", "G4"], '2n');

const purpleSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 5);
},  ["F2", "A1", "A2", ["B4", "B2", "A2"]], '4n');

const brownSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 5);
},  ["A1", "A3", "G4", "E2"], '4n');

const whiteSeq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 5);
},  ["B2", "C3", "E4", ["B1", "C4"]], '8n');

const blackSeq = new Tone.Sequence((time, note) => {
  drumSynth.triggerAttackRelease(note, 2);
},  ["B4", "E4", "C4", "A1"], '1n');

let loop = new Tone.Loop((time) => {
     drumSynth.triggerAttackRelease("C3", '4n');
    }, 5);
loop.start();

let drumSynth = new Tone.MembraneSynth();
const reverb = new Tone.JCReverb(0.6).toDestination();
drumSynth.connect(reverb);
drumSynth.volume.value = -30;

function setup() {
  createCanvas(900, 900);
  background(255);
  currentColor = 0;
  red = new colorBoxes(0, "red");
  orange = new colorBoxes(25, color(239, 134, 51));
  yellow = new colorBoxes(50, color(255, 249, 73));
  green = new colorBoxes(75, color(120, 242, 58));
  cyan = new colorBoxes(100, color(117, 249, 251));
  blue = new colorBoxes(125, "blue");
  magenta = new colorBoxes(150, color(232, 94, 250));
  brown = new colorBoxes(175, color(120, 67, 20));
  white = new colorBoxes(200, color(255, 255, 255));
  black = new colorBoxes(225, color(0, 0, 0));

  text("Refresh to start over!", 5, 270);
  //startSeq.start();
}

function draw() {


  if(mouseIsPressed){
  if(mouseX > 26){
    drawArt();
    if(currentColor == "red"){
      Tone.Transport.bpm = 100;
    } else if(currentColor == color(239, 134, 51)){
      Tone.Transport.bpm = 150;
    } else if(currentColor == color(255, 249, 73)){
      Tone.Transport.bpm = 200;
    } else if(currentColor == color(120, 242, 58)){
      Tone.Transport.bpm = 225;
    } else if(currentColor == color(117, 249, 251)){
      Tone.Transport.bpm = 250;
    } else if(currentColor == "blue"){
      Tone.Transport.bpm = 300;
    } else if(currentColor == color(232, 94, 250)){
      Tone.Transport.bpm = 75;
    } else if(currentColor == color(120, 67, 20)){
      Tone.Transport.bpm = 50;
    } else if(currentColor == "white"){
      Tone.Transport.bpm = 25;
    } else if(currentColor == "black"){
      Tone.Transport.bpm = 10;
    }
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
      Tone.start();
      Tone.Transport.start();
    if(mouseX < 25){
        if(mouseY > 0 && mouseY < 25){
          currentColor = "red";
          synth.triggerAttackRelease("C4", '4n');
          redSeq.start();
          orangeSeq.stop();
          yellowSeq.stop();
          greenSeq.stop();
          lightBlueSeq.stop();
          blueSeq.stop();
          purpleSeq.stop();
          brownSeq.stop();
          whiteSeq.stop();
          blackSeq.stop();
        } else if(mouseY > 25 && mouseY < 50){
          currentColor = color(239, 134, 51);
          synth.triggerAttackRelease("A4", '8n');
          redSeq.stop();
          orangeSeq.start();
          yellowSeq.stop();
          greenSeq.stop();
          lightBlueSeq.stop();
          blueSeq.stop();
          purpleSeq.stop();
          brownSeq.stop();
          whiteSeq.stop();
          blackSeq.stop();
        } else if(mouseY > 50 && mouseY < 75){
          currentColor = color(255, 249, 73);
          synth.triggerAttackRelease("G1", '8n');
          redSeq.stop();
          orangeSeq.stop();
          yellowSeq.start();
          greenSeq.stop();
          lightBlueSeq.stop();
          blueSeq.stop();
          purpleSeq.stop();
          brownSeq.stop();
          whiteSeq.stop();
          blackSeq.stop();
        } else if(mouseY > 75 && mouseY < 100){
          currentColor = color(120, 242, 58);
          synth.triggerAttackRelease("B2", '4n');
          redSeq.stop();
          orangeSeq.stop();
          yellowSeq.stop();
          greenSeq.start();
          lightBlueSeq.stop();
          blueSeq.stop();
          purpleSeq.stop();
          brownSeq.stop();
          whiteSeq.stop();
          blackSeq.stop();
        } else if(mouseY > 100 && mouseY < 125){
          currentColor = color(117, 249, 251);
          synth.triggerAttackRelease("C3", '2n');
          redSeq.stop();
          orangeSeq.stop();
          yellowSeq.stop();
          greenSeq.stop();
          lightBlueSeq.start();
          blueSeq.stop();
          purpleSeq.stop();
          brownSeq.stop();
          whiteSeq.stop();
          blackSeq.stop();
        } else if(mouseY > 125 && mouseY < 150){
          currentColor = "blue";
          synth.triggerAttackRelease("B2", '4n');
          redSeq.stop();
          orangeSeq.stop();
          yellowSeq.stop();
          greenSeq.stop();
          lightBlueSeq.stop();
          blueSeq.start();
          purpleSeq.stop();
          brownSeq.stop();
          whiteSeq.stop();
          blackSeq.stop();
        } else if(mouseY > 150 && mouseY < 175){
          currentColor = color(232, 94, 250);
          synth.triggerAttackRelease("F3", '3n');
          redSeq.stop();
          orangeSeq.stop();
          yellowSeq.stop();
          greenSeq.stop();
          lightBlueSeq.stop();
          blueSeq.stop();
          purpleSeq.start();
          brownSeq.stop();
          whiteSeq.stop();
          blackSeq.stop();
        } else if(mouseY > 175 && mouseY < 200){
          currentColor = color(120, 67, 20);
          synth.triggerAttackRelease("C2", '3n');
          redSeq.stop();
          orangeSeq.stop();
          yellowSeq.stop();
          greenSeq.stop();
          lightBlueSeq.stop();
          blueSeq.stop();
          purpleSeq.stop();
          brownSeq.start();
          whiteSeq.stop();
          blackSeq.stop();
        } else if(mouseY > 200 && mouseY < 225){
          currentColor = "white";
          synth.triggerAttackRelease("C1", '3n');
          redSeq.stop();
          orangeSeq.stop();
          yellowSeq.stop();
          greenSeq.stop();
          lightBlueSeq.stop();
          blueSeq.stop();
          purpleSeq.stop();
          brownSeq.stop();
          whiteSeq.start();
          blackSeq.stop();
        } else if(mouseY > 225 && mouseY < 250){
          currentColor = "black";
          synth.triggerAttackRelease("F1", '3n');
          redSeq.stop();
          orangeSeq.stop();
          yellowSeq.stop();
          greenSeq.stop();
          lightBlueSeq.stop();
          blueSeq.stop();
          purpleSeq.stop();
          brownSeq.stop();
          whiteSeq.stop();
          blackSeq.start();
        }
      }  
    }
  }
}

function onMouseReleased(){
  if(mouseIsReleased){
    if(mouseX < 25){
      seq.stop();
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
