function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(255);

  for (var x = 40; x < width + 40; x = x + 40) {
    line(x, height/2, x+100, height/2-75);
  }
}
