function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  //set diameter to the smallest dimension
  var y = height /12;
  background(112, 193, 219);
  noStroke();
  textFont("Roboto Medium");
  textSize(y);
  
  
  
  fill(255, 179, 179);
  rect(width/62, y*3, (width/24)*hour(),  height/10, height/15);
  fill(255, 204, 204);
  rect(width/62, y*6, width/62*minute(), height/10, height/15);
  fill(255, 230, 230);
  rect(width/62, y*9, width/62*second(), height/10, height/15);
  
  fill(255, 255, 219);
  text(second(),width/40, y*9.95);
  text(minute(),width/40, y*6.95);
  text(hour(),width/40, y*3.95);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}