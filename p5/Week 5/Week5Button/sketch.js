var x = 0;


function setup() {
  // put setup code here
  createCanvas(800,800);

}

function draw() {
  // put drawing code here
  background(100);
  fill("black")
  text("Counter: " + x, 25,25);

  fill ("red");
  rect(100, 100, 100, 100);

  fill("black")
  text("Timer: " + i, 500,175);


}
function mouseReleased(){
  if((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200))
  {
    x++;
  }

}
