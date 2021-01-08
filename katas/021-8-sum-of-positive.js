/*
https://www.codewars.com/kata/sum-of-positive/train/javascript

Given an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0.
*/

// Submission
function positiveSum(arr) {
  for (var s = 0, i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      s += arr[i];
    }
  }
  return s;
}

// Inspiration
const positiveSum2 = arr => {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
};

const positiveSum3 = arr => {
  return arr.filter(x => x >= 0).reduce((a, b) => a + b, 0);
};

const positiveSumZ = arr => {
  return 1;
};

module.exports = positiveSum;
