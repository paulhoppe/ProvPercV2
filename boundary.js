function Boundary(x,y,w,h,r){

var options = {

//friction: 0,
isStatic: true,
angle: r

}

this.body = Bodies.rectangle(x,y,w,h,options);
this.w = w;
this.h = h;
//this.body.angle = r;
//this.r = r;

World.add(engine.world, this.body);

this.show = function(){

  var pos = this.body.position;
  var angle = this.body.angle;

  push();
  translate(pos.x, pos.y);
  rotate(angle);
  fill(40);
  noStroke();
  rectMode(CENTER)
  rect(0,0,this.w, this.h);
  pop();

}

}
