/*
https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

Given a random number, return the digits of this number within an array in reverse order.

Example:
348597 => [7, 9, 5, 8, 4, 3]
*/

// Submission
function digitize(n) {
  const arr = String(n)
    .split("")
    .reverse();
  for (const i in arr) {
    arr[i] = parseInt(arr[i]);
  }
  return arr;
}

// Inspiration
const digitize2 = n => {
  return [...String(n)].map(Number).reverse();
};

const digitize3 = n => {
  return Array.from(String(n), Number).reverse();
};

const digitize4 = n => {
  return String(n)
    .split("")
    .map(Number)
    .reverse();
};

const digitize5 = n => {
  return `${n}`
    .split("")
    .map(Number)
    .reverse();
};

// Practicing
const digitizeZ = n => {
  return 1;
};

module.exports = digitize;
