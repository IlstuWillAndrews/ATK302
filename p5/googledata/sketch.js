var namesArray = [];
var springCount, summerCount, fallCount, winterCount;
var titleX = 0;
function setup() {

  springCount = 0;
  summerCount = 0;
  fallCount = 0;
  winterCount = 0;

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '15jRBbrP2g9fslhuptnXUMWGqurZ8MDCSCe03-S2KtuU'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  spring = loadImage("Spring Icon.png");
  summer = loadImage("Summer Icon.png");
  fall = loadImage("Fall Icon.png");
  winter = loadImage("Winter Icon.png");

  rain = loadImage("rain.png")
  sun = loadImage("sun.png")
  leaf = loadImage("leaf.png")
  snow = loadImage("snow.png")


}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Seasons(data[i].Name, data[i]["What's your Favorite Season"]));

    if (data[i]["What's your Favorite Season"] == "Spring") {
      springCount++;
    }
    if (data[i]["What's your Favorite Season"] == "Summer") {
      summerCount++;
    }
    if (data[i]["What's your Favorite Season"] == "Fall") {
      fallCount++;
    }
    if (data[i]["What's your Favorite Season"] == "Winter") {
      winterCount++;
    }

  }

  console.log("SpringCount: " + springCount)
  console.log("SummerCount: " + summerCount)
  console.log("FallCount: " + fallCount)
  console.log("WinterCount: " + winterCount)

}

function draw() {

  background('purple');
if (titleX < 931){
  titleX++;
}
if (titleX > 930){
  titleX = -400;
}



  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }
  //spring
  fill("black")
  textSize(15)
  image(spring, 150, 150, 25 * springCount, 25 * springCount);
  text("People that like spring the best: " + springCount, 150, 200, );

  //summer

  image(summer, 450, 150, 25 * summerCount, 25 * summerCount);
  text("People that like summer the best: " + springCount, 450, 200, );

  //fall

  image(fall, 150, 450, 25 * fallCount, 25 * fallCount);
  text("People that like fall the best: " + fallCount, 150, 525, );
  //winter

  image(winter, 450, 450, 25 * winterCount, 25 * winterCount);
  text("People that like winter the best: " + winterCount, 450, 525, );
  // // iterate through the namesArray and display the objects!
  textSize(50)
  text("What is your favorite season?", titleX, 50)

}


// my Seasons class
function Seasons(myName, mySeason) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.Seasons = mySeason;
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-3, 3), random(-3, 3));


  this.display = function() {
    if (this.Seasons == "Spring") {
      image(rain, this.pos.x, this.pos.y, 25 * springCount, 25 * springCount);
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
    if (this.Seasons == "Summer") {
      image(sun,this.pos.x, this.pos.y, 25 * summerCount, 25 * summerCount);
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
    if (this.Seasons == "Fall") {
    image(leaf, this.pos.x, this.pos.y, 25 * fallCount, 25 * fallCount);
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
    if (this.Seasons == "Winter") {
      image(snow, this.pos.x, this.pos.y, 25 * winterCount, 25 * winterCount);
      this.pos.add(this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
    fill("black")
    textSize(10)
    text(this.name, this.pos.x, this.pos.y);
  }

}
