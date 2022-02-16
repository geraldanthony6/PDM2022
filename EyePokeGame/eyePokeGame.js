let eyeBallGroup = [];
let startTime;
let eyes;
let wave;
let numEyes = 30;
let gameState = 'startScreen';
let score = 0;
let timeLeft;
let initDirection = [-1, 1];
let pokedCount = 0;

function preload() {
    eyes = loadImage('SadEyeball-Sheet.png');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    imageMode(CENTER);

    for(let i = 0; i < numEyes; i++){
       eyeBallGroup[i] = new Character(eyes, random(85, window.innerWidth-85), random(85, window.innerHeight - 85), random(3,6), random(initDirection));
    }
}


function draw() {
  background(230, 100, 70);

  
  if(gameState == 'startScreen') {
    textSize(50);
    textAlign(CENTER, CENTER);
    text('Press any key to poke some eyes', 0, height/2, width);
  } else if(gameState == 'gameBegin') {
    for(let i = 0; i < numEyes; i++){
      eyeBallGroup[i].draw();
    }

    let currTime = 30 - timer();
    textAlign(LEFT, TOP); 
    text('Timer: ' + currTime, 30, 30, width);
    text('Score: ' + score, 30, 60, width);

    if(pokedCount == 30 && score > 0){
      for(let t = 0; t < numEyes; t++){
        eyeBallGroup[t] = new Character(eyes, random(85, window.innerWidth-85), random(85, window.innerHeight - 85), random(3,6), random(initDirection));
      }
      wave++;
    }

    if(currTime <= 0) {
      gameState = 'gameOver';
    }
  } else if(gameState == 'gameOver') {
    textSize(50);
    textAlign(CENTER, CENTER);
    text('Game Over', 0, height/2 - 150, width);
    text('Score: ' + score, 0, height/2 - 100, width);
    text('Press any key to start over', 0, height/2 , width);
  }
}


function mousePressed(){
  if(gameState == 'gameBegin') {
    for(let i = 0; i < numEyes; i++) {
      if(!(eyeBallGroup[i].poked)) {
        eyeBallGroup[i].poke();
        if(eyeBallGroup[i].poked) {
          score++;
          pokedCount++;
          for(let k = 0; k < numEyes; k++) {
            eyeBallGroup[k].speed += .05;
          }
        }
      }
    }
  }
}

function keyPressed() {
  if(keyCode == 32 && gameState == 'startScreen') {
    startTime = millis();
    gameState = 'gameBegin';
  } else if(keyCode == 32 && gameState == 'gameOver') {
    for(let q = 0; q < numEyes; q++) {
      eyeBallGroup[q] = new Character(eyes, random(85, window.innerWidth-85), random(85, window.innerHeight - 85), random(3,6), random(initDirection));
    }
    wave = 1;
    startTime = millis();
    gameState = 'gameBegin';
    score = 0;
  }
}

function timer(){
  return int((millis() - startTime) / 1000);
}

class Character {
  constructor(eye, x, y, speed, direction) {
    this.eye = eye;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;
    this.speed = speed;
    this.move = direction;
    this.facing = -direction;
    this.sx = 2;
  }

  draw() {
    push();
    translate(this.x,this.y);
    scale(this.facing);

    if(this.poked) {
      image(eyes, 0, 0, 200, 50, 0, 0, 60, 100);
    } else if(this.move == 0) {
      image(eyes, 0, 0, 200, 100, 60, 0, 60, 100);
    } else {
      image(this.eye, 0, 0, 200, 100, 60 * (this.sx + 1), 0, 60, 100);
    }

    if(frameCount % (15 - (round(this.speed - 2))) == 0) {
      this.sx = (this.sx + 1) % 3;
    }

    if(this.x > window.innerWidth) {
      this.move = -(this.move);
      this.facing = -(this.facing);
    }

    if(this.x < 0) {
      this.move = -(this.move);
      this.facing = -(this.facing);
    }

    this.x += this.speed * this.move;
    pop();
  }

  poke() {
    if(mouseX > this.x - 45 && mouseX < this.x + 45 &&
       mouseY > this.y - 45 && mouseY < this.y + 45) {
        this.move = 0
        this.sx = 2;
        this.poked = true;
    }
  }
}