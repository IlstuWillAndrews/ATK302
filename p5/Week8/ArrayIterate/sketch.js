function setup() {
  // put setup code here
  var rappers = [];

  rappers[0] = "Eminem";
  rappers[1] = "Tupac";
  rappers[2] = "Tech N9ne";
  rappers[3] = "E40";
  rappers[4] = "Childish Gambino";

  var comedians = [];

  comedians[0] = "Donald Glover";
  comedians[1] = "Joe Rogan";
  comedians[2] = "Ellen Degeneres";
  comedians[3] = "Jerry Seinfeld";
  comedians[4] = "George Carlin";
  comedians[5] = "Kevin Hart";
  comedians[6] = "John Mulaney";

  for (var i = 0; i < rappers.length; i++) {
    console.log(rappers[i]);
  }
  for (var i = 0; i < comedians.length; i++) {
    console.log(comedians[i]);
  }

  var randomNumbers = new Array(100);

  for (var i = 0; i < 100; i++) {
    randomNumbers[i] = random(100);

    console.log("the number in space" + i + " = " + randomNumbers[i]);
  
}

}

function draw() {
  // put drawing code here
}
