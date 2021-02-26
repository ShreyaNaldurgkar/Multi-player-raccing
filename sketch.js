var player1,player2, player;
var obstacles;
var gameState=0;
var playerCount;
var database;
var game;
var form;

function preload(){

  playerimg = loadAnimation("Screenshots/g1.png", "Screenshots/g2.png","Screenshots/g3.png");
  player2img = loadAnimation("Screenshots/o1.png", "Screenshots/o2.png");

  
}

function setup(){
  createCanvas(displayWidth, displayHeight-140);

  ground = createSprite(displayWidth/2, displayHeight-150, displayWidth, 20);
  ground2 = createSprite(displayWidth/2, displayHeight/2- 70, displayWidth, 20);
  database = firebase.database();
  console.log(database);
    game = new Game();
    game.getgamestate();
    game.start();
    console.log(gameState)
    console.log(playerCount);
  

}


function draw(){
  
  
  if(playerCount === 2){
      game.updategamestate(1);
  }
  if(gameState === 1){
      game.play();
  }

  if(gameState == 2){
      game.end();

  }

}