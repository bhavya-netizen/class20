var a , b;

function setup() {
  createCanvas(800,400);
   a = createSprite(400, 200, 50, 50);
   b = createSprite(500,100,70,70);

   a.shapeColor = "blue";
   b.shapeColor = "blue";
}

function draw() {
  background(255,255,255); 
  console.log(b.x - a.x);

  b.x = World.mouseX;
  b.y = World.mouseY;

  if(b.x - a.x < a.width/2 + b.width/2 &&
    a.x - b.x < a.width/2 + b.width/2 &&
    b.y - a.y < a.height/2 + b.height/2 &&
    a.y - b.y < a.height/2 + b.height/2 ){

      a.shapeColor = "green";
      b.shapeColor = "green";  
    }

    else{
      a.shapeColor = "blue";
      b.shapeColor = "blue";
    }


  drawSprites();
}