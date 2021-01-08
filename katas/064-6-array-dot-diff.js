/*
https://www.codewars.com/kata/array-dot-diff/train/javascript

Implement a function that subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.
arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// Submission
function arrayDiff(a, b) {
  return a.filter(x => {
    return b.indexOf(x) < 0;
  });
}

// Inspiration
const arrayDiff2 = (a, b) => {
  return a.filter(e => !b.includes(e));
};

// Practicing
const arrayDiffZ = (a, b) => {
  return 1;
};

module.exports = arrayDiff;
