/*
https://www.codewars.com/kata/find-the-unique-number-1/train/javascript

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// Submission
function findUniq(arr) {
  if (arr.filter(x => x === arr[0]).length === 1) {
    return arr[0];
  }
  return arr.filter(x => x !== arr[0])[0];
}

// Inspiration
function findUniq2(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

// Practicing
function findUniqZ(arr) {}

module.exports = findUniq;
