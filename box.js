function Box(x,y,w,r,l,id){

this.id = id;
this.fill = 40;
//Box Body
var bodyOptions = {

friction: .5,
restitution: 0,



}

this.body = Bodies.circle(x,y,w/2,bodyOptions);
this.body.label = l;
this.body.id = id;

World.add(engine.world, this.body);


//Anchor Body
var anchorOptions = {

isStatic: true,
isSensor: true

}

this.anchor = Bodies.circle(x,y,10,anchorOptions);
World.add(engine.world, this.anchor);


//Spring

var springOptions = {

  bodyA: this.anchor,
  bodyB: this.body,
  length: 0,
  stiffness: 0.002

}

this.spring = Constraint.create(springOptions);
World.add(engine.world, this.spring);

// Set Params
this.anchor = [x,y];
this.w = w;
//this.h = h;
this.r = r;

//Show Function
this.show = function(){

  noiseSeed(this.body.id);
  //this.body.angle = map(noise(frameCount*frameDiv), 0,1,-15,15);

  var pos = this.body.position;
  var angle = this.body.angle;

  push();
  translate(pos.x, pos.y);
  rotate(angle);
   if(this.fill > 40){
      this.fill -= 25;
   }
  fill(this.fill);
  noStroke();
  ellipseMode(CENTER)
  ellipse(0,0,this.w);
if(debug){
  fill(255)
  this.fill = color(255,0,0,50);
text(this.body.id, 0,4)
}
  pop();

  stroke(255,0,0);
  //line(x, y, pos.x, pos.y);

}

}
