const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1,ball2,ball3,ball4,ball5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(2100, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options={
		restitution:0.9,
		
	}

	
	
	


	roof = Bodies.rectangle(600,50,1200,20,roof_options);
    World.add(world,roof);

	ball1 = Bodies.circle(510,200,20,ball_options);
	World.add(world,ball1);

	ball2 = Bodies.circle(550,200,20,ball_options);
	World.add(world,ball2);

	ball3 = Bodies.circle(590,200,20,ball_options);
	World.add(world,ball3);

	ball4 = Bodies.circle(630,200,20,ball_options);
	World.add(world,ball4);

	ball5 = Bodies.circle(670,200,20,ball_options);
	World.add(world,ball5);

	con=Matter.Constraint.create({
		pointA : {x:510,y:50},
		bodyB : ball1,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })

	World.add(world,con);

	con1=Matter.Constraint.create({
		pointA : {x:550,y:50},
		bodyB : ball2,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })
	World.add(world,con1);

	con2=Matter.Constraint.create({
		pointA : {x:590,y:50},
		bodyB : ball3,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })
	World.add(world,con2);

	con3=Matter.Constraint.create({
		pointA : {x:630,y:50},
		bodyB : ball4,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })
	World.add(world,con3);

	con4=Matter.Constraint.create({
		pointA : {x:670,y:50},
		bodyB : ball5,
		pointB: {x:0,y:0},
		length:200,
		stifness:0.01
	 })
	World.add(world,con4);

	
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,400,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
	ellipse(ball1.position.x,ball1.position.y,20);
	ellipse(ball2.position.x,ball2.position.y,20);
	ellipse(ball3.position.x,ball3.position.y,20);
	ellipse(ball4.position.x,ball4.position.y,20);
	ellipse(ball5.position.x,ball5.position.y,20);
	stroke(255);
	strokeWeight(2)
	line(con.pointA.x,con.pointA.y,ball1.position.x,ball1.position.y);
	line(con1.pointA.x,con1.pointA.y,ball2.position.x,ball2.position.y);
	line(con2.pointA.x,con2.pointA.y,ball3.position.x,ball3.position.y);
	line(con3.pointA.x,con3.pointA.y,ball4.position.x,ball4.position.y);
	line(con4.pointA.x,con4.pointA.y,ball5.position.x,ball5.position.y)
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.05,y:0})
	}
}