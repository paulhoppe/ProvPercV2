Matter.use(
  'matter-attractors'
);

var mousePositions = [];

var Engine = Matter.Engine,
//  Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Events = Matter.Events;

let img;
let img2;

let largeCirc = 118;
let smallCirc = 30;
let speed = 0.0001;
var boundWidth = 27;
var playMode = "sustain"

var mConstraint;


var engine;
var world;
var boxes = [];
var boundaries = [];
var attractors = [];

var drums = [];

var debug;

var myFont


const frameDiv = 0.001;

function manualPreload(){
  for(var i = 0; i<5; i++){
  drums[i] = loadSound("assets/drum_0"+i+".mp3");
  drums[i].playMode(playMode);
  myFont = loadFont('assets/Brown-Regular.otf')
}
}

function setup() {
  var canvas = createCanvas(1000, 1000);

  //debug = true;

  manualPreload();

  textFont(myFont)
  textSize(12);
  textAlign(CENTER)

  engine = Engine.create();
  world = Engine.world;
  engine.world.gravity.y = 0;
  Engine.run(engine);



  img = loadImage("assets/Provocative_Percussion_2_blank.jpg");
  img2 = loadImage("assets/Provocative_Percussion_2.jpg");

   boxes.push(new Box(185,368,largeCirc,largeCirc, "large"));
   boxes.push(new Box(450,366,largeCirc,largeCirc, "large"));
   boxes.push(new Box(720,340,largeCirc,largeCirc, "large"));
   boxes.push(new Box(833,373,largeCirc,largeCirc, "large"));
   boxes.push(new Box(140,544,largeCirc,largeCirc, "large"));
   boxes.push(new Box(243,595,largeCirc,largeCirc, "large"));
   boxes.push(new Box(476,642,largeCirc,largeCirc, "large"));
   boxes.push(new Box(575,575,largeCirc,largeCirc, "large"));
   boxes.push(new Box(705,695,largeCirc,largeCirc, "large"));
   boxes.push(new Box(870,642,largeCirc,largeCirc, "large"));
   boxes.push(new Box(146,782,largeCirc,largeCirc, "large"));
   boxes.push(new Box(390,770,largeCirc,largeCirc, "large"));
   boxes.push(new Box(510,785,largeCirc,largeCirc, "large"));

   boxes.push(new Box(288,353,smallCirc,smallCirc, "small"));
   boxes.push(new Box(310,370,smallCirc,smallCirc, "small"));
   boxes.push(new Box(579,345,smallCirc,smallCirc, "small"));
   boxes.push(new Box(527,419,smallCirc,smallCirc, "small"));
   boxes.push(new Box(537,448,smallCirc,smallCirc, "small"));

   boxes.push(new Box(738,422,smallCirc,smallCirc, "small"));
   // sketch.js:178 738.583984375 422.9424133300781
   boxes.push(new Box(284,495,smallCirc,smallCirc, "small"));
   // sketch.js:178 284.1271057128906 495.7465515136719
   boxes.push(new Box(428,530,smallCirc,smallCirc, "small"));
   // sketch.js:178 428.4447937011719 530.7664794921875
   boxes.push(new Box(856,527,smallCirc,smallCirc, "small"));
   // sketch.js:178 856.6192626953125 527.7929077148438
   boxes.push(new Box(836,550,smallCirc,smallCirc, "small"));
   // sketch.js:178 836.7461547851562 550.3779907226562
   boxes.push(new Box(665,601,smallCirc,smallCirc, "small"));
   // sketch.js:178 665.4571533203125 601.5300903320312
   boxes.push(new Box(369,678,smallCirc,smallCirc, "small"));
   // sketch.js:178 369.71490478515625 678.476318359375
   boxes.push(new Box(339,675,smallCirc,smallCirc, "small"));
   // sketch.js:178 339.75262451171875 675.816650390625
   boxes.push(new Box(182,650,smallCirc,smallCirc, "small"));
   // sketch.js:178 182.4681396484375 650.938232421875
   boxes.push(new Box(222,762,smallCirc,smallCirc, "small"));
   // sketch.js:178 222.79861450195312 762.0236206054688
   boxes.push(new Box(230, 794,smallCirc,smallCirc, "small"));

   //230 794
   boxes.push(new Box(637, 779,smallCirc,smallCirc, "small"));
//   sketch.js:200 637 779
boxes.push(new Box(837, 801,smallCirc,smallCirc, "small"));
   // sketch.js:200 837 806
   boxes.push(new Box(862, 787,smallCirc,smallCirc, "small"));
   // sketch.js:200 863 791


   boxes.forEach((addID, i) => {
     boxes[i].body.id = i
   })

   boundaries.push(new Boundary(canvas.width/2, canvas.height, canvas.width, boundWidth, 0));
   boundaries.push(new Boundary(0, canvas.height/2, boundWidth, canvas.height, 0));
   boundaries.push(new Boundary(canvas.width, canvas.height/2, boundWidth, canvas.height, 0));
   boundaries.push(new Boundary(canvas.height/2, 0, canvas.width, boundWidth, 0));

  Events.on(engine, 'collisionStart', function(event) {
       //console.log("Evento: ", event)
       var pairs = event.pairs;

        //console.log("colision between " + pairs[0].bodyA.label + " - " + pairs[0].bodyB.label);

/*
        if(pairs[0].bodyA.label == "large" && pairs[0].bodyB.label == "large"){
            drums[1].play();
        }
        else if(pairs[0].bodyA.label == "small" && pairs[0].bodyA.label == "small"){
            drums[0].play();
        }
        else if(pairs[0].bodyA.label == "small" && pairs[0].bodyA.label == "large"){
            drums[2].play();
        }
        else if(pairs[0].bodyA.label == "large" && pairs[0].bodyA.label == "small"){
            drums[4].play();
        }
*/
    //  boxes[pairs[0].bodyA.id].fill = 255;
      // boxes[pairs[0].bodyB.id].fill = 255;
      // boxes[pairs[0].bodyA.id].fill = 255;
//drums[Math.floor(Math.random()*drums.length)].play();

  });


var canvasMouse = Mouse.create(canvas.elt);
canvasMouse.pixelRatio = pixelDensity();
var options = {
  mouse:canvasMouse,
  stiffness: 1,
};


mConstraint = MouseConstraint.create(engine, options);
World.add(engine.world, mConstraint);

}

function draw() {

image(img, 0, 0)
//image(img2, 0, 0)

for(var i=0; i<boxes.length; i++){
  boxes[i].show();
}

if (mConstraint.body){
  var pos = mConstraint.body.position;
  var m = mConstraint.mouse.position;
  var offset = mConstraint.constraint.pointB;
  stroke(0,255,0);
  //line(pos.x+offset.x, pos.y+offset.y, m.x, m.y);
}

for(var i=0; i<boundaries.length; i++){
//boundaries[i].show();
}

for(var i=0; i<attractors.length; i++){
//attractors[0].show();
}




}


function mousePressed(){

// push.mousePositions[mouseX,mouseY]
// console.log(mousePositions[0])
console.log(mouseX,mouseY)

}



function mouseDragged(){
//boxes.push(new Box(mouseX,mouseY,smallCirc,smallCirc,0))
  //  boxes.push(new Box(mouseX,mouseY,largeCirc,largeCirc,0))
}

function windowResized(){
 resizeCanvas(windowWidth, windowHeight);
// console.log(windowWidth, windowHeight);

}
