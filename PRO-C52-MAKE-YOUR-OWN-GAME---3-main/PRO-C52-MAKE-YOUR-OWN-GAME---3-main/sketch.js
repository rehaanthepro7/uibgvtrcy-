//declaring variables
var background,ball,bouncer,score,gameOver,end,hit,restart,youWin;

var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12, brick13;

var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10, sand11, sand12, sand13;

var brick14, brick15, brick16, brick17, brick18, brick19, brick20, brick21, brick22, brick23, brick24, brick25, brick26;

var sand14, sand15, sand16, sand17, sand18, sand19, sand20, sand21, sand22, sand23, sand24, sand25, sand26;

var backgroundImg,brickImg,sandImg,ballImg,bouncerImg,gameOverImg,restartImg,youWinImg;

var leftEdge,rightEdge,topEdge,bottomEdge;

var score = 0;

//loadind the images and the sound
function preload(){
 backgroundImg = loadImage("assets/background.png");
 brickImg = loadImage("assets/Brick1.png");
 sandImg = loadImage("assets/sand.png");
 ballImg = loadImage("assets/ball.png");
 bouncerImg = loadImage("assets/bouncer.png");
 end = loadSound("assets/end.wav");
 hit = loadSound("assets/hit.wav");
 gameOverImg = loadImage("assets/gameOver.png");
 restartImg = loadImage("assets/restart.png");
 youWinImg = loadImage("assets/youWin.png");
}

function setup() {
  //creating the canvas
  createCanvas(1500,630);

  //adding the background image
  background = createSprite(500,200);
  background.addImage(backgroundImg);
  background.scale = 3;

  //creating the sprite for the game over icon
  gameOver = createSprite(675,300);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 1;
  gameOver.visible=false;

  //creating the restart icon
  restart = createSprite(675,360);
  restart.addImage(restartImg);
  restart.scale = 0.1;
  restart.visible=false;

  //creating the you win sprite
  youWin = createSprite(675,300);
  youWin.addImage(youWinImg);
  youWin.scale = 1.65;
  youWin.visible=false;

  //making the first layer of obstacles
  brick1 = createSprite(75,50);
  brick1.addImage(brickImg);
  brick1.scale = 2;

  brick2 = createSprite(175,50);
  brick2.addImage(brickImg);
  brick2.scale = 2;

  brick3 = createSprite(275,50);
  brick3.addImage(brickImg);
  brick3.scale = 2;

  brick4 = createSprite(375,50);
  brick4.addImage(brickImg);
  brick4.scale = 2;

  brick5 = createSprite(475,50);
  brick5.addImage(brickImg);
  brick5.scale = 2;

  brick6 = createSprite(575,50);
  brick6.addImage(brickImg);
  brick6.scale = 2;

  brick7 = createSprite(675,50);
  brick7.addImage(brickImg);
  brick7.scale = 2;

  brick8 = createSprite(775,50);
  brick8.addImage(brickImg);
  brick8.scale = 2;

  brick9 = createSprite(875,50);
  brick9.addImage(brickImg);
  brick9.scale = 2;

  brick10 = createSprite(975,50);
  brick10.addImage(brickImg);
  brick10.scale = 2;

  brick11 = createSprite(1075,50);
  brick11.addImage(brickImg);
  brick11.scale = 2;

  brick12 = createSprite(1175,50);
  brick12.addImage(brickImg);
  brick12.scale = 2;
  
  brick13 = createSprite(1275,50);
  brick13.addImage(brickImg);
  brick13.scale = 2;

  //making the 2nd layer of obstacles
  sand1 = createSprite(75,150);
  sand1.addImage(sandImg);
  sand1.scale = 2;

  sand2 = createSprite(175,150);
  sand2.addImage(sandImg);
  sand2.scale = 2;

  sand3 = createSprite(275,150);
  sand3.addImage(sandImg);
  sand3.scale = 2;

  sand4 = createSprite(375,150);
  sand4.addImage(sandImg);
  sand4.scale = 2;

  sand5 = createSprite(475,150);
  sand5.addImage(sandImg);
  sand5.scale = 2;

  sand6 = createSprite(575,150);
  sand6.addImage(sandImg);
  sand6.scale = 2;

  sand7 = createSprite(675,150);
  sand7.addImage(sandImg);
  sand7.scale = 2;

  sand8 = createSprite(775,150);
  sand8.addImage(sandImg);
  sand8.scale = 2;

  sand9 = createSprite(875,150);
  sand9.addImage(sandImg);
  sand9.scale = 2;

  sand10 = createSprite(975,150);
  sand10.addImage(sandImg);
  sand10.scale = 2;

  sand11 = createSprite(1075,150);
  sand11.addImage(sandImg);
  sand11.scale = 2;

  sand12 = createSprite(1175,150);
  sand12.addImage(sandImg);
  sand12.scale = 2;

  sand13 = createSprite(1275,150);
  sand13.addImage(sandImg);
  sand13.scale = 2;

  //making the 3rd layer of obstacles
  brick14 = createSprite(75,250);
  brick14.addImage(brickImg);
  brick14.scale = 2;

  brick15 = createSprite(175,250);
  brick15.addImage(brickImg);
  brick15.scale = 2;

  brick16 = createSprite(275,250);
  brick16.addImage(brickImg);
  brick16.scale = 2;

  brick17 = createSprite(375,250);
  brick17.addImage(brickImg);
  brick17.scale = 2;

  brick18 = createSprite(475,250);
  brick18.addImage(brickImg);
  brick18.scale = 2;

  brick19 = createSprite(575,250);
  brick19.addImage(brickImg);
  brick19.scale = 2;

  brick20 = createSprite(675,250);
  brick20.addImage(brickImg);
  brick20.scale = 2;

  brick21 = createSprite(775,250);
  brick21.addImage(brickImg);
  brick21.scale = 2;

  brick22 = createSprite(875,250);
  brick22.addImage(brickImg);
  brick22.scale = 2;

  brick23 = createSprite(975,250);
  brick23.addImage(brickImg);
  brick23.scale = 2;

  brick24 = createSprite(1075,250);
  brick24.addImage(brickImg);
  brick24.scale = 2;

  brick25 = createSprite(1175,250);
  brick25.addImage(brickImg);
  brick25.scale = 2;
  
  brick26 = createSprite(1275,250);
  brick26.addImage(brickImg);
  brick26.scale = 2;

  //making the 4th layer of obstacles
  sand14 = createSprite(75,350);
  sand14.addImage(sandImg);
  sand14.scale = 2;

  sand15 = createSprite(175,350);
  sand15.addImage(sandImg);
  sand15.scale = 2;

  sand16 = createSprite(275,350);
  sand16.addImage(sandImg);
  sand16.scale = 2;

  sand17 = createSprite(375,350);
  sand17.addImage(sandImg);
  sand17.scale = 2;

  sand18 = createSprite(475,350);
  sand18.addImage(sandImg);
  sand18.scale = 2;

  sand19 = createSprite(575,350);
  sand19.addImage(sandImg);
  sand19.scale = 2;

  sand20 = createSprite(675,350);
  sand20.addImage(sandImg);
  sand20.scale = 2;

  sand21 = createSprite(775,350);
  sand21.addImage(sandImg);
  sand21.scale = 2;

  sand22 = createSprite(875,350);
  sand22.addImage(sandImg);
  sand22.scale = 2;

  sand23 = createSprite(975,350);
  sand23.addImage(sandImg);
  sand23.scale = 2;

  sand24 = createSprite(1075,350);
  sand24.addImage(sandImg);
  sand24.scale = 2;

  sand25 = createSprite(1175,350);
  sand25.addImage(sandImg);
  sand25.scale = 2;

  sand26 = createSprite(1275,350);
  sand26.addImage(sandImg);
  sand26.scale = 2;

  //making the ball sprite
  ball = createSprite(675,562);
  ball.addImage(ballImg);
  ball.scale = 0.3;

  //making the bouncer sprite
  bouncer = createSprite(675,600);
  bouncer.addImage(bouncerImg);
  bouncer.scale = 0.4;

  //making the sprites for the edges
  leftEdge = createSprite(1,250,10,10000);
  leftEdge.visible=false;

  rightEdge = createSprite(1350,250,10,10000);
  rightEdge.visible=false;

  topEdge = createSprite(675,5,1950,10);
  topEdge.visible=false;

  bottomEdge = createSprite(675,630,1950,10);
  bottomEdge.visible=false;

  score = 0;
}

function draw() {
  
  //creating the edge sprite
  createEdgeSprites();

  //making the boucer to be the same x position of the mouse pointer
  bouncer.x = World.mouseX

  //making the ball move when the space key is pressed
  if (keyDown("space")) {
    ball.velocityX = -5;
    ball.velocityY = -7 ;
  }

  //making the ball bounce of the left edge, right edge, top edge and bouncer
  if (ball.isTouching(leftEdge)){
    ball.bounceOff(leftEdge);
  }

  if (ball.isTouching(rightEdge)){
    ball.bounceOff(rightEdge);
  }

  if (ball.isTouching(topEdge)){
    ball.bounceOff(topEdge);
  }

  if (ball.isTouching(bouncer)){
    ball.bounceOff(bouncer);
  }

  
  //writing the end function when the ball touches the bottom edge
  if (ball.isTouching(bottomEdge)){

    if(keyDown(ENTER)){
      reset();
    }
    
    //destroying first layer of obstacles
    brick1.destroy();
    brick2.destroy();
    brick3.destroy();
    brick4.destroy();
    brick5.destroy();
    brick6.destroy();
    brick7.destroy();
    brick8.destroy();
    brick9.destroy();
    brick10.destroy();
    brick11.destroy();
    brick12.destroy();
    brick13.destroy();
    
    //destroying the second layer of obstacles
    sand1.destroy();
    sand2.destroy();
    sand3.destroy();
    sand4.destroy();
    sand5.destroy();
    sand6.destroy();
    sand7.destroy();
    sand8.destroy();
    sand9.destroy();
    sand10.destroy();
    sand11.destroy();
    sand12.destroy();
    sand13.destroy();

    //destroying the third layer of obstacles
    brick14.destroy();
    brick15.destroy();
    brick16.destroy();
    brick17.destroy();
    brick18.destroy();
    brick19.destroy();
    brick20.destroy();
    brick21.destroy();
    brick22.destroy();
    brick23.destroy();
    brick24.destroy();
    brick25.destroy();
    brick26.destroy();

    //destroying the fourth layer of obstacles
    sand14.destroy();
    sand15.destroy();
    sand16.destroy();
    sand17.destroy();
    sand18.destroy();
    sand19.destroy();
    sand20.destroy();
    sand21.destroy();
    sand22.destroy();
    sand23.destroy();
    sand24.destroy();
    sand25.destroy();
    sand26.destroy();

    //destroying the ball and the boucer
    ball.destroy();
    bouncer.destroy();

    //playing sound for the end of the game
    end.play();

    //adding the game over icon in the last
    gameOver.visible=true;
    restart.visible=true; 

    alert("Plese Press Ctrl+R to play the game again. Thanks for playing :) ")
  }

   
  //writing the function for the obstacles on the first layer to destroy and to play sound if the ball touches them
  if(ball.isTouching(brick1)){
    brick1.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick2)){
    brick2.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick3)){
    brick3.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick4)){
    brick4.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick5)){
    brick5.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick6)){
    brick6.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick7)){
    brick7.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick8)){
    brick8.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick9)){
    brick9.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick10)){
    brick10.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick11)){
    brick11.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick12)){
    brick12.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(brick13)){
    brick13.destroy();
    hit.play();
    score = score + 1;
  }

  //writting the function to destroy and to play sound the obstacles on the second layer when the ball touches it 
  if(ball.isTouching(sand1)){
    sand1.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand2)){
    sand2.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand3)){
    sand3.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand4)){
    sand4.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand5)){
    sand5.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand6)){
    sand6.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand7)){
    sand7.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand8)){
    sand8.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand9)){
    sand9.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand10)){
    sand10.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand11)){
    sand11.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand12)){
    sand12.destroy();
    hit.play();
    score = score + 1;
  }

  if(ball.isTouching(sand13)){
    sand13.destroy();
    hit.play();
    score = score + 1;
  }

  //writing the code for the third layer of obstacles to destroy and to play sound when the ball touches them
  if(ball.isTouching(brick14)){
    brick14.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick15)){
    brick15.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick16)){
    brick16.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick17)){
    brick17.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick18)){
    brick18.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick19)){
    brick19.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick20)){
    brick20.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick21)){
    brick21.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick22)){
    brick22.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick23)){
    brick23.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick24)){
    brick24.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick25)){
    brick25.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(brick26)){
    brick26.destroy();
    hit.play();
    score = score + 1;
  }

  //writing the code to destroy and to play sound the fourth layer of obstacles when the ball touches them
  if(ball.isTouching(sand14)){
    sand14.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand15)){
    sand15.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand16)){
    sand16.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand17)){
    sand17.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand18)){
    sand18.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand19)){
    sand19.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand20)){
    sand20.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand21)){
    sand21.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand22)){
    sand22.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand23)){
    sand23.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand24)){
    sand24.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand25)){
    sand25.destroy();
    hit.play();
    score = score + 1;
  }
  
  if(ball.isTouching(sand26)){
    sand26.destroy();
    hit.play();
    score = score + 1;
  }
  
 
  
  drawSprites();


  textSize(35);
  stroke(3);
  fill("black")
  text("Score: "+ score,1217,580);

  if(score >= 52){
    /*textSize(30);
    stroke(3);
    fill("black");
    text("Congragulations!! You win the game!! ", 70,200);*/   
    ball.destroy();
    bouncer.destroy();
    youWin.visible=true;
    background.visible=false;
    score.visible=false;
    alert("Plese Press Ctrl+R to play the game again. Thanks for playing :) ")
  }

}

 /* textSize(100);
  fill(white);
  text("Score = " + score,displayWidth-200,displayHeight/2-220);*/



function reset(){
  setup();
  draw();
}

