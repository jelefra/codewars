/*
https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/train/javascript

Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

// Submission
function getSum(a, b) {
  let s = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      s += i;
    }
    return s;
  }
  if (a > b) {
    for (let i = b; i <= a; i++) {
      s += i;
    }
    return s;
  }
}

// Inspiration
const getSum2 = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

const getSum3 = (a, b) => {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
};

// Practicing
const getSumZ = (x, y) => {
  return 1;
};

module.exports = getSum;
