//ator
let xActor = 85;
let yActor = 366;
let collision = false;
let myPoints = 0;

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
    collision = collideRectCircle(xCars[i], yCars[i], carLength, carLength, xActor, yActor, 10);
    if (collision)
    {
      returnToInitialPosition();
    }
  }
}

function returnToInitialPosition()
{
  yActor = 366;
}

function addPoints()
{
  textSize(25);
  textAlign(CENTER);
  fill(color(165, 81, 182))
  // text function requires 3 essential parameters: what we want to display, x and y coordinates for its position.
  text(myPoints, width / 5, 27);
}

function scorePoint()
{
  if (yActor < 15)
  {
    myPoints += 1;
    returnToInitialPosition();
  }
    
  
}




