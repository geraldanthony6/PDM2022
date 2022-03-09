//Declare variables
let city;
let nukedCity;
let peaceful = true;
let peaceText = "Sounds of Peace";
let warText = "Sounds of War";
let curText = peaceText;

//Declare synths and instruments
let synth = new Tone.AMSynth().toDestination();

let nukeSynth = new Tone.MembraneSynth();
const reverb = new Tone.JCReverb(0.8).toDestination();
nukeSynth.connect(reverb);

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

let noise = new Tone.Noise('brown').start();
let noiseEnvelope = new Tone.AmplitudeEnvelope({
    attack: .1,
    decay: .5,
    sustain: 0.4,
    release: 0.2
});
let noiseFilter = new Tone.Filter({
  type: "lowpass",
  frequency: 100
});
noise.connect(noiseEnv);
noiseEnvelope.connect(noiseFilter);
noiseFilter.connect(gain);

function preload(){
  city = createImg('Media/future.jpg');
  nukedCity = createImg('Media/apocalypse.jpg');
}

function setup(){
  createCanvas(1000, 1000);
}

function draw(){

  Tone.start();
  city.position(100, 200);
  nukedCity.position(100, 200);
  let y;
  textSize(30);
  text('Click to travel between the sounds of our possible futures', 20, 100);
  text('Sounds of Peace vs Sounds of War', 150, 180);
  if(peaceful){
    nukedCity.hide();
    city.show();
    if((frameCount % (60 * 4)) === 0)
    {
      synth.triggerAttackRelease("C4", '2n');
      synth.triggerAttackRelease("B5", '4n', '+.25');
      synth.triggerAttackRelease("D5", '8n', '+0.5');
      synth.triggerAttackRelease("F5", '4n', '+0.75');
      synth.triggerAttackRelease("D5", '8n', '+1.25');
      synth.triggerAttackRelease("C4", '4n', '+1.5');
      synth.triggerAttackRelease("A3", '8n', '+1.75');
      synth.triggerAttackRelease("D5", '4n', '+2');
      synth.triggerAttackRelease("F5", '8n', '+2.25');
      synth.triggerAttackRelease("A5", '4n', '+2.5');
      synth.triggerAttackRelease("F5", '8n', '+3');
      synth.triggerAttackRelease("D5", '4n', '+3.25');
      synth.triggerAttackRelease("G3", '8n', '+3.5');
      synth.triggerAttackRelease("C5", '8n', '+3.75');
      synth.triggerAttackRelease("E5", '4n', '+4');
      synth.triggerAttackRelease("B5", '4n', '+4.25');
      synth.triggerAttackRelease("A5", '8n', '+4.75');
      synth.triggerAttackRelease("C5", '4n', '+5');
    }
  } else {
    nukedCity.show();
    city.hide();
    if((frameCount % (60 * 6)) === 0)
    {
      nukeSynth.triggerAttackRelease("G1", .5);
      nukeSynth.triggerAttackRelease("A1", '2n', '+2');
      nukeSynth.triggerAttackRelease("B2", '2n', '+2.5');
      nukeSynth.triggerAttackRelease("C2", '2n', '+3');
      nukeSynth.triggerAttackRelease("C1", 1.5, '+5');
      nukeSynth.triggerAttackRelease("D2", '2n', '+6');
      nukeSynth.triggerAttackRelease("E2", '2n', '+7');
      nukeSynth.triggerAttackRelease("G1", '2n', '+8');
    }
  }
}

function mousePressed(){
  switchTime();
  peaceful = !peaceful;
  frameCount = 0;
}

function switchTime(){
  for(let i = 0; i < 1; i++){
    env.triggerAttackRelease('8n', "+"+i/2);
    noiseEnvelope.triggerAttackRelease('8n', "+"+i/3);
  }
}