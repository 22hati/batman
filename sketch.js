const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bgImg;

var drops=[];

function preload(){
    bgImg = loadImage("batman.jpeg");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    
   createCanvas(500,800);
}

function draw(){
    background(bgImg);

    Engine.update(engine);

    if(frameCount%2===0) {
        drops.push(new drop(random(35,465),10,10));
      }
    
      for(var j=0;j<drops.length;j++) {
        drops[j].display();
      }
    
}   

