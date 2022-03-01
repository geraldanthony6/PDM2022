
let slider;
const synthDrum = new Tone.MembraneSynth({
  "frequency"  : 50 ,
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

const reverb = new Tone.JCReverb(0).toDestination();
// const osc = new Tone.OmniOscillator("A#2", "pwm").start();

// osc.connect(reverb);
synthDrum.connect(reverb);

let notes = {
  'q': 'A1',
  'w': 'B1',
  'e': 'C1',
  'r': 'D1',
  't': 'E1',
  'y': 'F1',
  'u': 'G1',
  'i': 'A2',
  'o': 'B2',
  'p': 'C2',
  'a': 'D2',
  's': 'E2',
  'd': 'F2',
  'f': 'G2',
  'g': 'A3',
  'h': 'B3',
  'j': 'C3',
  'k': 'D3',
  'l': 'E3',
  'z': 'F3',
  'x': 'G3',
  'c': 'A4',
  'v': 'B4',
  'b': 'C4',
  'n': 'D4',
  'm': 'E4'
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  synthDrum.release = 1;
  synthDrum.resonance = 0.98;

  slider = new Nexus.Slider('#slider');
  slider.on('change', (v)=> {
    reverb.roomSize.value = v;
 });
}

function draw() {
  background(100);

  textSize(30);
  text('Press keys to play synth!', 20, 50);
}

function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);
  synthDrum.triggerAttackRelease(toPlay, 0.5);
}
