var rectangle1;
var rectangle2;

function setup() {
  createCanvas(800,400);
rectangle1 = createSprite(400,200,50,50);

rectangle2 = createSprite(600,170,40,40);
  
  
}

function draw() {
  background(20,20,20);  

  rectangle2.y = mouseY;
  rectangle2.x = mouseX;

  if(rectangle2.x-rectangle1.x<rectangle1.width/2+rectangle2.width/2
    &&rectangle1.x-rectangle2.x<rectangle1.width/2+rectangle2.width/2
    &&rectangle2.y-rectangle1.y<rectangle1.height/2+rectangle2.height/2
    &&rectangle1.y-rectangle2.y<rectangle2.height/2+rectangle1.height/2){
  rectangle1.shapeColor = "pink";
  rectangle2.shapeColor = "blue";
  
  }else{
    rectangle1.shapeColor = "white";
    rectangle2.shapeColor = "white";
  }
  
  drawSprites();
}