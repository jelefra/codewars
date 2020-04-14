/*
https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

Convert number to reversed array of digits
Given a random number you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

Success streak: |||
*/

// My try
function digitize(n) {
  const arr = String(n)
    .split("")
    .reverse();
  for (const i in arr) {
    arr[i] = parseInt(arr[i]);
  }
  return arr;
}

// Best practice
function digitize2(n) {
  return String(n)
    .split("")
    .map(Number)
    .reverse();
}

// Also
function digitize3(n) {
  return `${n}`
    .split("")
    .map(Number)
    .reverse();
}

// Also
function digitize4(n) {
  return Array.from(String(n), Number).reverse();
}

// Practicing
function digitizeZ(n) {
  return 1;
}

module.exports = digitize;
