let roadImage;
let actorImage;
let carImage1;
let carImage2;
let carImage3;
let carImages;

let soundtrack;
let collisionSound;
let pointSound;

function preload()
{
  roadImage = loadImage("img/road.png");
  actorImage = loadImage("img/actor-1.png");
  carImage1 = loadImage("img/car-1.png");
  carImage2 = loadImage("img/car-2.png");
  carImage3 = loadImage("img/car-3.png");
  carImages = [carImage1, carImage2, carImage3, carImage2, carImage1, carImage3];

  soundtrack = loadSound("sounds/track.mp3");
  collisionSound = loadSound("sounds/collided.mp3");
  pointSound = loadSound("sounds/points.wav");
}