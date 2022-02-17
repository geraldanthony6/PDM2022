
let sounds = new Tone.Players({
    'chord1': 'sounds/pianochord1.wav',
    'chord2': 'sounds/pianochord2.wav',
    'chord3': 'sounds/pianochord3.mp3',
    'chord4': 'sounds/pianochord4.wav'
});

let button = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  sounds.toDestination();

  button[0] = createButton('chord1');
  button[0].position(window.innerWidth/2 - 150, window.innerHeight/2);
  button[0].mousePressed( ()=> playSound('chord1'));

  button[1] = createButton('chord2');
  button[1].position(window.innerWidth/2 - 50, window.innerHeight/2);
  button[1].mousePressed( ()=> playSound('chord2'));

  button[2] = createButton('chord3');
  button[2].position(window.innerWidth/2 + 50, window.innerHeight/2);
  button[2].mousePressed( ()=> playSound('chord3'));

  button[3] = createButton('chord4');
  button[3].position(window.innerWidth/2 + 150, window.innerHeight/2);
  button[3].mousePressed( ()=> playSound('chord4'));
}

function draw() {
  background(150);

  textAlign(CENTER);
  textSize(100);
  text('Sampler', window.innerWidth/2, window.innerHeight/6);
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