var breathtaking;
var wd;
var song1;

function preload(){

wd = loadFont("assets/wingding.ttf");
song1 = loadSound('assets/Music.mp3');
}


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
breathtaking = loadImage("assets/Keanu.jpg");
song1.play();

}

function draw() {
  // put drawing code here
  image(breathtaking,20,100);
  fill("black");
  textFont(wd);
  textSize(36);
  text("abcdefghijklmnopqrstuvwxyz", 10, 50);
}
