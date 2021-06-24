const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1, rubber2 ;
var stone1,stone2;
var iron1,iron2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

  rubber1 = new Rubber(640,450,60,60)
  rubber2 = new Rubber(250,450,60,60)

   stone1 = new Stone(490,450,70,70)
   stone2 = new Stone(780,450,70,70)

   
  iron1 = new Iron (350, 100, 70, 50);
  iron2 = new Iron(900, 100, 70, 50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
rubber1.display();
rubber2.display(); 
stone1.display();
stone2.display();
iron1.display();
iron2.display();
 
}