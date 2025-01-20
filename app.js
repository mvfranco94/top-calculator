let num1 = null;
let num2 = null;
let operator = null;

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
  return operation(a, b);
} 


clear.addEventListener('click', reset);
eval.addEventListener('click', evalOperation)
buttons.forEach(button => button.addEventListener('click', () => fillOperands(button.textContent)));

function fillOperands(value) {
  if(num1 !== null && operator === null && '+-/*'.includes(value)) {
    operator = value;
  }

  console.log(num1);
  if(!operator && !isNaN(value)) {
    if (num1 === null) {
      num1 = +value;
    } else {
      num1 = +`${num1}${value}`;
    }
  } else if(!!operator && !isNaN(value)) { 
    if (num2 === null) {
      num2 = +value;
    } else {
      num2 = +`${num2}${value}`;
    }

  }
  
  display.textContent = `${num1} ${operator === null ? '' : operator} ${num2 === null? '' : num2}`;
}



function reset() {
  num1 = null;
  num2 = null;
  operator = null;
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
  display.textContent = result;
}