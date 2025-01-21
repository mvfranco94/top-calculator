let num1 = '';
let num2 = '';
let operator = '';

// Get HTML references
const buttons = document.querySelectorAll('button:not([class="function"])');
const display = document.querySelector('#display');
const displayError = document.querySelector('#display-error');
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

const errorsMsgs = {
  divisionByZero: 'Division by 0? To infinity and beyond!!!',
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

function updateDisplayError(text) {
  const p = document.createElement('p');
  p.textContent = text;

  displayError.innerHTML = '';
  displayError.appendChild(p);
  displayError.style.opacity = '1';

  setTimeout(() => displayError.style.opacity = 0, 3000);
}


function reset() {
  num1 = '';
  num2 = '';
  operator = '';
  display.textContent = '';
}

function evalOperation() {
  if (num1 === '' || operator === '' || num2 === '') {
    return;
  }

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
      console.log(num2);
      if (+num2 === 0) {
        reset();
        updateDisplayError(errorsMsgs.divisionByZero);
        return;
      }
      result = operate(divide, num1, num2);
    break;
  }

  reset();
  num1 = parseInt(result * 10 ** 8) / 10 ** 8;
  updateDisplay();
}