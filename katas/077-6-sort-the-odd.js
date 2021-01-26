/*
https://www.codewars.com/kata/sort-the-odd/train/javascript

Given an array of numbers, sort odd numbers in ascending order but leave even numbers at their original index.

Example:
sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

// Submission
function sortArray(array) {
  const sortedOdds = array.filter(n => n % 2).sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2) {
      array.splice(i, 1, sortedOdds.shift());
    }
  }
  return array;
}

// Inspiration
const sortArray2 = array => {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
};

// Practicing
const sortArrayZ = array => {
  return 1;
};

module.exports = sortArray;
