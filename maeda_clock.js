// Update this function to draw you own maeda clock on a 960x500 canvas
let x = 1
let changeDirection = false
let speed = 7

let changeSize = false
let sizeMin = 20
let sizeMax = 50

function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(50); //  beige
  fill("white");
  angleMode(DEGREES) 
  // translate(width/2, height/2)


  // textSize(40);
  textAlign(CENTER, CENTER);
  // text("YOUR MAEDA CLOCK CODE GOES HERE", width/2, height/2);
  textFont("Calibri", 20)
  text("test!!!", x, 50)
  
  if(x>width){
    changeDirection = true
  }else if(x < 5){
    changeDirection = false
  }
  
  if(x>=0 && changeDirection == false){
    x+=speed
  }else if(changeDirection == true){
    x-=speed
  }

  textSize(sizeMin)
  text("loop!", width/2, height/2)

  // not working - fix
  if(sizeMin == sizeMax){
    changeSize = true
  }else if(sizeMin = 10){
    changeSize = false
  }

  if(sizeMin>=0 && changeSize == false){
    sizeMin += speed
  }else if(changeSize == true){
    sizeMin -= speed
  }

  
}
