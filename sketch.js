function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    
    stroke("blue");
    fill("red");
    
    // coonsole.log(mouseIsPressed);
  
   if (mouseIsPressed)  {          
    rect(mouseX,mouseY,20,35);
   }
   }
  
   