var log = console.log.bind(console);

window.onload = init;

function init() {
  var CA = document.getElementById("content_a");
  var CB = document.getElementById("content_b");
  var CC = document.getElementById("content_c");
  log(CA);
  log(CB);
  log(CC);

  CA.innerHTML = CA.innerHTML + " Added text.";
  CB.innerHTML = "Replaced Text";
  CC.style.color = "rgb(255,128,0)";
  CC.style.fontFamily = "Consolas";
  CC.style.fontSize = "72px";
  CC.style.fontWeight = "bold";
  CC.style.fontStyle = "italic";
  CC.style.textDecoration = "underline";

}
