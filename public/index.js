const canvasObj = document.getElementById("canvas1");
const context = canvasObj.getContext("2d");

const width = 200;
const height = 100;

function drawCircle() {
  context.beginPath();
  const centerX = 95,
    centerY = 50,
    radius = 40,
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
  context.strokeText("Text with arial font", 10, height / 2);
}

function drawDiagonalLine() {
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(width, height);
  context.moveTo(width, 0);
  context.lineTo(0, height);
  context.strokeStyle = "red";
  context.stroke();
}
