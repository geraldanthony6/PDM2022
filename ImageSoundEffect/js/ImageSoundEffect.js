let city;
let nukedCity;
let peaceful = true;


let synth = new Tone.AMSynth().toDestination();

let nukeSynth = new Tone.MembraneSynth();
const reverb = new Tone.JCReverb(0.5).toDestination();
nukeSynth.connect(reverb);

let osc =  new Tone.AMOscillator(500, 'sine', 'sine').start();
let gain = new Tone.Gain().toDestination();
let pan = new Tone.Panner().connect(gain);
let env = new Tone.AmplitudeEnvelope({
  attack: 0.9,
  decay: 0.3,
  sustain: 1.0,
  release: 0.7
}).connect(pan);
osc.connect(env);

let freqLFO = new Tone.LFO(4, 300, 1000).start();
freqLFO.connect(osc.frequency);

function preload(){
  city = createImg('Media/Cartoon_City.jpg');
  nukedCity = createImg('Media/apocalypse.jpg');
}

function setup(){
  createCanvas(1000, 1000);
}

function draw(){

  Tone.start();
  city.position(10, 10);
  nukedCity.position(10, 10);

  if(peaceful){
    nukedCity.hide();
    city.show();
    if((frameCount % (60 * 6)) === 0)
    {
      synth.triggerAttackRelease("C4", 1.75);
      synth.triggerAttackRelease("B5", '8n', '+.25');
      synth.triggerAttackRelease("D5", '8n', '+0.5');
      synth.triggerAttackRelease("F5", '4n', '+0.75');
      synth.triggerAttackRelease("D5", '8n', '+1.25');
      synth.triggerAttackRelease("B5", '8n', '+1.5');
      synth.triggerAttackRelease("A3", 1.75, '+1.75');
      synth.triggerAttackRelease("D5", '8n', '+2');
      synth.triggerAttackRelease("F5", '8n', '+2.25');
      synth.triggerAttackRelease("A5", '4n', '+2.5');
      synth.triggerAttackRelease("F5", '8n', '+3');
      synth.triggerAttackRelease("D5", '8n', '+3.25');
      synth.triggerAttackRelease("C2", 1.75, '+3.5');
      synth.triggerAttackRelease("C5", '8n', '+3.75');
      synth.triggerAttackRelease("E5", '8n', '+4');
      synth.triggerAttackRelease("G5", '4n', '+4.25');
      synth.triggerAttackRelease("E5", '8n', '+4.75');
      synth.triggerAttackRelease("C5", '8n', '+5');
    }
  } else {
    nukedCity.show();
    city.hide();
    if((frameCount % (60 * 11)) === 0)
    {
      nukeSynth.triggerAttackRelease("G1", 1.5);
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
  nukeDrop();
  peaceful = !peaceful;
  frameCount = 0;
}

function nukeDrop(){
  for(let i = 0; i < 1; i++){
    env.triggerAttackRelease('8n', "+"+i/2);
  }
}