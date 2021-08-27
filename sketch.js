let player;
let pImg;
let oImg;
let bg;
let gameover;
let GreenShell;
let obstacles = [];
let wordClassifier;

function preload() {
  pImg = loadImage("mario-play.png");
  oImg = loadImage("obstacle.png");
  GreenShell = loadImage("GreenShell-obstacle.png");
  bg = loadImage("bg.jpg");
  gameover = loadImage("gameover.png");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(800, 600);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  if (results[0].label === "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bg);
  let rnd = random(1);
  if (rnd < 0.009 && rnd > 0.007) {
    obstacles.push(new Obstacle());
  } else if (rnd <= 0.007) {
    obstacles.push(new Obstacle1());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs)) {
      console.log("Game Over!");

      image(gameover, 0, 0, 200, 200);
      noLoop();
    }
  }
  player.show();
  player.move();
}
