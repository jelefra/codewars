/*
https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript

Given an array of integers.

Return an array, where the first element is the count of positive numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// My try
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || (Array.isArray(input) && input.length === 0)) {
    return [];
  }
  const arr = [0, 0];
  for (const n in input) {
    if (input[n] > 0) {
      arr[0]++;
    } else if (input[n] < 0) {
      arr[1] += input[n];
    }
  }
  return arr;
}

// Best practice
function countPositivesSumNegatives2(input) {
  return input && input.length
    ? input.reduce(
        (output, value) => {
          value > 0 ? output[0]++ : (output[1] += value);
          return output;
        },
        [0, 0]
      )
    : [];
}

// Also
function countPositivesSumNegatives3(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  return input.reduce(
    (arr, n) => {
      if (n > 0) {
        arr[0]++;
      } else if (n < 0) {
        arr[1] += n;
      }
      return arr;
    },
    [0, 0]
  );
}

// Also
function countPositivesSumNegatives4(input) {
  if (input == null || input.length == 0) return [];

  let positive = 0;
  let negative = 0;

  for (let i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) positive++;
    else negative += input[i];
  }

  return [positive, negative];
}

// Also
function countPositivesSumNegatives5(input) {
  return input && input.length
    ? [
        input.filter(p => p > 0).length,
        input.filter(n => n < 0).reduce((s, n) => s + n, 0)
      ]
    : [];
}

// Practicing
function countPositivesSumNegativesZ(input) {
  return 1;
}

module.exports = countPositivesSumNegatives;
