var log = console.log.bind(console);

window.onload = init;

function init() {

  print_squares(1, 8);
  print_squares(1, 18);

}

function print_squares(start, end) {
  for (var i = start; i <= end; i++) {
    log(i*i);
  }
}
