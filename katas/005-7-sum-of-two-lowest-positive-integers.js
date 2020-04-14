/*
http://www.codewars.com/kata/sum-of-two-lowest-positive-integers/train/javascript

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Hint: Do not modify the original array.
*/

// My try
function sumTwoSmallestNumbers(numbers) {
  const ordered = numbers.sort(function(a, b) {
    return a - b;
  });
  return ordered[0] + ordered[1];
}

// Attempt 1
function sumTwoSmallestNumbers2(numbers) {
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  const min2 = Math.min(...numbers);
  return min + min2;
}

// Attempt 2
function sumTwoSmallestNumbers3(numbers) {
  const min = numbers.reduce((a, b) => Math.min(a, b));
  numbers.splice(numbers.indexOf(min), 1);
  const min2 = numbers.reduce((a, b) => Math.min(a, b));
  return min + min2;
}

// Best practice
function sumTwoSmallestNumbers4(numbers) {
  numbers = numbers.sort(function(a, b) {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

// Clever
function sumTwoSmallestNumbers5(numbers) {
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

// Practicing
function sumTwoSmallestNumbersZ(numbers) {
  return 1;
}

module.exports = sumTwoSmallestNumbers;
