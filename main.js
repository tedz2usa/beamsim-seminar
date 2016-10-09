var log = console.log.bind(console);

window.onload = init;

var canvas, ctx;

function init() {

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  log(canvas);
  log(ctx);

  ctx.fillStyle = "orange";
  ctx.fillRect(tx(20), ty(20), 4, 4);

  print_line(10, 10, 50, 50);

}

function print_line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function tx(x) {
  return x;
}

function ty(y) {
  return canvas.height - y;
}

function print_squares(start, end) {
  for (var i = start; i <= end; i++) {
    log(i*i);
  }
}
