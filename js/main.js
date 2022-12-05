let hex = document.getElementById("hex");
let fill = document.getElementById("fill");
let btn = document.getElementById("btn");

btn.onclick = function getNewColor() {
  let symbols, color;
  //These symbols or values for hexadecimal system
  symbols = "0123456789ABCDEF";
  color = "#";
  //The color consists of 6 digits
  for (let i = 0; i <= 5; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  // color as value for fill background
  fill.style.background = color;
  // color as value for hex element
  hex.value = color;
};
hex.oninput = function getNewColorByInput() {
  fill.style.background = hex.value;
};
// Add color when making a hover
fill.onmouseover = function getNewColorByMouseover() {
  fill.style.background = "#208790";
};
// Remove the color when removing the hover
fill.onmouseout = function getNewColorByMouseout() {
  fill.style.background = hex.value;
};
