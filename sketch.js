var bullet,speed,weight,Lbullet,Lwall,bulletImage;
var wall,thickness;

function preload(){
  bulletImage = loadImage("bullet.png");

}

function setup() {
  createCanvas(1600,400);
  bulletImage.resize(100,0);
 
  speed=random(223,321);
  weight=random(30,52);

  thickness=random(22,83);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);

  wall = createSprite(800,200,thickness,height/2);
  

  
  
  
  
  bullet.addImage(bulletImage);
 // wall.addImage(wallImage);
//car.scale=0.2;


  
  //car.debug="true";
}

function draw() {
  background(0); 
  
  /*if(wall.x-car.x < (car.width/2 + wall.width/2)){
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22509;
    if(deformation>180){
      //car.shapeColor=color(255,0,0);
      //text("red",500,200);
      
      car.addImage(carRImage);
    }
    else
    if(deformation<180 && deformation>100){
      //car.shapeColor=color(230,230,0);
      //text("yellow",500,200);
      car.addImage(carYImage);
    }else
    if(deformation<100){
     // car.shapeColor=color(0,255,0);
      //text("green",500,200);
      car.addImage(carImage);
    }
  }*/
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
console.log(hasCollided);
  drawSprites();
  
  fill("yellow")
  textSize(30);
  text("damage:"+damage,400,100);
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}