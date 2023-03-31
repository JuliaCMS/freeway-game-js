let xActor = 85;
let yActor = 366;
let collision = false;
let myPoints = 0;
let computerPoints = 0;

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
    if (canMove())
    {
      yActor += 3;
    }
  }
}

function checkCollision()
{
  for (let i = 0; i < carImages.length; i++)
  {
    collision = collideRectCircle(xCars[i], yCars[i]-23, carLength, carLength, xActor, yActor, 15);
    if (collision)
    {
      returnToInitialPosition();
      computerPoints += 1;
      collisionSound.play();
      if (pointsHigherThanZero())
      {
        myPoints -= 1;
      }      
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
  text(myPoints, 100, 27);
  text(computerPoints, 400, 27)
}

function scorePoint()
{
  if (yActor < 15)
  {
    myPoints += 1;
    pointSound.play();
    returnToInitialPosition();
  }
}

function pointsHigherThanZero()
{
  return myPoints > 0;
}
function canMove()
{
  return yActor < 366;
}




