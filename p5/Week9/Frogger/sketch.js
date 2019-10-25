var cars = [];
var frogPos;
var myState = 0;
var timer = 10;
var points = 0;
var Skeleton;
var King;


function setup() {
  createCanvas(800, 800);

  Skeleton = loadImage("skelly2.png")
  King = loadImage("King_arthur.png")


  //spawn cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  //initialize frog position
  frogPos = createVector(400, 720);

  //centers stuff
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

}

function draw() {

  switch (myState) {

    case 0:
      background("white")
      image(castle,20,100);
      fill("white")
      textSize(40)
      smooth();
      text("Its a game", 200, 400)
      textSize(20)
      text("700 to win, 50 a thing", 200, 500)
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


      if (points == 500) {
        myState = 3;
      }

      break;

    case 2:
      background("black")
      fill("white")
      textSize(40)
      smooth();
      text("Lose", 200, 400)
      break;

    case 3:
      fill("black")
      textSize(40)
      smooth();
      text("win", 200, 400)
      text(timer, 200, 200)
      break;
  }



  //our car class
  function Car() {
    // attributes
    this.pos = createVector(100, 100) //car position
    this.vel = createVector(random(-5, 5), random(-5, 5)); //car velocity
    this.r = random(255) //for random red
    this.g = random(255) //for random green
    this.b = random(255) //for random blue

    //methods
    this.display = function() {
      fill(this.r, this.g, this.b)
      rect(this.pos.x, this.pos.y, 100, 50);
      ellipse(this.pos.x + 30, this.pos.y + 30, 25, 25)
      ellipse(this.pos.x - 30, this.pos.y + 30, 25, 25)
    }

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
  //checkForKeys
  function checkForKeys() {
    if (keyIsDown(65) || keyIsDown(37)) {
      frogPos.x = frogPos.x - 5;
    }
    if (keyIsDown(68) || keyIsDown(39)) {
      frogPos.x = frogPos.x + 5;
    }
    if (keyIsDown(87) || keyIsDown(38)) {
      frogPos.y = frogPos.y - 5;
    }
    if (keyIsDown(83) || keyIsDown(40)) {
      frogPos.y = frogPos.y + 5;
    }
  }

  function Game() {
    background("Grey");
    fill("black");
    textSize(50)
    text("Score: " + points, 550, 150)
    text("Timer: " + timer, 50, 750)



    if (timer == 0) {

      myState = 2;

    }



    //iterates through the car array
    for (var i = 0; i < 40; i++) {
      cars.push(new Car());
      cars[i].display();
      cars[i].drive();

      //collisions for if car is close to car
      if (cars[i].pos.dist(frogPos) < 50) {
        cars.splice(i, 1);
        points = points + 50;
      }

    }
    fill("green");
    ellipse(frogPos.x, frogPos.y, 50, 50);
    checkForKeys();
  }

  function mouseReleased() {
    if (myState == 0) {
      myState = 1;
    }

  }
