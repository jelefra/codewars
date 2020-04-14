/*
https://www.codewars.com/kata/square-every-digit/train/javascript

Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer
*/

// My try
function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map(Number)
      .map(x => x * x)
      .join("")
  );
}

// Clever
function squareDigits2(num) {
  return Number(
    `${num}`
      .split("")
      .map(function(val) {
        return val * val;
      })
      .join("")
  );
}

// Clever - Rewritten
function squareDigits3(num) {
  return Number(
    `${num}`
      .split("")
      .map(x => x * x)
      .join("")
  );
}

// Alternative
function squareDigits4(num) {
  return +num
    .toString()
    .split("")
    .map(i => i * i)
    .join("");
}

// Practicing
function squareDigitsZ(words) {
  return 1;
}

module.exports = squareDigits;
