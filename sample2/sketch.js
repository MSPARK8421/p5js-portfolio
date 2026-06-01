function setup() {
  createCanvas(600, 400);
  background(210, 240, 255);
  
  // 얼굴
  fill(255, 220, 180);
  stroke(0);
  ellipse(300, 210, 170, 210);
  
  // 머리
  fill(40, 25, 15);
  ellipse(300, 140, 180, 120);
  
  // 눈
  fill(255);
  ellipse(260, 200, 35, 20);
  ellipse(340, 200, 35, 20);
  
  fill(0);
  ellipse(260, 200, 12, 12);
  ellipse(340, 200, 12, 12);
  
  // 눈썹
  strokeWeight(3);
  line(240, 180, 280, 175);
  line(320, 175, 360, 180);
  
  // 코
  strokeWeight(2);
  line(300, 210, 295, 235);
  
  // 입
  noStroke();
  fill(255, 150, 150);
  ellipse(300, 260, 50, 20);
  
  // 귀
  fill(255, 220, 180);
  stroke(0);
  ellipse(220, 215, 25, 40);
  ellipse(380, 215, 25, 40);
  
  // 모자 (포인트 요소)
  fill(100, 140, 220);
  rect(250, 90, 100, 25);
  rect(270, 60, 60, 40);
  
  // 몸
  fill(120, 170, 255);
  rect(250, 310, 100, 80);
}