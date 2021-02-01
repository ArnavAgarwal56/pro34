
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bg, bgi;
var hero1, monster1;

function preload() {
//preload the images here
bgi= loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1350, 650);
  engine = Engine.create();
  world = engine.world;
  
  
  // create sprites here
 g1 = new Ground(405,600,1400,30)

 box1 = new Box(900,100,70,70);
 box2 = new Box(900,100,70,70);
 box3 = new Box(900,100,70,70);
 box4 = new Box(900,100,70,70);
 box5 = new Box(900,100,70,70);
 box6 = new Box(900,100,70,70);

 box7 = new Box(800,100,70,70);
 box8 = new Box(800,100,70,70);
 box9 = new Box(800,100,70,70);
 box10 = new Box(800,100,70,70);
 box11 = new Box(800,100,70,70);
 box12 = new Box(800,100,70,70);

 box13 = new Box(700,100,70,70);
 box14 = new Box(700,100,70,70);
 box15 = new Box(700,100,70,70);
 box16 = new Box(700,100,70,70);
 box17 = new Box(700,100,70,70);
 box18 = new Box(700,100,70,70);
 box19 = new Box(700,100,70,70);
 box20 = new Box(700,100,70,70);
 box21 = new Box(800,100,70,70);



m1 = new Monster(1100,200,200)

h1 = new Hero(300,300,200,200)

rope = new Rope(h1.body, { x: 500, y: 50 });























 Engine.run(engine);

}

function draw() {
  background(bgi);
g1.display()
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

m1.display()
h1.display()
rope.display()

}
function mouseDragged() {
  Matter.Body.setPosition(h1.body, { x: mouseX, y: mouseY });
}


