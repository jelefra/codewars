/*
https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

Create a function that does four basic mathematical operations.

The function should take three arguments: operation(string/char), value1(number), value2(number).
The function should return the result of applying the chosen operation to the given numbers.

Examples:
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

// Submission
function basicOp(operation, value1, value2) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };
  return operators[operation](value1, value2);
}

// Inspiration
const basicOp2 = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
};

const basicOp3 = (operation, value1, value2) => {
  return eval(value1 + operation + value2);
};

// Practicing
const basicOpZ = (operation, value1, value2) => {
  return 1;
};

module.exports = basicOp;
