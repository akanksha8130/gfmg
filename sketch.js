var tree
var treeImg
var skiguy






function preload()
{
  treeImg=loadImage("tree.png")

playerImg=loadAnimation("forward.png")
playerleftImg=loadAnimation("left.png")
playerrightImg=loadAnimation("right.png")
}

function setup(){
  createCanvas(windowWidth/2,windowHeight)
skiguy=createSprite(width/2,200)
  skiguy.addAnimation('forward',playerImg)
  skiguy.addAnimation('right',playerrightImg)
  skiguy.addAnimation('left',playerleftImg)
  
  skiguy.scale=0.5
  
  for (var i = 0; i < windowWidth/2; i=i+150) {
    tree = createSprite(i, Math.round(random(windowHeight,0)),20,20);
    tree.velocityY=-2
    tree.addImage(treeImg)
    tree.scale=0.2
  
  
  }
}

function draw() {
  background('white')
  drawSprites()
  if(keyDown('left')){
    skiguy.changeAnimation('left')
    skiguy.x=skiguy.x-10
  }
  if(keyDown('right')){
    skiguy.changeAnimation('right')
    skiguy.x=skiguy.x+10
  }
 
  if(keyDown('up')){
    skiguy.changeAnimation('forward')
    
  }
} 
 
 
 