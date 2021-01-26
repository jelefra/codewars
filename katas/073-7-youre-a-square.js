/*
https://www.codewars.com/kata/youre-a-square/train/javascript

Given an integral number, determine if it's a square number.

Examples
isSquare(-1) returns  false
isSquare(0) returns   true
isSquare(3) returns   false
isSquare(4) returns   true
*/

// Submission
const isSquare = n => {
  return Number.isInteger(Math.pow(n, 0.5));
};

// Inspiration
const isSquare2 = n => {
  return Math.sqrt(n) % 1 === 0;
};

const isSquare3 = n => {
  return Number.isInteger(Math.sqrt(n));
};

// Practicing
const isSquareZ = n => {
  return 1;
};

module.exports = isSquare;
