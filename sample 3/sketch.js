let eyeMove = 0;
let hatY = 0;
let r = 210, g = 240, b = 255;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(r, g, b);

  // 눈 움직임
  eyeMove = sin(frameCount * 0.1) * 3;

  // 얼굴
  fill(255, 220, 180);
  stroke(0);
  ellipse(300, 210, 170, 210);
  
  // 머리
  fill(40, 25, 15);
  ellipse(300, 140, 180, 120);
  
  // 눈
  fill(255);
  ellipse(260 + eyeMove, 200, 35, 20);
  ellipse(340 + eyeMove, 200, 35, 20);
  
  fill(0);
  ellipse(260 + eyeMove, 200, 12, 12);
  ellipse(340 + eyeMove, 200, 12, 12);
  
  // 눈썹
  strokeWeight(3);
  line(240, 180, 280, 175);
  line(320, 175, 360, 180);
  
  // 코
  strokeWeight(2);
  line(300, 210, 295, 235);
  
  // 입 (살짝 움직이게)
  noStroke();
  fill(255, 150, 150);
  ellipse(300, 260 + sin(frameCount * 0.1) * 2, 50, 20);
  
  // 귀
  fill(255, 220, 180);
  stroke(0);
  ellipse(220, 215, 25, 40);
  ellipse(380, 215, 25, 40);
  
  // 모자 (키 누르면 움직임)
  fill(100, 140, 220);
  rect(250, 90 + hatY, 100, 25);
  rect(270, 60 + hatY, 60, 40);
  
  // 몸
  fill(120, 170, 255);
  rect(250, 310, 100, 80);

  // GIF 저장
  if (frameCount == 1) {
    saveGif("character", 5);
  }
}

// 마우스 → 배경색 변경
function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}

// 키보드 → 모자 위아래
function keyPressed() {
  if (keyCode == UP_ARROW) {
    hatY -= 10;
  }
  if (keyCode == DOWN_ARROW) {
    hatY += 10;
  }
}