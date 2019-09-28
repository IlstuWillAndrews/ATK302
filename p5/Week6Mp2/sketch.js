var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {

  switch (myState) {
    case 0:
      background("red");
      break;
    case 1:
      background("blue")
      if (timer == 200) {
        myState = 2;

      }
      break;
    case 2:
      background("green")
      break;
    case 3:
      background("yellow")
      break;
    case 4:
      background("white")
      break;


  }

  function mouseReleased() {
    if ((myState >= 0) && (myState < 4)) {
      myState++;
    } else if (myState == 4) {
      myState = 0;
    }
  }
}
