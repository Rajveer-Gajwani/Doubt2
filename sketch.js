
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.body;

var tree,tree_E;

function preload()
{
	tree_E = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200, 550);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
treeE = new Tree(1000,250);
mango1 = new mango(800,200);
stone1 = new stone(200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  treeE.display();
  mango1.display();
 stone1.display();
  
  drawSprites();
 
}



