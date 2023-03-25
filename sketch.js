function setup()
{
  createCanvas(500, 400);
}

function draw()
{
  background(roadImage);
  showsActor();
  showsCar();
  movesCar();
  movesActor();
  resetCarPositionToInitial();
  checkCollision();
}