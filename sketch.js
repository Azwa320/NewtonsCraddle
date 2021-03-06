
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const bobDiameter=Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(300,500,20,20);
	bob2=new Bob(340,500,20,20);
	bob3=new Bob(380,500,20,20);
	bob4=new Bob(420,500,20,20);
    roof=new Roof(370,200,300,30)
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*2,0);
	rope3 = new Rope(bob3.body,roof.body,-bobDiameter*2,0);
	rope4 = new Rope(bob4.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
 
}



