var rectSideLength = 10;
var slowRate = 2;
var loopFrameCount = 40;
var value = 0;

function calculatorFactory(range, adjustFrame, adjustPis) {
  adjustFrame = adjustFrame || 0;
  adjustPis = adjustPis || 0;
    var zeroPis = range / 2;
    var a = Math.cbrt(zeroPis * 3 * slowRate);
    return function (t) {
    t = t % loopFrameCount;
    t = t - adjustFrame;
    return Math.floor( (t * t * t / 3 - t * t * a + a * a * t) / slowRate) + adjustPis; 
    }
}

var paths = [
  {
  x: function(i) {return floor(400 / 2 - 70);},
  y: calculatorFactory(400, 0, 70)
  },{
  x: function(i) {return floor(400 / 2 - 30);},
  y: calculatorFactory(400, 3, 30)
  },{
  x: function(i) {return floor(400 / 2 + 10);},
  y: calculatorFactory(400, 6, -10)
  },{
  x: function(i) {return floor(400 / 2 + 50);},
  y: calculatorFactory(400, 9, -50)
  },{
  x: calculatorFactory(400, 0, 70),
  y: function(i) {return floor(400 / 2 - 70);},
  },{
  x: calculatorFactory(400, 3, 30),
  y: function(i) {return floor(400 / 2 - 30);},
  },{
  x: calculatorFactory(400, 6, -10),
  y: function(i) {return floor(400 / 2 + 10);},
  },{
  x: calculatorFactory(400, 0, -50),
  y: function(i) {return floor(400 / 2 + 50);},
  }
];

function setup() {
  createCanvas(400, 400);
  frameRate(10)
}
function draw() {
  background(0);
  translate()
  s = "Hello:) Please click your mouse.";
  fill(100);
  text(s, 120, 360, 200, 30);
  paths.forEach(function(path){
  fill(value);
  rect(path.x(frameCount), path.y(frameCount), rectSideLength, rectSideLength);
 })
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}