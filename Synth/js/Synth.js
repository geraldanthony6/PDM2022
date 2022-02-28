const synthDrum = new Tone.MembraneSynth({
  "frequency"  : 45 ,
"envelope"  : {
  "attack"  : 0.001 ,
  "decay"  : 0.4 ,
  "release"  : 0.2
}  ,
"harmonicity"  : 8.5 ,
"modulationIndex"  : 40 ,
"resonance"  : 300 ,
"octaves"  : 1.5
});

const reverb = new Tone.JCReverb(0.4).toDestination();
synthDrum.connect(reverb);

let notes = {
  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  synthDrum.release = 1;
  synthDrum.resonance = 0.98;
}

function draw() {
  background(100);
}

function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);
  synthDrum.triggerAttackRelease(toPlay, 0.5);
}
