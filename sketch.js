
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.constraint

var ball1,ball2,ball3,ball4,ball5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
    roof = new Roof(600,10,1200,20)

	ball1=new Bob(200,450,70)
	ball2=new Bob(250,450,70)
	ball3=new Bob(300,450,70)
	ball4=new Bob(350,450,70)
	ball5=new Bob(400,450,70)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  roof.display();
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  
  drawSprites();
 
}



