var cat,catImg,cat2Img,cat3Img
var mouse,mouseImg,mouse2Img,mouse3Img
var screen,screenImg

function preload() {
catImg=loadAnimation("cat2.png","cat3.png") ;
mouseImg=loadAnimation("mouse2.png","mouse3.png");
screenImg=loadImage("garden.png");
cat2Img=loadAnimation("cat4.png")
cat3Img=loadAnimation("cat1.png");
mouse2Img=loadAnimation("mouse1.png")
mouse3Img=loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    screen=createSprite(500,400);
    screen.addImage("scr",screenImg);
    cat=createSprite(790,600);
    cat.addAnimation("catwalk",catImg);
    cat.scale=0.2
    mouse=createSprite(180,600);
    mouse.addAnimation("mou",mouseImg);
    mouse.scale=0.15
}

function draw() {
    background(255);
    
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("cat12",cat2Img); cat.velocityX=0;
        cat.x=300;
        cat.changeAnimation("cat12");
        mouse.changeAnimation("mou")
    }
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    drawSprites();
    
}


function keyPressed(){

    if(keyCode === (LEFT_ARROW)){
    cat.velocityX=-3;
    //cat.changeAnimation("catwalk",catImg);
    
    }
    
    
    
    
    
    
    
    
    
    
    
    }
    