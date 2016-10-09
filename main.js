var log = console.log.bind(console);

window.onload = init;

var canvas, ctx;
var xMin, xMax, yMin, yMax;
var xScale, yScale;

function init() {

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  xMin = -40;
  xMax = 200;
  yMin = -80;
  yMax = 80;

  xScale = canvas.width / (xMax - xMin);
  yScale = canvas.height / (yMax - yMin);

  ctx.fillStyle = "orange";
  ctx.fillRect(tx(20), ty(20), 4, 4);

  print_line(10, 10, 50, 50);
  print_x_axis();
  print_y_axis();


}

function print_x_axis() {
  print_line(tx(xMin), ty(0), tx(xMax), ty(0));
}

function print_y_axis() {
  print_line(tx(0), ty(yMin), tx(0), ty(yMax));
}

function print_line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function tx(x) {
  return xScale*(x - xMin);
}

function ty(y) {
  return canvas.height - ( y - yMin)*yScale;
}

function print_squares(start, end) {
  for (var i = start; i <= end; i++) {
    log(i*i);
  }
}
