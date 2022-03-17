let currentColor, red, orange, yellow, green, cyan, blue, magenta, brown, white, black;
let currentNote;
let startTime = 0;
let endTime = 5;

let synth = new Tone.AMSynth().toDestination();
const seq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, 0.9, time);
},  ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]);

const loop = new Tone.Loop((time) => {
    drumSynth.triggerAttackRelease("G3", '4n');
    }, "12n");
   

let drumSynth = new Tone.MembraneSynth();
const reverb = new Tone.JCReverb(0.4).toDestination();
drumSynth.connect(reverb);

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

}

function draw() {


  if(mouseIsPressed){
  if(mouseX > 26){
    drawArt();
    if(currentColor == "red"){
      //synth.triggerAttackRelease("A2", '8n');
      currentNote = "A2";
      seq.start(startTime);
    } else if(currentColor == color(239, 134, 51)){
      synth.triggerAttackRelease("G3", '4n');
      Tone.Transport.stop();
      currentNote = "G2";
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
        } else if(mouseY > 25 && mouseY < 50){
          currentColor = color(239, 134, 51);
          synth.triggerAttackRelease("A4", '8n');
        } else if(mouseY > 50 && mouseY < 75){
          currentColor = color(255, 249, 73);
          synth.triggerAttackRelease("G1", '8n');
        } else if(mouseY > 75 && mouseY < 100){
          currentColor = color(120, 242, 58);
          synth.triggerAttackRelease("B2", '4n');
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
