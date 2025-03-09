/*
 * use p5.js to draw a clock on a 960x500 canvas
 */


/// SPRITES
let bg, clouds, cloudsX, tree, shadow

let trainUP, trainDOWN, train1, train2, train

let leaf1, leaf2, leaf3, leaf4

let rock1, rock2, rock3, rock4

let bushA1, bushA2, bushB1, bushB2

let tumbleweed, TWshadow

let cowboy, cowboy2, cowboyAnimation

let vulture

/// VARIABLES
let leavesBehindTree = []
let leavesFrontOfTree = []
let idleRight = true
let offset

/// FONTS
let western
let yoster

function preload(){
  /// LOAD SPRITES
  bg = loadImage("assets/bg.png")
  tree = loadImage("assets/tree trunk.png")
  shadow = loadImage("assets/shadow.png")
  clouds = loadImage("assets/clouds.png")
  cloudsX = 0
  
  leaf1 = loadImage("assets/leaf1.png")
  leaf2 = loadImage("assets/leaf2.png")
  leaf3 = loadImage("assets/leaf3.png")
  leaf4 = loadImage("assets/leaf4.png")

  rock1 = loadImage("assets/rock1.png")
  rock2 = loadImage("assets/rock2.png")
  rock3 = loadImage("assets/rock3.png")
  rock4 = loadImage("assets/rock4.png")

  bushA1 = loadImage("assets/bushA1.png")
  bushA2 = loadImage("assets/bushA2.png")
  bushB1 = loadImage("assets/bushB1.png")
  bushB2 = loadImage("assets/bushB2.png")

  tumbleweed = loadImage("assets/tumbleweed.png")
  TWshadow = loadImage("assets/tw shadow.png")

  trainUP = loadImage("assets/trainUP.png")
  trainDOWN = loadImage("assets/traindowntest.png")
  train = new Train(trainUP, trainDOWN, 960, 140, 0.5);

  cowboy = loadImage("assets/cowboy.png")
  cowboy2 = loadImage("assets/cowboy2.png")

  vulture = loadImage("assets/vulture.png")

  /// LOAD FONTS
  western = loadFont("assets/Pixel-Western.ttf")
  yoster = loadFont("assets/yoster.ttf")
  blockBlue = loadFont("assets/BlockBlueprint.ttf")

  /// SET UP LEAVES
  leavesBehindTree = [
    { img: leaf4, x: 220, y: 280 },
    { img: leaf4, x: 250, y: 275 },
    { img: leaf3, x: 230, y: 295 },

    { img: leaf3, x: 275, y: 240 },
    { img: leaf3, x: 240, y: 215 },

    { img: leaf4, x: 60, y: 355 },
    { img: leaf4, x: 30, y: 320 },
    { img: leaf4, x: 85, y: 310 },

    { img: leaf4, x: 215, y: 175 },
    { img: leaf4, x: 180, y: 170 },
  ];

  leavesFrontOfTree = [
    { img: leaf3, x: 235, y: 280 },

    { img: leaf2, x: 250, y: 230 },
    { img: leaf1, x: 280, y: 225 },
    { img: leaf1, x: 265, y: 205 },

    { img: leaf3, x: 75, y: 340 },
    { img: leaf3, x: 60, y: 315 },
    { img: leaf2, x: 40, y: 340 },
    { img: leaf1, x: 80, y: 295 },
    { img: leaf1, x: 45, y: 300 },

    { img: leaf4, x: 125, y: 275 },
    { img: leaf4, x: 145, y: 265 },
    { img: leaf4, x: 155, y: 250 },
    { img: leaf3, x: 160, y: 265 },
    { img: leaf3, x: 115, y: 250 },
    { img: leaf2, x: 140, y: 235 },

    { img: leaf4, x: 75, y: 215 },
    { img: leaf4, x: 90, y: 190 },
    { img: leaf2, x: 50, y: 175 },
    { img: leaf3, x: 55, y: 220 },
    { img: leaf3, x: 80, y: 180 },
    { img: leaf2, x: 80, y: 200 },
    { img: leaf1, x: 45, y: 195 },
    { img: leaf1, x: 70, y: 170 },

    { img: leaf3, x: 200, y: 165 },
    { img: leaf2, x: 185, y: 150 },
    { img: leaf2, x: 235, y: 160 },
    { img: leaf1, x: 205, y: 135 },

    { img: leaf4, x: 140, y: 180 },
    { img: leaf4, x: 125, y: 130 },
    { img: leaf3, x: 125, y: 170 },
    { img: leaf3, x: 150, y: 150 },
    { img: leaf3, x: 105, y: 140 },
    { img: leaf2, x: 130, y: 145 },
    { img: leaf2, x: 165, y: 130 },
    { img: leaf1, x: 145, y: 120 },
    { img: leaf1, x: 180, y: 110 },
  ];
}


function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  // load background image
  background("#70b3b2")


  image(clouds, cloudsX, -10)
  image(clouds, cloudsX + clouds.width, -10)

  cloudsX -= 0.2

  // reset cloudsX
  if(cloudsX < -clouds.width){
    cloudsX = 0
  }

  image(bg, 0, 0)

  ///////////////////////////////////////////////////////
  ///////////////////// TRAIN ///////////////////////////

  // train arrives every hour
  if(obj.minutes == 47){
    train.move()
    train.draw(obj.millis)
  }

  if (mouseX > train.getX() && mouseX < train.getX() + 100 &&
      mouseY > train.getY() && mouseY < train.getY() + 50) {
      fill("black")
      textFont(blockBlue, 30);
      text(obj.hours + "/24", 800, 480)
  }
  /////////////////// END OF TRAIN ///////////////////////
  ///////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////
  ///////////////////// ROCKS ///////////////////////////


  if(idleRight){
    image(bushA1, 85, 395)
    image(bushB1, 60, 405)
  }else{
    image(bushA2, 85, 395)
    image(bushB2, 60, 405)
  }

  // image(bushA1, 80, 395)
  

  image(rock4, 75, 440)

  /////////////////// END OF ROCKS //////////////////////
  ///////////////////////////////////////////////////////

  angleMode(DEGREES)
  let secondRotation = map(obj.seconds, 0, 59, 360, 0)
  let secondMovement = map(obj.seconds, 0, 59, 0, 960)  

  // tint(150,150)
  // image(TWshadow, secondMovement - 30, 300)
  // tint(255,255)

  push()
  translate(secondMovement, 265)
  rotate(secondRotation)
  image(tumbleweed, 0, 0)
  pop()

  ///////////////////////////////////////////////////////
  ///////////////////// TREE ////////////////////////////

  // LEAVES BEHIND THE TREE
  for (let i = 0; i < leavesBehindTree.length; i++) {
    if (idleRight) {
      offset = 5;
    } else {
      offset = 0;
    }
    image(leavesBehindTree[i].img, leavesBehindTree[i].x + offset, leavesBehindTree[i].y)
  }

  // DRAW THE TREE'S SHADOW
  tint(150,150)
  image(shadow, 0, 10)  
  tint(255,255)

  // DRAW THE TREE TRUNK
  image(tree, 0, 10)

  image(rock2, 45, 440)
  image(rock4, 75, 440)


  // LEAVES IN FRONT OF THE TREE
  for (let i = 0; i < leavesFrontOfTree.length; i++) {
    if (idleRight) {
      offset = 5
    } else {
      offset = 0
    }
    image(
      leavesFrontOfTree[i].img,
      leavesFrontOfTree[i].x + offset,
      leavesFrontOfTree[i].y
    )
  }

  // MOVE THE LEAVES EVERY 30 FRAMES (0.5 seconds)
  // if (frameCount % 30 === 0) {
  //   idleRight = !idleRight;
  // }

  if(obj.seconds % 2 == 1){
    idleRight = true
  }else{
    idleRight = false
  }


  /////////////////// END OF TREE ///////////////////////
  ///////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////
  //////////////////// COWBOY ///////////////////////////

  // COWBOY HITBOX PARAMETERS
  let xMin = 170, xMax = 220, yMin = 380, yMax = 460
  // noStroke()
  // fill("red")
  // rect(xMin, yMin, xMax - xMin, yMax - yMin)

  // DRAW THE COWBOY
  if (mouseIsPressed && mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax) {
    cowboyAnimation = obj.seconds + 3 // Set speed boost to last 3 seconds
    if(cowboyAnimation == 59){
      cowboyAnimation -= 59
    }
  }


  if(obj.seconds >= cowboyAnimation - 3 && obj.seconds < cowboyAnimation
    || cowboyAnimation < 3 && obj.seconds < cowboyAnimation){ // if the cowboy is speed boosted
    if (obj.millis % 300 < 150) {
      image(cowboy, 165, 370);
    } else {
      image(cowboy2, 165, 375);
    }
      fill("black")
      textFont(blockBlue, 30);
      if(obj.minutes == 15){
        text("Reckon a quarter's gone past...", 250, 370);
      }else{
        text("ZzzZzzz...", 250, 370);
      }
      
  } else{ // else: he will endlessly loop his idle animation
    if (obj.seconds %  2 === 0) {
      image(cowboy, 165, 370);
    } else {
      image(cowboy2, 165, 375);
    }
  }

  // vulture test
  
  // vulture.resize(0, 98)
  // image(vulture, 400, 370)


  ////////////////// END OF COWBOY //////////////////////
  ///////////////////////////////////////////////////////
}


class Train {
  constructor(img1, img2, x, y, speed){
    this.img1 = img1
    this.img2 = img2
    this.x = x
    this.y = y
    this.speed = speed
  }

  move(){
    this.x -= this.speed
  }

  getX(){
    return this.x
  }

  getY(){
    return this.y
  }

  draw(currentMillis){
    push()
    let imgToUse = (currentMillis % 1000 < 500) ? this.img1 : this.img2
    if(imgToUse == this.img1){
      image(imgToUse, this.x, this.y)
    }else if(imgToUse == this.img2){
      image(imgToUse, this.x, this.y + 5)
    }
    pop()
  }

}