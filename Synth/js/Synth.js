const synth = new Tone.MembraneSynth();

//const reverb = new Tone.JCReverb(0.4).toDestination();
synth.toDestination();


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
  synth.release = 1;
  synth.resonance = 0.98;
  // synth.harmonicity.value = 1.25;
  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");
}

function draw() {
  background(100);
}

function keyPressed() {
  let toPlay = notes[key];

  synth.triggerAttackRelease(toPlay, 0.1);

  // drum.triggerAttackRelease("C2", "8n", '+1');
}