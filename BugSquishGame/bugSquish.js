

let startTime;
let eyeBallImages = []; 
let scoreCount;
let gameState = 'StartScreen';

function preload(){
  for(let i = 0; i < 8; i++){
  eyeBallImages[i] = loadImage("Angry Eyeball-Sheet" + (i + 1) + ".png");
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(255);
    if(gameState == 'StartScreen') {
      textSize(30);
      text("Press any key to start!", 100, 200);
      if(mouseIsPressed) {
        startTime = millis();
        gameState = 'GamePlay';
      }
    } else if(gameState == 'GamePlay') {
      let time = timer();
      text("Time " + (30 - time), 10, 30);
      if(time >= 30) {
        gameState = 'GameOver';
      }
    } else if(gameState == 'GameOver'){
      text("Game Over", 100, 300);
      text("Press any key to restart")
      if(mouseIsPressed)
      {

      }
    }
    text("Score " + scoreCount, 10, 100);
    //animateBug(200, 200, snial);
    
  }

  function timer(){
    return int((millis() - startTime) / 1000);
  }

  function mousePressed() {
    scoreCount++;
  }


  



