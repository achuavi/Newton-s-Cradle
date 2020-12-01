
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var b1,b2,b3,b4,b5;
var roof1;
var r1,r2,r3,r4,r5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	roof1=new roof(270,300,220,20);
	b1=new Bob(200,500,40);
	b2=new Bob(240,500,40);
	b3=new Bob(280,500,40);
	b4=new Bob(320,500,40);
	b5=new Bob(360,500,40);
	//Create the Bodies Here.
	

	r1=new Rope(b5.body,roof1.body,85,0);
	r2=new Rope(b4.body,roof1.body,50,0);
	r3=new Rope(b3.body,roof1.body,15,0);
	r4=new Rope(b2.body,roof1.body,-25,0);
	r5=new Rope(b1.body,roof1.body,-70,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  roof1.display();
  r5.display();
  //b1.body.position.x=mouseX;
  b1.display();
  r4.display();
  b2.display();
	r3.display();
  b3.display();
  
 
  r1.display();
  b5.display();
  r2.display();
  b4.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

		//b1.body.position.x=mouseX;

	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-100,y:-100});

	}
}

