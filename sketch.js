const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Shiva, shiv;
//var snowflakes1, snowflakes2;
var backgroundImg, platform;


function preload(){
  var bg = loadImage("snow1.jpg");
 // var snowflakes1 = loadImage("snow4.webp");
  var shiv = loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  Shiva = createSprite(200,200,10,10);
  Shiva.addImage(shiv);
}

function draw() {
  background(255,255,255);  

  Engine.update(engine);
  if(frameCount%20===0){
    Snowparticle.push(new Snow(random(100, 700), -50,10));

  }
  for(var j=0;j<Snowparticle.length;j++){
    Snowparticle.display();
  }

  Shiva.display();
  drawSprites();
}

//function keyPressed(){
  //if(keyCode === 32){
    //Shiva.y = Shiva.y+5
  //}


//}