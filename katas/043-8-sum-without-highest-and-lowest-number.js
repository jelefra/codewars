/*
https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript

Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).

The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!

Examples:
[6, 2, 1, 8, 10] => 16
[1, 1, 11, 2, 3] => 6

If array is empty or null, or if only one element exists, return 0.
*/

// Submission
function sumArray(array) {
  if (Array.isArray(array) && array.length > 1) {
    return (
      array.reduce((acc, cv) => acc + cv, 0) -
      Math.min(...array) -
      Math.max(...array)
    );
  }
  return 0;
}

// Inspiration
const sumArray2 = array => {
  return (array || [])
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((sum, n) => sum + n, 0);
};

const sumArray3 = array => {
  return array && array.length > 2
    ? array.reduce((total, num) => total + num, 0) -
        Math.min(...array) -
        Math.max(...array)
    : 0;
};

const sumArray4 = array => {
  return array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((sum, n) => sum + n, 0)
    : 0;
};

// Practicing
const sumArrayZ = array => {
  return 1;
};

module.exports = sumArray;
