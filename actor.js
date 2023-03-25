//ator
let xActor = 100;
let yActor = 366;
let collision = false;

function showsActor()
{
  image(actorImage, xActor, yActor, 30, 30);
}

function movesActor()
{
  if (keyIsDown(UP_ARROW))
  {
    yActor -= 3; 
  }

  if (keyIsDown(DOWN_ARROW))
  {
    yActor += 3; 
  }
}

function checkCollision()
{
  for (let i = 0; i < carImages.length; i++)
  {
    collision = collideRectCircle(xCars[i], yCars[i], carLength, carLength, xActor, yActor, 30);
    if (collision)
    {
      collide();
    }
  }
}

function collide()
{
  yActor = 366;
}