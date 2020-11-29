var kid,kid_img;
var bg,bg_img;
var gameLevel="level2"
var gameState="play"
var gameLevel="level1"
//var gameState="end";
var coin,coin_Img,coin_gif;
var monster,monster_Img;
var invisibleground;
var coinGroup,monsterGroup,invisibleBlockGroup;
var score=0;
var life1,life2,life3,life_Img;
var count=0;
var invisibleBlock;
var gameover,gameover_Img;
var door,door_Img;
var doorGroup;
var bush1,bush2,bush3,bush4,bush5,bush6,bush7,bush8,bush9,bush10;
var bush_Img;
var darkbg_Img;
var invisibleBlocksGroup;
var invisibleBlocks;
var darkbg;
var level1blocker;
var coin1,coin2,monster1,monster2;
var arrow1,arrow2,arrow3,arrow4,arrow1_Img,arrow2_Img,arrow3_Img,arrow4_Img;
var kidlevel2,kidlevel2_Img;
var ghost,ghost1,ghost2,ghost3,ghost_Img;
var kid1,invisibleground1,invisibleground2;
var coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12;
function preload(){
  kid_img=loadAnimation("images/kid1.png","images/kid2.png","images/kid3.png");
  bg_img=loadImage("images/bgImg.jpg");
  coin_Img=loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png","images/coin4.png","images/coin5.png","images/coin6.png","images/coin7.png","images/coin8.png","images/coin9.png");
  monster_Img=loadImage("monster1.jpg");
  life_Img=loadImage("images/lives.png");
  gameover_Img=loadImage("images/gameover.jpg");
  door_Img=loadImage("images/door.png");
  bush_Img=loadImage("images/bushes.png");
  darkbg_Img=loadImage("images/level2bg.png");
  arrow1_Img=loadImage("images/arrow1.png");
  arrow2_Img=loadImage("images/arrow2.png");
  arrow3_Img=loadImage("images/arrow3.png");
  arrow4_Img=loadImage("images/arrow4.png");
  kidlevel2_Img=loadImage("images/kidlevel2.png");
  ghost_Img=loadImage("images/ghost.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(0, 0, width, height);
  bg.addImage(bg_img);
  bg.scale=2.5;
  invisibleground=createSprite(10,height-200,6000,20);
  invisibleground.visible=false;
  kid=createSprite(100,height-220);
  kid.addAnimation("kid",kid_img);
  kid.scale=1.5;
  kid.visible=true;
  kid1=createSprite(100,height-500);
  kid1.addAnimation("kid1",kid_img);
  kid1.scale=1.5;
  kid1.visible=false;
  coinGroup=new Group();
  monsterGroup=new Group();
  invisibleBlockGroup=new Group();
  doorGroup=new Group();
  invisibleBlocksGroup=new Group();
  life1=createSprite(width-250,height-700);
  life1.addImage(life_Img);
  life1.scale=0.2;
  life2=createSprite(width-150,height-700);
  life2.addImage(life_Img);
  life2.scale=0.2;
  life3=createSprite(width-50,height-700);
  life3.addImage(life_Img);
  life3.scale=0.2;
  count=0;
  gameover=createSprite(200,200,width,height);
  gameover.addImage(gameover_Img);
  gameover.visible=false;
  gameover.scale=2.5;
  level1blocker=createSprite(width-100,height-200,300,3000);
  level1blocker.visible=false;

  coin=createSprite(width-50,height-500);
  coin.addAnimation("coin",coin_Img);
  coin.velocityX=-7;
  coinGroup.add(coin);

  coin1=createSprite(width+2000,height-500);
  coin1.addAnimation("coin",coin_Img);
  coin1.velocityX=-7;
  coinGroup.add(coin);

  coin2=createSprite(width+4000,height-500);
  coin2.addAnimation("coin",coin_Img);
  coin2.velocityX=-7;
  coinGroup.add(coin);


  monster=createSprite(width+300,height-220);
  monster.addImage(monster_Img);
  monster.velocityX=-7;
  monster.scale=1.8;

  monster1=createSprite(width+3000,height-220);
  monster1.addImage(monster_Img);
  monster1.velocityX=-7;
  monster1.scale=1.8;

  monster2=createSprite(width+5000,height-220);
  monster2.addImage(monster_Img);
  monster2.velocityX=-7;
  monster2.scale=1.8;

  invisibleBlockGroup.add(monster);
  invisibleBlock=createSprite(width-2000,height-150,240,400);
  invisibleBlock.velocityX=-7;
  invisibleBlock.visible=false;
  monster.visible=true;

  //invisibleBlockGroup.add(monster);
  invisibleBlock1=createSprite(width-2000,height-150,240,400);
  invisibleBlock1.velocityX=-7;
  invisibleBlock1.visible=false;
  monster1.visible=true;

  door=createSprite(width+7000,height-220);
  door.addImage(door_Img);
  door.velocityX=-7;
  /*invisibleBlocksGroup.add(door);
  invisibleBlocks=createSprite(width+100,height-170,240,400);
  invisibleBlocks.velocityX=-7;
  invisibleBlocks.visible=false;
  door.visible=true;*/

  //game Level Stage 2

  bush1=createSprite(width-200,height-300);
  bush1.addImage(bush_Img);
  bush1.visible=false;
  bush1.scale=0.2;

  bush2=createSprite(width-250,height-500);
  bush2.addImage(bush_Img);
  bush2.visible=false;
  bush2.scale=0.2;

  bush3=createSprite(width-300,height-100);
  bush3.addImage(bush_Img);
  bush3.visible=false;
  bush3.scale=0.2;

  bush4=createSprite(width-400,height-700);
  bush4.addImage(bush_Img);
  bush4.visible=false;
  bush4.scale=0.2;

  bush5=createSprite(width-500,height-600);
  bush5.addImage(bush_Img);
  bush5.visible=false;
  bush5.scale=0.2;

  bush6=createSprite(width-550,height-550);
  bush6.addImage(bush_Img);
  bush6.visible=false;
  bush6.scale=0.2;

  arrow1=createSprite(width-150,height-100);
  arrow1.addImage(arrow1_Img);
  arrow1.visible=false;

  arrow2=createSprite(width-350,height-100);
  arrow2.addImage(arrow2_Img);
  arrow2.visible=false;

  arrow3=createSprite(width-250,height-200);
  arrow3.addImage(arrow3_Img);
  arrow3.visible=false;

  arrow4=createSprite(width-250,height-30);
  arrow4.addImage(arrow4_Img);
  arrow4.visible=false;

  ghost=createSprite(width-500,height-250);
  ghost.addImage(ghost_Img);
  //ghost.velocityY=-1;
  ghost.scale=0.1;
  ghost.visible=false;

  ghost1=createSprite(width-500,height-750);
  ghost1.addImage(ghost_Img);
 // ghost.velocityY=-1;
  ghost1.scale=0.1;
  ghost1.visible=false;

  ghost2=createSprite(width-500,height-500);
  ghost2.addImage(ghost_Img);
  //ghost.velocityY=-1;
  ghost2.scale=0.1;
  ghost2.visible=false;

  ghost3=createSprite(width-200,height-700);
  ghost3.addImage(ghost_Img);
  //ghost.velocityY=-1;
  ghost3.scale=0.1;
  ghost3.visible=false;

  invisibleground1=createSprite(10,height-400,6000,20);
  invisibleground1.visible=false;
  invisibleground2=createSprite(10,height-170,6000,20);
  invisibleground2.visible=false;

  //ghost.bounceOff(invisibleground1);
  //ghost.bounceOff(invisibleground2);


   
  coin3=createSprite(550,height-500);
  coin3.addAnimation("coin",coin_Img);
  //coin3.velocityX=-7;
  coinGroup.add(coin);
  coin3.visible=false;

  coin4=createSprite(580,height-500);
  coin4.addAnimation("coin",coin_Img);
  //coin4.velocityX=-7;
  coinGroup.add(coin);
  coin4.visible=false;

  coin5=createSprite(260,height-500);
  coin5.addAnimation("coin",coin_Img);
  //coin5.velocityX=-7;
  coinGroup.add(coin);
  coin5.visible=false;

  coin6=createSprite(300,height-500);
  coin6.addAnimation("coin",coin_Img);
  //coin6.velocityX=-7;
  coinGroup.add(coin);
  coin6.visible=false;

  coin7=createSprite(340,height-500);
  coin7.addAnimation("coin",coin_Img);
  //coin7.velocityX=-7;
  coinGroup.add(coin);
  coin7.visible=false;

  coin8=createSprite(370,height-500);
  coin8.addAnimation("coin",coin_Img);
  //coin8.velocityX=-7;
  coinGroup.add(coin);
  coin8.visible=false;

  coin9=createSprite(400,height-500);
  coin9.addAnimation("coin",coin_Img);
  //coin9.velocityX=-7;
  coinGroup.add(coin);
  coin9.visible=false;

  coin10=createSprite(430,height-500);
  coin10.addAnimation("coin",coin_Img);
  //coin10.velocityX=-7;
  coinGroup.add(coin);
  coin10.visible=false;

  coin11=createSprite(470,height-500);
  coin11.addAnimation("coin",coin_Img);
  //coin11.velocityX=-7;
  coinGroup.add(coin);
  coin11.visible=false;

  coin12=createSprite(500,height-500);
  coin12.addAnimation("coin",coin_Img);
  //coin12.velocityX=-7;
  coinGroup.add(coin);
  coin12.visible=false;

}

function draw() {
  background(255,255,255); 
  if(gameState=="play"){
    //GAMELEVEL STAGE 1
    if(gameLevel=="level1"){
    bg.velocityX=-40;
    if(bg.x<0){
      bg.x=bg.width/2
    }
    if(touches.length>0||keyDown("SPACE")&&kid.y>=100){
      kid.velocityY=-10;
      touches=[];
    }
    kid.velocityY=kid.velocityY+0.8;

    kid.collide(invisibleground);
    kid1.collide(invisibleground);
    //coins();
    //monsters();
    //doors();
    if(coinGroup.isTouching(kid)){
      score+=10;
      coinGroup.destroyEach();
    }
    if(coin1.isTouching(kid)){
      score+=10;
      coin1.destroy();
    }
    if(coin2.isTouching(kid)){
      score+=10;
      coin2.destroy();
    }
    if(monster1.isTouching(kid)){
      count+=1;

    }
    if(monster.isTouching(kid)){
      count+=1;

    }
    if(monster2.isTouching(kid)){
      count+=1;

    }

    if(ghost.isTouching(kid1)){
      count+=1;

    }
    if(ghost1.isTouching(kid1)){
      count+=1;

    }
    if(ghost2.isTouching(kid1)){
      count+=1;

    }
    if(ghost3.isTouching(kid1)){
      count+=1;

    }
    if(count==5){
      life3.destroy();
    }
    if(count==100){
      life2.destroy();
    }
    if(count==200){
      life1.destroy();
    }
    console.log(count);
    /*if(count==5){
      life3.destroy();
    }
    else if(count==100){
      life2.destroy();
    }
    else if(count==200){
      life1.destroy();
      gameState="end";
      bg.velocityX=0;
      invisibleBlockGroup.setVelocityXEach(0);
      coinGroup.setVelocityXEach(0);
      monsterGroup.setVelocityXEach(0);
    }*/
  }
  if(gameState=="end"){
    gameover.visible=true;
  }
  
  if(door.isTouching(kid)){
    darkbg=createSprite(800,300,width,height);
    darkbg.addImage(darkbg_Img);
    darkbg.scale=0.8;
    bg.destroy();
    for (var i = 0; i < 400; i+=20) {
      line(200,i,200,i+10);
      line.shapeColor="yellow";
   }

    //kidlevel2.depth+=200;
    
    //kidlevel2.visible=true;
    ghost.visible=true;
    ghost1.visible=true;
    ghost2.visible=true;
    ghost3.visible=true;
    coin3.visible=true;
    coin4.visible=true;
    coin5.visible=true;
    coin6.visible=true;
    coin7.visible=true;
    coin8.visible=true;
    coin9.visible=true;
    coin10.visible=true;
    coin11.visible=true;
    coin12.visible=true;

    coin3.scale=0.2;
    coin4.scale=0.2;
    coin5.scale=0.2;
    coin6.scale=0.2;
    coin7.scale=0.2;
    coin8.scale=0.2;
    coin9.scale=0.2;
    coin10.scale=0.2;
    coin11.scale=0.2;
    coin12.scale=0.2;

    

    kid1.visible=true;
    kid1.depth+=200;
    kid1.scale=0.3;
    kid.destroy();
    door.destroy();
    life1.depth=kid1.depth;
    life2.depth=kid1.depth;
    life3.depth=kid1.depth;
    ghost.depth=kid1.depth;
    ghost1.depth=kid1.depth;
    ghost2.depth=kid1.depth;
    ghost3.depth=kid1.depth;


    coin3.depth=kid1.depth;
    coin4.depth=kid1.depth;
    coin5.depth=kid1.depth;
    coin6.depth=kid1.depth;
    coin7.depth=kid1.depth;
    coin8.depth=kid1.depth;
    coin9.depth=kid1.depth;
    coin10.depth=kid1.depth;
    coin11.depth=kid1.depth;
    coin12.depth=kid1.depth;

    

    //darkbg.velocityX=kid1.velocityX;

    //background(darkbg_Img);
    /*bush1.visible=true;
    bush2.visible=true;
    bush3.visible=true;
    bush4.visible=true;
    bush5.visible=true;
    bush6.visible=true;

    bush1.depth+=200;
    bush2.depth=bush1.depth;
    bush3.depth=bush1.depth;
    bush4.depth=bush1.depth;
    bush5.depth=bush1.depth;
    bush6.depth=bush1.depth;*/
    //kid.depth+=200
    //kid.scale=0.3;
    /*arrow1.depth=kid1.depth;
    arrow1.visible=true;
    arrow2.depth=kid1.depth;
    arrow2.visible=true;
    arrow3.depth=kid1.depth;
    arrow3.visible=true;
    arrow4.depth=kid1.depth;
    arrow4.visible=true;*/
    //coinGroup.setLifetimeEach(0);
    //doorGroup.setLifetimeEach(0);
    //invisibleBlocksGroup.setLifetimeEach(0);
    //monsterGroup.setLifetimeEach(0);


    //bg.velocityX=0;
    //invisibleBlockGroup.setVelocityXEach(0);
    //coinGroup.setVelocityXEach(0);
    //monsterGroup.setVelocityXEach(0);
    


    gameLevel=="level2";
  }
  if(gameLevel=="level2"){
    bg.velocityX=0;


  }
  if (keyDown(UP_ARROW)) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    //darkbg.velocityY=0.1;
  }
  if (keyDown(DOWN_ARROW)) {
    kid1.velocityX = 0;
    kid1.velocityY = 5;
    //darkbg.velocityY=-0.1;
  }
  if (keyDown(LEFT_ARROW)) {
    kid1.velocityX = -5;
    kid1.velocityY = 0;
    //darkbg.velocityX=0.1;
  }
  if (keyDown(RIGHT_ARROW)) {
    kid1.velocityX = 5;
    kid1.velocityY = 0;
    //darkbg.velocityX=-0.1;
  }

  if(kid1.isTouching(coin3)){
      score+=10;
      coin3.destroy();
    }
    if(kid1.isTouching(coin4)){
      score+=10;
      coin4.destroy();
    }
    if(kid1.isTouching(coin5)){
      score+=10;
      coin5.destroy();
    }
    if(kid1.isTouching(coin6)){
      score+=10;
      coin6.destroy();
    }
    if(kid1.isTouching(coin7)){
      score+=10;
      coin7.destroy();
    }
    if(kid1.isTouching(coin8)){
      score+=10;
      coin8.destroy();
    }
    if(kid1.isTouching(coin9)){
      score+=10;
      coin9.destroy();
    }
    if(kid1.isTouching(coin10)){
      score+=10;
      coin10.destroy();
    }
    if(kid1.isTouching(coin11)){
      score+=10;
      coin11.destroy();
    }
    if(kid1.isTouching(coin12)){
      score+=10;
      coin12.destroy();
    }

  /*if (arrow1.touches.length>0) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    darkbg.velocityY=0.1;
    touches=[];
  }
  if (arrow2.touches.length>0) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    darkbg.velocityY=0.1;
    touches=[];
  }
  if (arrow3.touches.length>0) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    darkbg.velocityY=0.1;
    touches=[];
  }
  if (arrow4.touches.length>0) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    darkbg.velocityY=0.1;
    touches=[];
  }*/


  //GAMELEVEL STAGE 2
  }
  drawSprites();
  fill("White");
  textSize(40);
  text("Score: "+score,width-500,height-680);
 
}
/*function coins(){
  if(frameCount%200==0){
    coin=createSprite(width,height-500);
    coin.addAnimation("coin",coin_Img);
    coin.velocityX=-7;
    coinGroup.add(coin);
    //coin.scale=0.5;
    coin.visible=true;
  }
}*/
/*function monsters(){
  if(frameCount%350==0){
    monster=createSprite(width,height-220);
    monster.addImage(monster_Img);
    monster.velocityX=-7;
    monster.scale=1.8;
    invisibleBlockGroup.add(monster);
    invisibleBlock=createSprite(width,height-150,240,400);
    invisibleBlock.velocityX=-7;
    invisibleBlock.visible=false;
    monster.visible=true;
  }
}*/
/*function doors(){


  if(frameCount%450==0){
    door=createSprite(width,height-220);
    door.addImage(door_Img);
    door.velocityX=-7;
    invisibleBlocksGroup.add(door);
    invisibleBlocks=createSprite(width+100,height-170,240,400);
    invisibleBlocks.velocityX=-7;
    invisibleBlocks.visible=false;
    door.visible=true;

  }
}*/
