var box1, box2, box3;

var boxes = [];
var howMany = 100;

function setup() {

  // console.log('setup');

  // dynamically fit to the size of browser
	createCanvas(window.innerWidth, window.innerHeight);

  for(var i=0; i<howMany; i++) {
     var box = new Box();
     var pos = randomizePosition();
    box.setPosition(pos.x,pos.y);
    box.setColor(randomizeColor(), randomizeColor());
    box.setScale(parseFloat(random(1)));
    boxes.push(box);
  }
}

function randomizePosition() {
  return {x: random(window.innerWidth), y: random(window.innerHeight)};
}

function randomizeColor() {
 
 return [random(255), random(255), random(255)];
}

function draw() {
  
  background('#ffffff');
  // console.log('draw');

  for(var i=0; i<boxes.length; i++) {
    boxes[i].update();
    boxes[i].draw();
  }
}