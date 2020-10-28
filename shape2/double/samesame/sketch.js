let time = 0;

function setup() {
  createCanvas(600, 600);
  movement = 0;
  angleMode(DEGREES);
}

  function draw() {
    background(220);
    translate(300, 300);

    //case 2 animated
    strokeWeight(2);
    fill('white');
    circle(0, 0, 500);

    //strokeWeight(1);
    fill(220);
    circle(0, 0, 250);

    time = time + 0.2;
    stroke(0);
    strokeWeight(5);
    let move = map(time, 0, 60, 0, 360)
    push();
    rotate(move);
    strokeWeight(4);
    fill(0, 0, 255);
    ellipse(5, -250, 25, 25);
    fill(255, 0, 0);
    ellipse(-5, -250, 25, 25);
    pop();
  }