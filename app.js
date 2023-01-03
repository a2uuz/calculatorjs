const calc = document.querySelector("main");
const screen = document.querySelector(".screen");
const btn = document.querySelectorAll("button");

let buffer = "0";
let runningTotal = 0;
let previousOperator = null;

function init() {
  calc.addEventListener("click", (e) => {
    btnClk(e.target.innerText);
  });
}

function btnClk(val) {
  if (isNaN(parseInt(val))) {
    handleSymb(val);
  } else {
    handleNum(val);
  }
}

function handleNum(num) {
  if (buffer === "0") {
    buffer = num;
  } else {
    buffer += num;
  }
  screen.innerText = buffer;
}

function handleSymb(sym) {
  if (sym === "C") {
    buffer = "0";
  }

  if (sym === "=") {
    if (previousOperator === null) {
      return;
    }
    flushOp(parseInt(buffer));

    buffer = "" + runningTotal;
    runningTotal = 0;
  }

  if (sym === "←" || buffer.length === 1) {
    buffer = buffer.substring(0, buffer.length - 1);
  }

  if (sym === "+" || sym === "-" || sym === "*" || sym === "/") {
    handleMath(sym);
  }

  if (buffer === "") {
    buffer = "0";
  }
  screen.innerText = buffer;
}

function handleMath(val) {
  if (buffer === 0) {
    // do nothing
    return;
  }
  // Op = Operation
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOp(intBuffer);
  }

  previousOperator = val;
  buffer = "0";
  console.log(runningTotal);
}

function flushOp(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "*") {
    runningTotal *= intBuffer;
  } else if (previousOperator === "/") {
    runningTotal /= intBuffer;
  }
}

init();
