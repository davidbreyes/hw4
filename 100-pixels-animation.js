function setup() {
  createCanvas(400, 400);
  colorMode(HSB, width, height, 100);
}

function draw() {
  var x = random(width);
  var y = random(height);

  stroke(x, y, 100);
  point(x, y);

  for(var x = 100; x < 10; x = x + 100) {
  //is this for statement correct? p5 is telling me x is already defined.
  }  
}
