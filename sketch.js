var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;
var redB;
var blueB;
var pinkB;
var greenB;
var arrowGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}


function setup() {
  
    redB = new Group();
    blueB = new Group();
    pinkB = new Group();
    greenB =  new Group();
    arrowGroup =  new Group();
  
  
  // creating bow to shoot arrow
  bow = createSprite(1190,400,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 800)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 700;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 800)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 700;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 800)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 700;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 800)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 700;
  pink.scale = 1
  pinkB.add(pink);
}

function shootArrow() {
  arrow = createSprite(1190,200,20,20);
  arrow.addImage("arrow_shoot",arrowImage);
  arrow.y = bow.y;
  arrow.velocityX = -8;
  arrow.lifeTime = 130;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

function draw() {
  createCanvas(1300,800);

  
  background(backgroundImage);
  
  //moving bow
  if(keyDown("UP_ARROW")){
    bow.velocityY = -6
  }

  if(keyDown("DOWN_ARROW")){
    bow.velocityY = 6
  }

  if(keyWentUp("DOWN_ARROW")){
    bow.velocityY = 0
  }

  if(keyWentUp("UP_ARROW")){
    bow.velocityY = 0
  }

  camera.position.y = bow.y

  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
 
  if(keyWentDown("space")){
    shootArrow();
  }
  
if(arrowGroup.isTouching(blueB)){
  arrowGroup.destroyEach();
  blueB.destroyEach();
  score = score + 1;
}
  
  if(arrowGroup.isTouching(pinkB)){
  arrowGroup.destroyEach();
  pinkB.destroyEach();
  score = score + 1;
  }
 
  if(arrowGroup.isTouching(redB)){
  arrowGroup.destroyEach();
  redB.destroyEach();
  score = score + 1;
  }
  
  if(arrowGroup.isTouching(greenB)){
  arrowGroup.destroyEach();
  greenB.destroyEach();
  score = score + 1;
  }
  
  
  drawSprites();
  text("Score: "+ score, 1190,50);
}

   
  