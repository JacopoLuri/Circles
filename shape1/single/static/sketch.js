function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(220);

    //case 1 static
    strokeWeight(2);
    circle(300, 300, 300);

    strokeWeight(2);
    line(300, 300, 450, 300);

    strokeWeight(10);
    point(300, 300);
    point(450, 300);

    strokeWeight(2);
    textSize(30);
    textFont('Monospace');
    text('Circumference', 195, 140);
    textSize(20);
    text('Center', 265, 325);
    text('Radius', 340, 290);
  }