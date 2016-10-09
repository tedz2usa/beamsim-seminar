var log = console.log.bind(console);

window.onload = init;

var canvas, ctx;
var xMin, xMax, yMin, yMax;
var xScale, yScale;
var xGrid, yGrid;

function init() {

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  xMin = -40;
  xMax = 200;
  xGrid = 5;
  yMin = -80;
  yMax = 80;
  yGrid = 5;

  xScale = canvas.width / (xMax - xMin);
  yScale = canvas.height / (yMax - yMin);

  print_x_axis();
  print_y_axis();


}

function print_x_axis() {
  print_line(tx(xMin), ty(0), tx(xMax), ty(0));

  for (var x = 0; x > xMin; x-=xGrid) {
    print_line(tx(x), ty(0)-4, tx(x), ty(0)+4);
  }

  for (var x = 0; x < xMax; x+=xGrid) {
    print_line(tx(x), ty(0)-4, tx(x), ty(0)+4);
  }

}

function print_y_axis() {
  print_line(tx(0), ty(yMin), tx(0), ty(yMax));

  for (var y = 0; y > yMin; y-=yGrid) {
    print_line(tx(0)-4, ty(y), tx(0)+4, ty(y));
  }

  for (var y = 0; y < yMax; y+=yGrid) {
    print_line(tx(0)-4, ty(y), tx(0)+4, ty(y));
  }

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
