var cars = [];
var frogPos;

function setup() {
  createCanvas(800, 800);
  frogPos = createVector(400, 720);

}

function draw() {
  background("Grey");

  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();

  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
    cars[i].display();
    cars[i].drive();

    //collisions
    if(cars[i].pos.dist(frogPos) < 20){
      cars.splice(i,1);
    }

  }


}

//our car class
function Car() {
  // attributes

  this.pos = createVector(100, 100)
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255)
  this.g = random(255)
  this.b = random(255)

  //methods
  this.display = function() {
    fill(this.r, this.g, this.b)
    rect(this.pos.x, this.pos.y, 100, 50);
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

function checkForKeys() {
  if (keyIsDown(65)) {
    frogPos.x = frogPos.x - 5;
  }
  if (keyIsDown(68)) {
    frogPos.x = frogPos.x + 5;
  }
  if (keyIsDown(87)) {
    frogPos.y = frogPos.y - 5;
  }
  if (keyIsDown(83)) {
    frogPos.y = frogPos.y + 5;
  }
}
