function setup()
{
  createCanvas(500, 400);
  soundtrack.loop();
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
  addPoints();
  scorePoint();
}