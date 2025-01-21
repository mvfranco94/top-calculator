let num1 = '';
let num2 = '';
let operator = '';

// Get HTML references
const buttons = document.querySelectorAll('button:not([class="function"])');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const eval = document.querySelector('#eval');

// basic functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operation, a, b) {
  return operation(+a, +b);
} 


clear.addEventListener('click', reset);
eval.addEventListener('click', evalOperation)
buttons.forEach(button => button.addEventListener('click', () => fillOperands(button.textContent)));

function fillOperands(value) {
  if ((num1 !== '' && num1 !== '-') && '+-*/'.includes(value) && operator === '') {
    operator = value;
  }
  
  if (operator === '') {
    if (!isNaN(value) || value === '-' && num1 === '')
    num1 = isNaN(num1 + value)? num1 + value : +(num1 + value); 
  } else if (!isNaN(value)) {
    num2 += +value;
  }

  updateDisplay();
}

function updateDisplay() {
  display.textContent = `${num1} ${operator} ${num2}`;
}


function reset() {
  num1 = '';
  num2 = '';
  operator = '';
  display.textContent = '';
}

function evalOperation() {
  let result;  
  switch(operator) {
    case '+':
      result = operate(add, num1, num2);
      break;
    case '-':
      result = operate(subtract, num1, num2);
    break;
    case '*':
      result = operate(multiply, num1, num2);
      break;
    case '/':
      result = operate(divide, num1, num2);
    break;
  }

  reset();
  num1 = parseInt(result * 10 ** 8) / 10 ** 8;
  updateDisplay();
}