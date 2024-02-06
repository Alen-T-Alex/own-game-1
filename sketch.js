var bgImg,table,tableImg,ball,ballImg,racket1,racket1Img,racket2,racket2Img;


function preload(){
  bgImg=loadImage("assets/rio 2016 1.jpg")
  tableImg=loadImage("assets/rio-table-tennis_table.png")
   
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    table=createSprite(windowWidth/2,windowHeight/2+85,50,100);
    table.scale=2

}
function draw(){
    background(bgImg)
    table.addImage("table1",tableImg)
    
    
    
    
    
    
    
    
    
  drawSprites();
}
