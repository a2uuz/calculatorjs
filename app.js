const calc = document.querySelector("main");
const input = document.querySelector(".screen");
const btn = document.querySelectorAll("button");

let operation = "";
// let operator = null;

calc.addEventListener("click", (e) => {
  input.value = e.target.value;
});

