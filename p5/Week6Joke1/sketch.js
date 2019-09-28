var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  background("blue");
}

function draw() {
  // put drawing "code here

  switch (myState) {
    case 0:
      background("blue");
      fill("white");
      text("What do you call an aligator wearing a vest", 50, 50);
      break;

    case 1:
      background("green");
      fill("white");
      text("What do you call an aligator wearing a vest", 50, 50)
      text("An Investigator", 50, 100);
      break;


  }


}

function mouseReleased() {
myState ++;
if (myState > 1){
  myState = 0;
}

}
