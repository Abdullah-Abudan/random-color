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
