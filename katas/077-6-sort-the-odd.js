/*
https://www.codewars.com/kata/sort-the-odd/train/javascript

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example
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
function sortArray2(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
}

// Practicing
function sortArrayZ(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
}

module.exports = sortArray;
