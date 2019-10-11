var bands = ["D12", "Grateful Dead", "Queen", "NWA", "Rage Against the Machine", "Metallica", "The Jonas Brothers"];
var aRandomBand = "";

function setup() {
  // put setup code here.
  createCanvas(800, 800)
  textAlign(CENTER, CENTER)


}

function draw() {
  // put drawing code here
  background("black")

  fill("white");
  text(aRandomBand, width / 2, height / 2);
  textSize(48);
}

function mouseClicked() {
  var i = floor(random(bands.length));

  aRandomBand = bands[i];
}
