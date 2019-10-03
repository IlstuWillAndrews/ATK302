var myState = 0;
var x = 0;
var y = 0;
var imageSize = 0;
var timer = 0;
var birdPlay = 0;
var playSong = 0;
var birdSounds;
var chords;
var melody;
var sun;
var birdLoad;
var birdCreate;

function preload() {

  birdSounds = loadSound("assets/Amazing Natural Bird Sounds.mp3")
  chords = loadSound("assets/Sustinance Loops/PianoOnlyChords.wav")
  melody = loadSound("assets/Sustinance Loops/PianoOnlyLoop.wav")
  drums = loadSound("assets/Sustinance Loops/PianoKickSnareLoop.wav")
  bass = loadSound("assets/Sustinance Loops/PianoDrumsBassloop.wav")
  pad = loadSound("assets/Sustinance Loops/PianoDrumsBassPadLoop.wav")
  lead = loadSound("assets/Sustinance Loops/lead.wav")
  leadmelody = loadSound("assets/Sustinance Loops/leadmelody.wav")
  final = loadSound("assets/Sustinance Loops/Final.wav")
  birdLoad = loadImage("assets/happybird.gif")
  birdCreate = createImg("assets/happybird.gif")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
  timer = 0;
  sun = loadImage("assets/god-like-sphere.png");
  imageMode(CENTER)


  imageSize = 0;



}

function draw() {
  state();


}

function state() {


  switch (myState) {

    case 0:
      background("black")
      birdCreate.position(width / 2 - 100, height / 2 + 100);
      birdCreate.size(200, 200)
      fill("white")
      textFont("Cora")
      textSize(80)
      text("Sustinance for a Mindset", width / 4, height / 2);
      if (birdPlay == 0) {
        birdSounds.loop();
        birdPlay = 1;
      }
      fill("blue");
      rect(width / 2 + 500, height / 2 + 250, 200, 100);
      fill("white");
      rect(width / 2 + 512.5, height / 2 + 265, 175, 75);
      fill("black")
      textSize(35)
      text("Start", width / 2 + 565, (height / 2) + 312.5)









      break;

    case 1:

      background("black")
      birdCreate.remove();
      birdSounds.stop();
      if (imageSize < 3600) {
        x = x + .05;
        y = y + .05;
        imageSize++
      }

      image(sun, width / 2, height / 2, x, y)
      fill("white")
      stroke("blue")
      textFont("Cora")
      textSize(40)
      if (timer < 1800) {
        text(' If life is not what it seems and is but a dream \n of a God from a far away land', width / 4, height / 2 - 100)

        if (playSong == 0) {
          chords.loop();
          playSong = 1;
        }
        timer++;
      }
      if (timer == 1800) {
        playSong = 0;
        timer++
      }
      if (timer > 1800) {
        text(' If life is not what it seems and is but a dream \n of a God from a far away land \n undergoing eternity, navigating uncertainty \n Then if I think then therefore I am?', width / 4, height / 2 - 100)
        chords.stop();
        if (playSong == 0) {
          melody.loop();
          playSong = 1;
        }

      }


      fill("blue");
      rect(width / 2 + 500, height / 2 + 250, 200, 100);
      fill("white");
      rect(width / 2 + 512.5, height / 2 + 265, 175, 75);
      fill("black")
      textSize(35)
      text("Continue", width / 2 + 537.5, (height / 2) + 312.5)


      break;
    case 2:
      if (imageSize < 3600) {
        x = x + .25;
        y = y + .25;
        imageSize++
      }
      chords.stop()
      melody.stop()
      background("black")
      image(sun, width / 2, height / 2, x, y)
      fill("white")
      stroke("blue")
      textFont("Cora")
      textSize(40)
      if (timer < 1800) {
        text(' For if I live boundless and brave; Sound and safe \n Am I still trapped in the winds of my fate', width / 4, height / 2 - 100)

        if (playSong == 0) {
          drums.loop();
          playSong = 1;
        }
        timer++;
      }
      if (timer == 1800) {
        playSong = 0;
        timer++
      }
      if (timer > 1800) {
        text(' For if I live boundless and brave; Sound and safe \n Am I still trapped in the winds of my fate \n Am I a man living free, or an actor of plans \n living my time on a stage ', width / 4, height / 2 - 100)
        drums.stop();
        if (playSong == 0) {
          bass.loop();
          playSong = 1;
        }

      }


      fill("blue");
      rect(width / 2 + 500, height / 2 + 250, 200, 100);
      fill("white");
      rect(width / 2 + 512.5, height / 2 + 265, 175, 75);
      fill("black")
      textSize(35)
      text("Continue", width / 2 + 537.5, (height / 2) + 312.5)

      break;
    case 3:
      drums.stop()
      bass.stop()
      if (imageSize < 3600) {
        x = x + .5;
        y = y + .5;
        imageSize++
      }

      background("black")
      image(sun, width / 2, height / 2, x, y)
      fill("white")
      stroke("blue")
      textFont("Cora")
      textSize(40)
      if (timer < 1800) {
        text('"For I must be free" stirs within \n But sometimes I feel the strings pull', width / 4, height / 2 - 100)

        if (playSong == 0) {
          pad.loop();
          playSong = 1;
        }
        timer++;
      }
      if (timer == 1800) {
        playSong = 0;
        timer++
      }
      if (timer > 1800) {
        text('"For I must be free" stirs within \n But sometimes I feel the strings pull \n I am a puppet perhaps, doing a dance \n I created all on my own', width / 4, height / 2 - 100)
        pad.stop();
        if (playSong == 0) {
          lead.loop();
          playSong = 1;
        }

      }


      fill("blue");
      rect(width / 2 + 500, height / 2 + 250, 200, 100);
      fill("white");
      rect(width / 2 + 512.5, height / 2 + 265, 175, 75);
      fill("black")
      textSize(35)
      text("Continue", width / 2 + 537.5, (height / 2) + 312.5)
      break;
    case 4:
      lead.stop()
      pad.stop()
      var forever = 1;
      if (forever = 1) {
        x = x + 1;
        y = y + 1;
        imageSize++
      }

      background("black")
      image(sun, width / 2, height / 2, x, y)
      fill("white")
      stroke("blue")
      textFont("Cora")
      textSize(40)
      if (timer < 1780) {
        text(' I must believe I am writing the script \n Each choice another stroke of the pen ', width / 4, height / 2 - 100)

        if (playSong == 0) {
          leadmelody.loop();
          playSong = 1;
        }
        timer++;
      }
      if (timer == 1780) {
        playSong = 0;
        timer++
      }
      if (timer > 1780) {
        text(' I must believe I am writing the script \n Each choice another stroke of the pen \n Who I am? I may never know \n But control is mine my friend', width / 4, height / 2 - 100)
        leadmelody.stop();
        if (playSong == 0) {
          final.loop();
          playSong = 1;
        }

      }


      fill("blue");
      rect(width / 2 + 500, height / 2 + 250, 200, 100);
      fill("white");
      rect(width / 2 + 512.5, height / 2 + 265, 175, 75);
      fill("black")
      textSize(35)
      text("Continue", width / 2 + 537.5, (height / 2) + 312.5)
      break;
  }

}

function mouseReleased() {
  if (myState < 4) {
      if ((mouseX > width / 2 + 500) && (mouseX < width / 2 + 700) && (mouseY < height / 2 + 350) && (mouseY > height / 2 + 250))
       {
        myState++;
        timer = 0;
        imageSize = 0;
        playSong = 0;
        }
    }
    else if (myState >= 4) {
      myState = 0;
  }

}
