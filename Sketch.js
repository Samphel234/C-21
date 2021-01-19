var square1
var square2
var square3
var square4
function setup() {
  createCanvas(800,400);
  square1=createSprite(400, 200, 50, 50);
  square2=createSprite(400,300,50,50);
  square3=createSprite(400,100,50,50);
  square4=createSprite(200,300,50,50)
}


function draw() {
  background("lime");
  square1.x=mouseX
  square1.y=mouseY
  console.log(square1.x-square2.x);
  console.log(square1.width/2 + square2.width/2);

 if(Samphel(square1,square3)){
//true
  square1.shapeColor="red"
  square3.shapeColor="red"
 }
 else
 {
  square1.shapeColor="blue"
  square3.shapeColor="blue"
//false
 }

  drawSprites();
}


