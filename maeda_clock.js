// Update this function to draw you own maeda clock on a 960x500 canvas

let hourSize = 30
let minuteSize = 125
let growSpeed = 1
let minSize = 30
let maxSize = 125
let grow = true
let hourAlpha
let minuteAlpha

let blockBlue


function preload(){
  blockBlue = loadFont("assets/BlockBlueprint.ttf")
}

function draw_clock(obj) {

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


  // dark grey background
  background("black")
  textAlign(CENTER, CENTER)
  textFont(blockBlue)

  fill(255, 0, 0)
  rect(random() * width, random() * height, 5)

  hourAlpha = map(hourSize, minSize, maxSize, 50, 255)
  minuteAlpha = map(minuteSize, minSize, maxSize, 50, 255)

  fill(255, 255, 255, hourAlpha)
  textSize(hourSize)
  text(obj.hours, width/4, height/2)

  fill(255, 255, 255, minuteAlpha)
  textSize(minuteSize)
  text(obj.minutes, width * 0.75, height/2)

  if(hourSize > maxSize){
    grow = false
  }else if(hourSize < minSize){
    grow = true
  }

  if(grow){
    hourSize += growSpeed
    minuteSize -= growSpeed
  } else if(!grow){
    hourSize -= growSpeed
    minuteSize += growSpeed
  }

  

  

  

}
