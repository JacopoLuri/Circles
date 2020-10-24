let time = 0;

function setup() {
  createCanvas(600, 600);
  movement = 0;
  angleMode(DEGREES);
}
  
function draw() {
  background(220);
  translate(300, 300);

  //case 1 animated
  strokeWeight(2);
  circle(0, 0, 300);

  // strokeWeight(2);
  // line(0, 0, 450, 300);

  // strokeWeight(10);
  // point(0, 300);
  // point(0, 300);

  // strokeWeight(2);
  // textSize(30);
  // textFont('Monospace');
  // text('Circumference', 195, 140);
  // textSize(20);
  // text('Center', 265, 325);
  // text('Radius', 340, 290);


  // let sc = second();
  // stroke(0);
  // strokeWeight(5);
  // let scDis = map(sc, 0, 60, 0, 360)
  // push();
  // rotate(scDis);
  // strokeWeight(4);
  // circle(150, 0, 25);
  // pop();

  // x                y                 quadranti
  // 0 --> 150        150 --> 0         ++
  // 150 --> 0        0 --> -150        +-
  // 0 --> -150       -150 --> 0        --
  // -150 --> 0       0 --> 150         -+
  
  // ellipse(x, y, 25, 25);
  // // if(x > 0 && x < 150 && y > 0 && y < 150) {
  //   x = x +1;
  //   y = y +1;
  // };
  
  time = time + 0.3;
  stroke(0);
  strokeWeight(5);
  let move = map(time, 0, 60, 0, 360)
  push();
  rotate(move);
  strokeWeight(4);
  fill(0, 0, 255); 
  ellipse(150, 0, 25, 25);
  pop();




}

