/*
https://www.codewars.com/kata/sum-of-positive/train/javascript

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0.
*/

// My try
function positiveSum(arr) {
  for (var s = 0, i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      s += arr[i];
    }
  }
  return s;
}

// Clever
function positiveSum2(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// Alternative
function positiveSum3(arr) {
  return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}

// Practicing
function positiveSumZ(args) {
  return 1;
}

module.exports = positiveSum;
