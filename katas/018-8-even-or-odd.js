/*
https://www.codewars.com/kata/even-or-odd/train/javascript

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// Submission
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Inspiration
const evenOrOdd2 = number => {
  return number % 2 ? "Odd" : "Even";
};

// Practicing
const evenOrOddZ = number => {
  return 1;
};

module.exports = evenOrOdd;
