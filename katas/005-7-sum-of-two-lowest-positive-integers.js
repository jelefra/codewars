/*
http://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/javascript

Create a function that returns the sum of the two lowest numbers given an array of minimum 4 positive integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

// Submission
function sumTwoSmallestNumbers(numbers) {
  const ordered = numbers.sort(function(a, b) {
    return a - b;
  });
  return ordered[0] + ordered[1];
}

// Inspiration
const sumTwoSmallestNumbers2 = numbers => {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
};

const sumTwoSmallestNumbers3 = numbers => {
  const [a, b] = numbers.sort((x, y) => x - y);
  return a + b;
};

// Practicing
const sumTwoSmallestNumbersZ = numbers => {
  return 1;
};

module.exports = sumTwoSmallestNumbers;
