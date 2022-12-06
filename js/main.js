let hexInput = document.getElementById("hex-input");
let backgroundDiv = document.getElementById("background-div");
let btn = document.getElementById("btn");

btn.onclick = function getNewColor() {
  let symbols, color;
  //These symbols or values for hexdecimal system
  symbols = "0123456789ABCDEF";
  color = "#";
  //The color consists of 6 digits
  for (let i = 0; i <= 5; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  // color as value for background-div background
  backgroundDiv.style.background = color;
  // color as value for hex-input element
  hexInput.value = color;
};

hexInput.oninput = function getNewColorByInput() {
  backgroundDiv.style.background = hexInput.value;
};

// Add color when making a hover
function valueColor() {
  let symbols, color;
  symbols = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i <= 5; i++) {
    color = color + symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

let setClear;
backgroundDiv.onmouseover = function getNewColorByMouseover() {
  setClear = setInterval(function () {
    backgroundDiv.style.background = valueColor();
    hexInput.value = valueColor();
  }, 500);
};

// Remove the color when removing the hover
backgroundDiv.onmouseout = function getNewColorByMouseout() {
  clearInterval(setClear);
  backgroundDiv.style.background = "";
  hexInput.value = "#800080";
};
