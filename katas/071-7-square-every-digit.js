/*
https://www.codewars.com/kata/square-every-digit/train/javascript

Square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

Note: The function accepts an integer and returns an integer
*/

// Submission
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

// Inspiration
const squareDigits2 = num => {
  return Number(
    `${num}`
      .split("")
      .map(val => val * val)
      .join("")
  );
};

const squareDigits3 = num => {
  return Number(
    `${num}`
      .split("")
      .map(x => x * x)
      .join("")
  );
};

const squareDigits4 = num => {
  return +num
    .toString()
    .split("")
    .map(i => i * i)
    .join("");
};

// Practicing
const squareDigitsZ = num => {
  return 1;
};

module.exports = squareDigits;
