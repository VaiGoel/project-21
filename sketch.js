var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 20, 30);
  bullet.shapeColour = "white";
  bullet.velocityX=speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColour= colour(80,80,80);
}

function draw() {
  background(0,0,0);  

  if(hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5 * weigth * speed * speed/(thickness * thickness * thickness );

if (damage>10){
  wall.shapeColour = colour(255,0,0);
}
if (damage<10){
wall.shapeColour = colour(0,255,0);

}

  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){

  return true;
}

return false;
}