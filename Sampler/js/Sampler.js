
let sounds = new Tone.Players({
    'chord1': 'sounds/pianochord1.wav',
    'chord2': 'sounds/pianochord2.wav',
    'chord3': 'sounds/pianochord3.mp3',
    'chord4': 'sounds/pianochord4.wav'
});

let button = [];

let slider;

const delay = new Tone.FeedbackDelay("8n", 0.5);
delay.delayTime.value = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);

  sounds.connect(delay);
  delay.toDestination();


  button[0] = createButton('chord1');
  button[0].position(10, 200);
  button[0].size(width/2-5, height/ 2-10);
  button[0].mousePressed( ()=> playSound('chord1'));

  button[1] = createButton('chord2');
  button[1].position(width/2, 200);
  button[1].size(width/2-5, height/2 - 10);
  button[1].mousePressed( ()=> playSound('chord2'));

  button[2] = createButton('chord3');
  button[2].position(10, 550);
  button[2].size(width/2 - 5, height/2 - 100);
  button[2].mousePressed( ()=> playSound('chord3'));

  button[3] = createButton('chord4');
  button[3].position(width/2, 550);
  button[3].size(width/2 - 5, height/2 - 100);
  button[3].mousePressed( ()=> playSound('chord4'));

  slider = createSlider(0, 1, 0, 0, 0.1);
  slider.mouseReleased( ()=> {
     let delayTime = slider.value();
     delay.delayTime.value = delayTime;
  });
}

function draw() {
  background(150);

  textAlign(CENTER);
  textSize(80);
  text('Piano Chords Sampler', window.innerWidth/2, window.innerHeight/6);

  textAlign(CENTER);
  textSize(20);
  text('Delay Effect', 60, 960);
}

function playSound(whichChord) {
  if(whichChord === 'chord1'){
    sounds.player('chord1').start();
  } else if(whichChord === 'chord2'){
    sounds.player('chord2').start();
  } else if(whichChord === 'chord3'){
    sounds.player('chord3').start();
  } else if(whichChord === 'chord4'){
    sounds.player('chord4').start();
  }
}