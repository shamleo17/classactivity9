
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 

  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x -5
    
  }
  if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y -5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y +5
    
  }


  
  drawSprites();
}

