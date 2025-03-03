// Update this function to draw you own maeda clock on a 960x500 canvas
let x = 1
let changeDirection = false
let speed = 7

let changeSize = false
let changeSize2 = true

let changeBySeconds = false

let hourSize = 30
let minuteSize = 100
let minSize = 20
let maxSize = 40
let growSpeed = 15

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

  // textSize(size)
  // text(obj.hours, width/4, height/2)

  // if(size === sizeMax){
  //   changeSize = true
  // } else if(size === sizeMin){
  //   changeSize = false
  // }
  
  // if(sizeMin>=0 && changeSize == false){
  //   size += speed2
  // }else if(changeSize == true){
  //   size -= speed2
  // }

  // textSize(size2)
  // text(obj.minutes, width * 0.75, height/2)

  // // loop goes in opposite direction
  // if(size2 === sizeMax){
  //   changeSize2 = false
  // } else if(size2 === sizeMin){
  //   changeSize2 = true
  // }

  // if(sizeMin>=0 && changeSize2 == false){
  //   size2 -= speed2
  // }
  // else if(changeSize2 == true){
  //   size2 += speed2
  // }

  // // make the text blink using seconds
  // if(obj.seconds % 2 === 0){
  //   fill("black")
  // }
  // else{
  //   fill("white")
  // }
  // textSize(75)
  // text(": ", width/2, height/2)


  if(obj.seconds === 30){
    changeBySeconds = false
  }else if(obj.seconds === 0){
    changeBySeconds = true
  }

  if(changeBySeconds == true){
    fill("red")
  }else if(changeBySeconds == false){
    fill("white")
  }

  textSize(50)
  text("colour change", width/2, height/3)

  fill("gray")
  textSize(20)
  text(obj.seconds, width/2 + 200, height/3)

  

  // testing with maps
  fill("white")
  hourSizeUp = map(obj.seconds, 0, 30, minSize, maxSize);
  hourSizeDown = map(obj.seconds, 30, 60, maxSize, minSize);
  
  textSize(hourSizeUp)
  text("increase test", width * 0.75, height - 40)

  textSize(hourSizeDown)
  text("decrease test", width * 0.75, height - 20)

  



  // display a normal clock
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  // fill("red")
  // textSize(size)
  // text(obj.seconds, width/4, height/2)

  // if(size === sizeMax){
  //   changeSize = true
  // } else if(size === sizeMin){
  //   changeSize = false
  // }
  
  // if(sizeMin>=0 && changeSize == false){
  //   size += speed2
  // }else if(changeSize == true){
  //   size -= speed2
  // }

  
  // text(obj.minutes, width/2, height/2 + 20)
  // text(obj.seconds, width/2, height/2 + 40)
  // text(obj.millis, width/2, height/2 + 60)
}
