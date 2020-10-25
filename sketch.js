const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,580,70,70);
    box2 = new Box(900,580,70,70);
    pig1 = new Pig(800,580);
    log1 = new Log(800,550,300,PI/2);
    
    box3 = new Box(700,480,70,70);
    box4 = new Box(900,480,70,70);
    pig2 = new Pig(800,480);
    log2 = new Log(800,450,300,PI/2);

    box5 = new Box(800,390,80,80);
    log3 = new Log(720,390,150,PI/7.2);
    log4 = new Log(870,390,150,-PI/7);

    bird = new Bird(500,100);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}