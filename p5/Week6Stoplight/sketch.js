var myState; //controls switch statement
var timer = 0; //variable to set timer

function setup() {
  // put setup code here
  createCanvas(800, 800);
  background("white");
/* STOPLIGHT BASECODE
  fill("yellow");
  rect(190, 190, 95, 220);
  fill("black");
  rect(200, 200, 75, 200);
  fill("gray");
  ellipse(237.5, 237.5, 60, 60);
  fill("gray");
  ellipse(237.5, 300, 60, 60);
  fill("gray");
  ellipse(237.5, 362.5, 60, 60);
  fill("black");*/

  myState = 0; //moving to state 0


}

function draw() {
  // put drawing code here

  switch (myState) {

    case 0:

      //changes top stoplight circle to red
      background("white");
      fill("yellow");
      rect(190, 190, 95, 220);
      fill("black");
      rect(200, 200, 75, 200);
      fill("red");
      ellipse(237.5, 237.5, 60, 60);
      fill("gray");
      ellipse(237.5, 300, 60, 60);
      fill("gray");
      ellipse(237.5, 362.5, 60, 60);


      //if 500 time increments go by, move to state 1
      if (timer < 500) {

        timer++;
      } else if (timer = 500) {
        timer = 0;
        myState = 1;
      }

      break;

    case 1:

    //bottom light is green
      background("white");
      fill("yellow");
      rect(190, 190, 95, 220);
      fill("black");
      rect(200, 200, 75, 200);
      fill("gray");
      ellipse(237.5, 237.5, 60, 60);
      fill("grey");
      ellipse(237.5, 300, 60, 60);
      fill("green");
      ellipse(237.5, 362.5, 60, 60);

      if (timer < 300) {

        timer++;
      } else if (timer = 300) {
        timer = 0;
        myState = 2;
      }
      break;
      case 2:

      //bottom light is green
        background("white");
        fill("yellow");
        rect(190, 190, 95, 220);
        fill("black");
        rect(200, 200, 75, 200);
        fill("gray");
        ellipse(237.5, 237.5, 60, 60);
        fill("yellow");
        ellipse(237.5, 300, 60, 60);
        fill("grey");
        ellipse(237.5, 362.5, 60, 60);

        if (timer < 100) {

          timer++;
        } else if (timer = 100) {
          timer = 0;
          myState = 0;
        }
        break;


  }
}
