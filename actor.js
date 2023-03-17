//ator
let xActor = 100;
let yActor = 366;

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