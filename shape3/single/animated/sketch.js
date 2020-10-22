function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(220);

    //case 3 static
    strokeWeight(2);
    fill('white');
    circle(300, 300, 450);

    //strokeWeight(1);
    noFill();
    circle(450, 300, 150);
    circle(300, 450, 150);
    circle(150, 300, 150);
    circle(300, 150, 150);

    strokeWeight(2);
    line(425, 300, 550, 300);

    strokeWeight(5);
    point(300, 300);

    strokeWeight(10);
    point(425, 300);
    point(550, 300);

    // text
    fill(0);
    strokeWeight(2);
    textSize(20);
    textFont('Monospace');
    text('Outer Ring', 195, 40);
    text('Inner Ring', 245, 210);
    text('Center', 265, 325);
    text('Radius', 450, 290);
  }