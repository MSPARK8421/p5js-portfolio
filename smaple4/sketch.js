function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
}

function draw() {

  background(
    200 + sin(frameCount * 0.02) * 20,
    220 + cos(frameCount * 0.02) * 20,
    255
  );

  let faceSize = 200 + sin(frameCount * 0.05) * 10;

  fill(255, 220, 180);
  ellipse(300, 200, faceSize, faceSize);

  let eyeH = 20 + sin(frameCount * 0.2) * 8;

  fill(0);
  ellipse(260, 180, 20, eyeH);
  ellipse(340, 180, 20, eyeH);

  fill(255, 180, 150);
  triangle(300, 190, 290, 220, 310, 220);

  let mouthW = 60 + sin(frameCount * 0.08) * 10;

  fill(255, 100, 100);
  rect(300 - mouthW / 2, 240, mouthW, 20);

  fill(100 + sin(frameCount * 0.04) * 50, 50, 0);
  rect(200, 100, 200, 80);

  ellipse(100 + sin(frameCount * 0.03) * 30, 100, 50);
  ellipse(500, 80 + cos(frameCount * 0.04) * 20, 40);
  ellipse(450 + sin(frameCount * 0.02) * 25, 300, 60);
}

// GIF 저장 (교수님 요구사항 핵심)
function keyPressed() {
  if (key === 'g' || key === 'G') {
    saveGif('assignment', 5);
  }
}