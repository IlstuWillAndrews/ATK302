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
  createCanvas(1500, 800);
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
      birdCreate.position(650, 500);
      birdCreate.size(200, 200)
      fill("white")
      textFont("Cora")
      textSize(80)
      smooth();
      text("Sustenance for a Mindset", 375, 400);
      if (birdPlay == 0) {
        birdSounds.loop();
        birdPlay = 1;
      }
      fill("blue");
      rect(1250, 650, 200, 100);
      fill("white");
      rect(1262.5, 665, 175, 75);
      fill("black")
      textSize(35)
      text("Start", 1315, 712.5)









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

      image(sun, 750, 400, x, y)
      fill("white")

      stroke("black")
      textFont("Cora")
      textSize(40)
      smooth();
      if (timer < 1800) {
        text(' If life is not what it seems and is but a dream \n of a God from a faraway land', 375, 300)
        smooth();
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
        text(' If life is not what it seems and is but a dream \n of a God from a faraway land \n undergoing eternity, navigating uncertainty \n Then if I think then therefore I am?', 375, 300)
        smooth();
        chords.stop();
        if (playSong == 0) {
          melody.loop();
          playSong = 1;
        }

      }


      fill("blue");
      rect(1250, 650, 200, 100);
      fill("white");
      rect(1262.5, 665, 175, 75);
      fill("black")
      textSize(35)
      text("Continue", 1287.5, 712.5)


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
      image(sun, 750, 400, x, y)
      fill("white")
      stroke("black")
      textFont("Cora")
      textSize(40)
      if (timer < 1800) {
        text(' For if I live boundless and brave; Sound and safe \n Am I still trapped in the winds of my fate', 375, 300)
        smooth();
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
        text(' For if I live boundless and brave; Sound and safe \n Am I still trapped in the winds of my fate \n Am I a man living free, or an actor of plans \n living my time on a stage ', 375, 300)
        smooth();
        drums.stop();
        if (playSong == 0) {
          bass.loop();
          playSong = 1;
        }

      }


      fill("blue");
      rect(1250, 650, 200, 100);
      fill("white");
      rect(1262.5, 665, 175, 75);
      fill("black")
      textSize(35)
      text("Continue", 1287.5, 712.5)

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
      image(sun, 750, 400, x, y)
      fill("white")
      stroke("black")
      textFont("Cora")
      textSize(40)
      if (timer < 1800) {
        text('"For I must be free" stirs within \n But sometimes I feel the strings pull', 375, 300)
        smooth();
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
        text('"For I must be free" stirs within \n But sometimes I feel the strings pull \n I am a puppet perhaps, doing a dance \n I created all on my own', 375, 300)
        smooth();
        pad.stop();
        if (playSong == 0) {
          lead.loop();
          playSong = 1;
        }

      }


      fill("blue");
      rect(1250, 650, 200, 100);
      fill("white");
      rect(1262.5, 665, 175, 75);
      fill("black")
      textSize(35)
      text("Continue", 1287.5, 712.5)

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
      image(sun, 750, 400)
      stroke("black")
      textFont("Cora")
      textSize(40)
      if (timer < 1780) {
        text(' I must believe I am writing the script \n Each choice another stroke of the pen ', 375, 300)
        smooth();
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
        text(' I must believe I am writing the script \n Each choice another stroke of the pen \n Who I am? I may never know \n But control is mine my friend', 375, 300)
        smooth();
        leadmelody.stop();
        if (playSong == 0) {
          final.loop();
          playSong = 1;
        }

      }


      fill("blue");
      rect(1250, 650, 200, 100);
      fill("white");
      rect(1262.5, 665, 175, 75);
      fill("black")
      textSize(35)
      text("Continue", 1287.5, 712.5)
      break;

    case 5:
      background("black")
      birdCreate.position(650, 500);
      birdCreate.size(200, 200)
      fill("white")
      textFont("Cora")
      textSize(80)
      smooth();
      text("Sustenance for a Mindset", 375, 400);
      if (birdPlay == 0) {
        birdSounds.loop();
        birdPlay = 1;
      }
      fill("blue");
      rect(1250, 650, 200, 100);
      fill("white");
      rect(1262.5, 665, 175, 75);
      fill("black")
      textSize(35)
      text("Restart", 1315, 712.5)


  }

}

function mouseReleased() {
  if (myState < 5) {
    if ((mouseX > 1250) && (mouseX < 1450) && (mouseY < 750) && (mouseY > 650)) {
      myState++;
      timer = 0;
      imageSize = 0;
      playSong = 0;
      birdPlay = 0;
    }
  } else if (myState >= 5) {
    myState = 1;
  }

}
