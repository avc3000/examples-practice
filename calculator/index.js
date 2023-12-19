const displayValuePrevious = document.getElementById("value-previous");
const displayValueCurrent = document.getElementById("value-current");
const buttonNumbers = document.querySelectorAll(".number");
const buttonOperators = document.querySelectorAll(".operator");

const display = new Display(displayValuePrevious, displayValueCurrent);

buttonNumbers.forEach((button) => {
  button.addEventListener("click", () => display.addNumber(button.innerHTML));
});

buttonOperators.forEach((button) => {
  button.addEventListener("click", () => display.operator(button.value));
});
