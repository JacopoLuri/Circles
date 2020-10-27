let time = 0;
// let framerate = 60;
// var capturer = new CCapture({ format: 'webm', name: 'shape1-single-animated', quality: 1, });
// var capturer = new CCapture({
//   format: 'gif',
//   framerate,
//   verbose: true
// });

// var capturer = new CCapture({ format: 'gif', workersPath: 'gif.worker.js' });

// let capturer = new CCapture({
//   framerate: 60,
//   format: 'gif',
//   workersPath: '/js/*',
//   verbose: true,
//   name: 'shape1-single-animated',
// });

// let gifLength = 180;
let canvas;

function setup() {
  let p5canvas = createCanvas(600, 600);
  canvas = p5canvas;
  movement = 0;
  angleMode(DEGREES);
  // capturer.start();
}
  


function draw() {
  // if (frameCount === 0) {
  //   capturer.start();
  // };

  background(220);
  translate(300, 300);

  //case 1 animated
  strokeWeight(2);
  circle(0, 0, 300);

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


  // if (frameCount < gifLength) {
  //   capturer.capture(canvas);
  // } else if (frameCount === gifLength) {
  //   capturer.stop();
  //   capturer.save();
  // }

  // capturer.capture(canvas);
  
  // let secondsElapsed = frameCount / framerate; 
  // if (secondsElapsed >= 5) { 
  //   capturer.save();
  //   noLoop();}

  
}



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