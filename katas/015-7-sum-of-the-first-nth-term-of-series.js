/*
https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/train/javascript

Your task is to write a function which returns the sum of following series up to the nth term.

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given natural numbers as arguments.

Examples:
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
*/

// Submission
function seriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }
  return (Math.round(sum * 100) / 100).toFixed(2);
}

// Inspiration
const seriesSum2 = n => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }

  return sum.toFixed(2);
};

// Practicing
const seriesSumZ = m => {
  return 1;
};

module.exports = seriesSum;
