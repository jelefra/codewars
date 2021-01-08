/*
https://www.codewars.com/kata/bit-counting/train/javascript

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// Submission
const countBits = function(n) {
  return n
    .toString(2)
    .split("")
    .map(Number)
    .filter(Boolean).length;
};

// Inspiration
const countBits2 = n => {
  return n
    .toString(2)
    .split("0")
    .join("").length;
};

const countBits3 = n => {
  return [...n.toString(2)].reduce((sum, digit) => sum + Number(digit), 0);
};

// Practicing
const countBitsZ = n => {
  return 1;
};

module.exports = countBits;
