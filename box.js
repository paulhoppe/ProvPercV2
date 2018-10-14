function Box(x,y,w,h,r,l,id){

this.id = id;
this.fill = 40;
//Box Body
var bodyOptions = {

friction: .5,
restitution: 0,
angle: r,


}

this.body = Bodies.rectangle(x,y,w,h,bodyOptions);
this.body.label = l;
this.body.id = id;

World.add(engine.world, this.body);


//Anchor Body
var anchorOptions = {

isStatic: true,
isSensor: true

}

this.anchor = Bodies.rectangle(x,y,10,10,anchorOptions);
World.add(engine.world, this.anchor);


//Spring

var springOptions = {

  bodyA: this.anchor,
  bodyB: this.body,
  length: 0,
  stiffness: 0.02

}

this.spring = Constraint.create(springOptions);
World.add(engine.world, this.spring);

// Set Params
this.anchor = [x,y];
this.w = w;
this.h = h;
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
      console.log(this.fill)
  }
  fill(this.fill);
  noStroke();
  rectMode(CENTER)
  rect(0,0,this.w, this.h);
if(debug){
  fill(255)
text(this.body.id, 0,0)
}
  pop();

  stroke(255,0,0);
  //line(x, y, pos.x, pos.y);

}

}
