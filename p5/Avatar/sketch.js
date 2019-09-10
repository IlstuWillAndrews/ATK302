function setup() {
  createCanvas(800, 800);

}

function draw() {
background("white");


if (mouseIsPressed){
background("orange");
fill("#32a852");
rect(400,400,300,10) //body
fill("#546b4f")
triangle(400,440,320,400,400,360)
fill("red")
ellipse(725,400,50,10)
ellipse(720,395,50,10)
fill("white")
ellipse(700,400,10,10)
ellipse(690,395,10,10)
fill("red")

ellipse(700,400,5,5)
ellipse(690,395,5,5)

fill("#7ff59d")
ellipse(535,362.5,40,75)
ellipse(530,447.5,40,75)

fill("black")
line(540,335,530,390)
line(535,470,525,420)

fill("#93a191")
quad(400,510,405,510,450,410,445,410)
quad(470,510,475,510,450,410,445,410)

quad(580,510,585,510,630,410,625,410)
quad(650,510,655,510,630,410,625,410)

fill("blue")
circle(320,400,50)
}

else {
  fill("#32a852");
  rect(400,400,300,10) //body
  fill("#546b4f")
  triangle(400,440,320,400,400,360)
  fill("white")
  ellipse(700,400,10,10)
  ellipse(690,395,10,10)
  fill("black")
  ellipse(700,400,5,5)
  ellipse(690,395,5,5)

  fill("#7ff59d")
  ellipse(550,350,40,100)
  ellipse(530,350,40,100)

  fill("black")
  line(530,380,530,320)
  line(550,380,550,320)

  fill("#93a191")
  quad(440,435,445,435,450,410,445,410)
  quad(450,435,455,435,450,410,445,410)

  quad(620,435,625,435,630,410,625,410)
  quad(630,435,635,435,630,410,625,410)

  fill("blue")
  circle(320,400,10)
}
//fill("black");
//text(mouseX + ", " + mouseY, 20, 20);

}
