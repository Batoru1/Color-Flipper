const btn = document.querySelector(".btn");
const span = document.querySelector(".main span");

btn.addEventListener("click", function () {
  // generate random color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // set background color of body to random color
  document.body.style.backgroundColor = randomColor;
  //   display random color name inside <span>
  span.textContent = randomColor;
});
