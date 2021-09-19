
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
	ball=Matter.Bodies.circle(50,70,30, ball_option)
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30,30)

  background("red");
  
  drawSprites();
 
}



