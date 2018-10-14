function Attractor(x,y,w,h,r){



var options = {

//friction: 0,
restitution: .6,
angle: r,
isStatic: true,
plugin: {
  attractors: [
    function(bodyA, bodyB){
      return {
        x: (bodyA.position.x - bodyB.position.x) * 1e-6,
        y: (bodyA.position.y - bodyB.position.y) * 1e-6,
      };
    }
  ]
}
}

this.body = Bodies.rectangle(x,y,w,h,options);

this.w = w;
this.h = h;
this.r = r;
World.add(engine.world, this.body);

this.show = function(){

  var pos = this.body.position;
  var angle = this.body.angle;

  push();
  translate(pos.x, pos.y);
  rotate(angle);
  fill(255,0,0);
  noStroke();
  rectMode(CENTER)
  rect(0,0,this.w, this.h);
  pop();

}

}
