var car, wall;
var speed, weight;

function setup() {
  createCanvas(1400,400);

  //createSprite(400, 200, 50, 50);

  speed = random(30,100);
  weight = random(700,2500);

  car = createSprite(50,200,50,50,);
  car.shapeColor = "white";
  car.scale = 0.6;
  car.velocityX = speed;

  wall = createSprite(1400,200,60,height/2);
  wall.shapeColor = color(80,80,80);


}

function draw() {
  background(0);
  
  if(wall.x - car.x < (car.width + wall.width)/2
  && car.x - wall.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
      if(deformation > 180)
      {
        car.shapeColor = "red";
      }

      if(deformation < 180 && deformation > 100)
      {
        car.shapeColor = "yellow";
      }

      if(deformation < 100)
      {
        car.shapeColor = "green";
      }

      
  }
  




  drawSprites();
}