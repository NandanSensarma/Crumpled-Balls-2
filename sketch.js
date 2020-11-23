
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1= new Paper();

bin1= new Bin(650,385,150,15);
bin2= new Bin(730,350,15,100);
bin3= new Bin(580,350,15,100);

ground= new Ground(400,400,800,20);

Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");
  
paper1.display();

bin1.display();
bin2.display();
bin3.display();

ground.display();

keyPressed();

  drawSprites();
}

function keyPressed(){
if (keyCode===UP_ARROW) {
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.2, y:-1});
}
}

