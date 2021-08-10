var bg, backgroundImg, ironmanImg;
function preload() {
  backgroundImg = loadImage("images/background.jpg");
  ironmanImg = loadImage("images/iron.png");
}
function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  ironman = createSprite(200,505,20,50);
  ironman.addImage(ironmanImg);
  ironman.scale = 0.3;
  
  ground = createSprite(200,585,400,10);
  ground.visible = false;
}
function draw() {
  if(keyDown("space")) {
    ironman.velocityY = -14;
  }

  ironman.velocityY = ironman.velocityY + 0.5;
  ironman.collide(ground); 
  drawSprites();  
}


