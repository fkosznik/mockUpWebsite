document
  .getElementById("contrast-toggle")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle("high-contrast");
  });
