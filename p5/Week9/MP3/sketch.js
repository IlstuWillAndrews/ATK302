var bones = [];
var skeletonArray = []
var skeleton;
var kingPos;
var skeleton;
var kingD, kingR, kingL, kingU;
var winScreen, loseScreen;
var titleMusic, gameMusic, winMusic, loseMusic;
var myState = 0;
var timer = 10;
var points = 0;
var myFont;
var castleTexture;
var x = 0;
var vel = .5;
var titlePlay = 0;
var gamePlay = 0;
var winPlay = 0;
var losePlay = 0;
var sword;

function preload() {

  titleMusic = loadSound("assets/titleMusic.mp3")
  gameMusic = loadSound("assets/gameMusic.mp3")
  winMusic = loadSound("assets/winMusic.mp3")
  loseMusic = loadSound("assets/loseMusic.mp3")
  sword = loadSound("assets/SwordShwing.wav")

}



function setup() {
  createCanvas(800, 800);

  skeleton = loadImage("assets/skelly2.png")
  king = loadImage("assets/King_arthurU.png")
  kingD = loadImage("assets/King_arthurD.png")
  kingU = loadImage("assets/King_arthurU.png")
  kingL = loadImage("assets/King_arthurL.png")
  kingR = loadImage("assets/King_arthurR.png")

  skeletonArray[0] = loadImage("assets/skelly2.png");
  skeletonArray[1] = loadImage("assets/skelly2.png");
  skeletonArray[2] = loadImage("assets/skelly2.png");

  castleTexture = loadImage("assets/castleFloor.jpg")
  castle = loadImage("assets/Castle.png");

  winScreen = loadImage("assets/knighting.jpg");
  loseScreen = loadImage("assets/Youredone.jpg");



  myFont = loadFont("assets/HappyMonksMedievalLookingScript.ttf");


  //spawn spooks
  for (var i = 0; i < 40; i++) {
    bones.push(new spook());
  }
  //initialize frog position
  kingPos = createVector(400, 720);

  //centers stuff
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);


}

function draw() {

  switch (myState) {

    case 0:


      if (titlePlay == 0) {
        titleMusic.loop();
        titlePlay = 1;
      }
      background("#3399ff")
      fill("yellow")
      ellipse(750, 50, 200, 200)
      fill("white")
      fill("white");
      ellipse(x - 25, 50, 90, 60);
      ellipse(x + 25, 50, 90, 60);
      ellipse(x, 50, 100, 70);

      ellipse(x + 300, 25, 100, 70);
      ellipse(x + 350, 25, 100, 70);
      ellipse(x + 325, 25, 110, 80);

      ellipse(x + 600, 80, 90, 60);
      ellipse(x + 650, 80, 90, 60);
      ellipse(x + 625, 80, 100, 70);
      x = x + vel;
      if (x > width) {
        x = 0;
      }
      noStroke();
      fill(" #00ff55")
      rect(400, 800, 800, 150);
      image(castle, 400, 400, 800, 800)


      fill("white")
      textSize(80)
      smooth();
      textFont(myFont)
      text("King Castle Defense", 100, 350)
      textSize(50)
      text("Click to Start", 300, 425)
      textSize(30)
      text("750 to win, 50 per Skeleton", 50, 700)
      textSize(25)
      text("W A S D to move", 550, 700)
      break;

    case 1:
      Game();

      // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
      // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
      // this can be used to determine if the number on the left is divisible by the number on the right

      if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer--;
      }
      if (timer == 0) {
        myState = 2;
      }


      if (points == 750) {
        myState = 3;
      }

      break;

    case 2:
      gameMusic.stop();
      gamePlay = 0;
      if (losePlay == 0) {
        loseMusic.loop();
        losePlay = 1;
      }
      background("white")
      imageMode(CORNER)
      image(loseScreen, 0, 0, 800, 800)
      fill("black")
      textSize(70)
      textFont(myFont)
      smooth();
      text("The Castle's been overrun!", 75, 400)
      text("You lose", 300, 500)
      textSize(25)
      text("Click to play again", 325, 700)
      break;

    case 3:
      gameMusic.stop();
      gamePlay = 0;
      if (winPlay == 0) {
        winMusic.loop();
        winPlay = 1;
      }
      background("white")
      imageMode(CORNER)
      image(winScreen, 0, 0, 800, 800)
      fill("black")
      stroke("white")
      textFont(myFont)
      textSize(70)
      smooth();
      text("You've saved the Castle!", 100, 400)
      text("You Win!", 300, 500)
      textSize(25)
      text("Click to play again", 325, 700)
      break;
  }
}

//our spook class
function spook() {
  // attributes
  this.pos = createVector(100, 100) //spook position
  this.vel = createVector(random(-5, 5), random(-5, 5)); //spook velocity
  this.skel = floor(random(skeletonArray.length - 1));

  //methods
  this.display = function() {

    image(skeletonArray[this.skel], this.pos.x, this.pos.y, 50, 50)
  }
  if (this.skel > skeletonArray.length - 1) this.skel = 0;

  this.drive = function() {
    this.pos.add(this.vel)
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
    }
    if (this.pos.x < 0) {
      this.pos.y = height;
    }

  }


}

function keyPressed() {
  if (keyCode == 87) {
    king = kingU;
  }
  if (keyCode == 83) {
    king = kingD;
  }

  if (keyCode == 65) {
    king = kingL;
  }
  if (keyCode == 68) {
    king = kingR;
  }
}
//checkForKeys
function checkForKeys() {
  if (keyIsDown(65)) {
    kingPos.x = kingPos.x - 5;
  }
  if (keyIsDown(68)) {
    kingPos.x = kingPos.x + 5;
  }
  if (keyIsDown(87)) {
    kingPos.y = kingPos.y - 5;
  }
  if (keyIsDown(83)) {
    kingPos.y = kingPos.y + 5;
  }
}

function Game() {
  titleMusic.stop();
  winMusic.stop();
  loseMusic.stop();
  background("gray");
  if (gamePlay == 0) {
    gameMusic.loop();
    gamePlay = 1;
  }
  imageMode(CORNER)
  image(castleTexture, 0, 0, 800, 800)
  fill("black");
  textSize(50)
  text("Score: " + points, 550, 150)
  text("Timer: " + timer, 50, 750)



  if (timer == 0) {

    myState = 2;

  }



  //iterates through the spook array
  for (var i = 0; i < 40; i++) {
    bones.push(new spook());
    bones[i].display();
    bones[i].drive();

    //collisions for if spook is close to spook
    if (bones[i].pos.dist(kingPos) < 50) {
      bones.splice(i, 1);
      points = points + 50;
      sword.stop();
      sword.play();
    }

  }

  image(king, kingPos.x, kingPos.y, 100, 100);
  checkForKeys();
}

function mouseReleased() {
  if (myState == 0) {
    myState = 1;
  }
  if (myState == 2 || myState == 3) {
    points = 0;
    timer = 10;
    winPlay = 0;
    losePlay = 0;
    myState = 1;

  }

}
