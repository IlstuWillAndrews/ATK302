var myState = 0;




function setup() {
  // put setup code here

  createCanvas(800,800);
}

function draw() {
  // put drawing code here
  switch(myState){
    case 0:
    background("red");
    break;

    case 1:
    background("blue");
    break;

    case 3:
    background("green");
    break;

    case 4:
    background("yellow");
    break;
  }


}
function mouseReleased(){

  myState++;

  //console.log("darn");

    if (myState > 4)
    {
    myState = 0;
    }
}
