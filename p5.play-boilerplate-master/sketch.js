var fixedRect,movingRect;
var ball1,ball2;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect = createSprite(600,400,50,80);
  movingRect.shapeColor="green";
  ball1=createSprite(200, 200, 50, 80);
  ball1.shapeColor="yellow";
  ball1.velocityX=+2;
  ball2 = createSprite(700,200,50,80);
  ball2.shapeColor="green";
  ball2.velocityX=-2;
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  BounceOff(ball1,ball2);
  drawSprites();
}
