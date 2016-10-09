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
