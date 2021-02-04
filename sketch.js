var wall,bullet;
var speed,weight,thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200, 200,thickness, height/2);
  bullet=createSprite(50,200,50,50)
  wall.shapeColor=(80,80,80);
  




  speed=random(223,321);
  weight=random(30,52); 
  

  bullet.velocityX=speed;

  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  
 console.log(speed);
 console.log(weight);
 console.log(thickness);
 console.log(damage);
}

function draw() {
  
  background("blue");
   if( bullet.isTouching(wall) ){
     if(damage<10){
     wall.shapeColor="green"
     bullet.velocityX=0;
     }
     
     if(damage>10){
     wall.shapeColor="red"
     bullet.velocityX=0;
     }
   }
    bullet.collide(wall);
  drawSprites();
}