/*
https://www.codewars.com/kata/even-or-odd/train/javascript

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// My try
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Best practice
function even_or_odd2(number) {
  return number % 2 ? "Odd" : "Even";
}

// Practicing
function even_or_oddZ(number) {
  return 1;
}

module.exports = even_or_odd;
