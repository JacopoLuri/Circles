let time = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}
  
function draw() {
  background(220);
  translate(300, 300);

  
  strokeWeight(2);
  circle(0, 0, 300);

  time = time + 0.3;
  stroke(0);
  strokeWeight(5);
  let move = map(time, 0, 60, 0, 360);

  push();
  rotate(move);
  strokeWeight(4);
  fill(0, 0, 255); 
  ellipse(5, -150, 25, 25);
  pop();

  push();
  rotate(move);
  strokeWeight(4);
  fill(255, 0, 0);
  ellipse(-5, -150, 25, 25);
  pop();
}

