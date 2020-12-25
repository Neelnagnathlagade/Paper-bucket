
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var paperObject
var ground
var rect1,rect2,rect3
function preload()
{
	
}

function setup() {
	createCanvas(1150, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(600,height,1200,20)
   paperObject = new Paper(200,450,70)
   

   rect1=createSprite(1000,690,200,10)
	rect1.shapeColor="red"

	rect2=createSprite(900,645,10,100)
	rect2.shapeColor="red"

	rect3=createSprite(1100,645,10,100)
	rect3.shapeColor="red"
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  ground.display();
  drawSprites();
 
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-75})
	   
	   
	 }
   }
   
   

