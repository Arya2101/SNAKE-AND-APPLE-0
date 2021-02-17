const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;
var engine;
var world;
var bgImg;
var snake;
var apple;
var appleGroup;
var appleImage;
var score = 0;
var snake2;

function preload(){
  bgImg = loadImage("bg.PNG");
  appleImage = loadImage("apple.PNG");
}

function setup() {
createCanvas(1300,600);
snake = createSprite(15,550,20,20);
snake.shapeColor = "teal";

engine = Engine.create();
world = engine.world;
appleGroup = createGroup();

apple = createSprite(650,300);
apple.addImage(appleImage);
apple.scale = 0.10;



}
function draw() {
  background(bgImg);
  textSize(25);
  fill("black");
  stroke("black"); 
  text("SCORE: "+score,10,25);

  Engine.update(engine);
  if(keyCode == 39){
    snake.x = snake.x+3;
  }
  
  if(keyCode == 37){
    snake.x = snake.x-3;
  }
  
  if(keyCode == 38){
    snake.y = snake.y-3;
  }
  
  if(keyCode == 40){
    snake.y = snake.y+3;
  }
  if(snake.isTouching(apple)){
    apple.x = Math.round(random(0,1300));
    apple.y = Math.round(random(0,600));
    score = score+1;

    
    }
    
  drawSprites();
  
}