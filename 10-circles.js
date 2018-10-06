function setup() {
  createCanvas(400, 400);
}

var x = [200]; // new empty array
var y = []; // new empty array

function draw() {
  background(0);
  noFill();
  stroke(255);

  x.push(mouseX); // equivalent to append(x, mouseX)
  y.push(mouseY); // equivalent to append(y, mouseY)

  for (var i = 0; i < x.length; i = i + 10) {
    ellipse(x[i], y[i], 1 + (x.length - i));
  }

  x = x.slice(-90); // keep the last 50 x values
  y = y.slice(-90); // keep the last 50 y values
  //I counted 11 circles when I changed the x and y values both to -100
}
