const canvasObj = document.getElementById("canvas1");
const context = canvasObj.getContext("2d");

const WIDTH = 200;
const HEIGHT = 200;

function drawClockEngine(angleDeg) {
  const centerX = WIDTH / 2,
    centerY = HEIGHT / 2;
  const length = HEIGHT / 2;
  const color = "red";
  drawDiagonalLineWithAngleDegree(centerX, centerY, length, angleDeg, color);
}

function drawClock() {
  const angleStart = -90;
  const intervalMs = 1000;
  let countSeconds = 0;
  const x = 0,
    y = 0;

  setIntervalHandler();
  setInterval(() => {
    setIntervalHandler();
  }, intervalMs);

  function setIntervalHandler() {
    context.clearRect(x, y, WIDTH, HEIGHT);
    const deltaAngle = countSeconds * (360 / 60);
    const angleDeg = angleStart + deltaAngle;
    drawClockEngine(angleDeg);
    countSeconds = countSeconds == 60 ? 1 : countSeconds + 1;
  }
}

function drawCircle() {
  context.beginPath();
  const centerX = WIDTH / 2,
    centerY = HEIGHT / 2,
    radius = HEIGHT / 2,
    startAngleRad = 0,
    endAngleRad = 2 * Math.PI;
  context.arc(centerX, centerY, radius, startAngleRad, endAngleRad);
  context.strokeStyle = "orange";
  context.stroke();
}

function drawText() {
  context.beginPath();
  context.font = "22px arial";
  context.strokeStyle = "blue";
  const xBegin = 10,
    yBegin = HEIGHT / 2;
  context.strokeText("Text with arial font", xBegin, yBegin);
}

const radInDegree = 360 / (2 * Math.PI);
function drawDiagonalLineWithAngleDegree(
  xStart,
  yStart,
  length,
  angleDeg,
  color
) {
  const angleRad = angleDeg / radInDegree;
  const xEnd = xStart + length * Math.cos(angleRad);
  const yEnd = yStart + length * Math.sin(angleRad);
  context.beginPath();
  context.moveTo(xStart, yStart);
  context.lineTo(xEnd, yEnd);
  context.strokeStyle = color;
  context.stroke();
}

function drawDiagonalLine(xStart, yStart, xEnd, yEnd, color) {
  context.beginPath();
  context.moveTo(xStart, yStart);
  context.lineTo(xEnd, yEnd);
  context.strokeStyle = color;
  context.stroke();
}

function drawDiagonalLines() {
  drawDiagonalLine(0, 0, WIDTH, HEIGHT, "red");
  drawDiagonalLine(WIDTH, 0, 0, HEIGHT, "red");
}
