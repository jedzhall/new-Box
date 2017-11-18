// Class 'Box'
// properties (= variables) 
// methods (=functions)

function Box() {

	// these are properties
	this.velocity = createVector(0, 0);
	this.acceleration = createVector(0, 0);

	this.maxSpeed = 5;
}

Box.prototype.setPosition = function(x, y) {
	// take x and save x as a property this.x(belongs to class Box)
	this.x = x;
	this.y = y;
	this.location = createVector(x, y);
};

Box.prototype.setColor=function(faceColor,sideColor){
this.faceColor = faceColor;
this.sideColor=sideColor;
};

Box.prototype.setScale=function(scale){
this.scale= scale;


};

Box.prototype.update = function() {
	var mouse = createVector(mouseX, mouseY);
	var direction = p5.Vector.sub(mouse, this.location);

	direction.normalize();
	direction.mult(0.5);

	this.acceleration = direction;

	this.velocity.add(this.acceleration);
	this.velocity.limit(this.maxSpeed);
	this.location.add(this.velocity);
};

// method named 'draw'

Box.prototype.draw = function() {

	push();

	translate(this.location.x, this.location.y);
	// if(this.x < -500) {
	// 	this.x = window.innerWidth;
	// }

	scale(this.scale);

	// right arm
	fill('#050200');
	rect(151, 200, 200, 50);
	
	// front face
  fill(this.faceColor);
  rect(300, 100, 370, 370);

  	// left side
    fill(this.sideColor);
  rect(650, 100, 100, 370);



//
  //eyes
  fill('#FFFFFF');
  ellipse(390, 231, 170, 210);
  ellipse(556, 231, 170, 210);
 
    //innereyes
  fill('#1A0412');
  ellipse(350, 230, 80, 120);
  ellipse(540, 230, 80, 120);
  
  //mouth
  fill('#ffffff');
  arc(450, 340, 170, 100, 0, PI, PIE);
  
  //arm
  fill('#050200');
  rect(700, 200, 50, 200);
 
 //hand
 
 ellipse(730, 380, 80, 80);
 ellipse(130, 230, 70, 80);
 
 //leg
 
  rect(600, 470, 50, 200);
  rect(370, 470, 50, 200);
  
  //feets
  arc(370, 700, 130, 130, PI, 2*PI, PIE);
  arc(650, 700, 130, 130, PI, 2*PI, PIE);
  pop();
};

