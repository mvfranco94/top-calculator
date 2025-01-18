let num1 = 0;
let num2 = 0;
let operator = '';

// basic functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operation, a, b) {
  return operation(a, b);
}


console.log(operate(multiply, 1, 2));
