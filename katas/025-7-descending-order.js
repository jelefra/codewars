/*
https://www.codewars.com/kata/descending-order/train/javascript

Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 1254859723 Output: 9875543221
*/

// Submission
function descendingOrder(n) {
  const digits = n.toString().split("");
  digits.sort(function(a, b) {
    return b - a;
  });
  return parseInt(digits.join(""));
}

// Inspiration
const descendingOrder2 = n => {
  return parseInt(
    String(n)
      .split("")
      .sort()
      .reverse()
      .join("")
  );
};

// Practicing
const descendingOrderZ = n => {
  return 1;
};

module.exports = descendingOrder;
