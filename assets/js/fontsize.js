let defaultFontSize = $font - size - base;
let currentFontSize = defaultFontSize;
const fontStep = 4;

function changeFontSize(newSize) {
  document.documentElement.style.fontSize = newSize + "px";
}

function resetFontSize() {
  currentFontSize = defaultFontSize;
  changeFontSize(currentFontSize);
}

document
  .getElementById("increase-font")
  .addEventListener("click", function (e) {
    e.preventDefault();
    currentFontSize += fontStep;
    changeFontSize(currentFontSize);
  });

document
  .getElementById("decrease-font")
  .addEventListener("click", function (e) {
    e.preventDefault();
    currentFontSize -= fontStep;
    if (currentFontSize < fontStep) {
      currentFontSize = fontStep;
    }
    changeFontSize(currentFontSize);
  });

document.getElementById("reset-font").addEventListener("click", function (e) {
  e.preventDefault();
  resetFontSize();
});
