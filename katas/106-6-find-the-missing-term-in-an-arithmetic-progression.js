/*
https://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression/train/javascript

An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write the function findMissing(list), list will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
*/

// Submission
function findMissing(list) {
  // const step = Math.min(...[list[1] - list[0], [list[2] - list[1]]]); // Doesn't work
  const step = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 1; i < list.length; i++) {
    if (list.indexOf(list[0] + i * step) === -1) {
      return list[0] + i * step;
    }
  }
}

// Inspiration
function findMissing2(list) {
  const step = (list[list.length - 1] - list[0]) / list.length;
  return list.filter((val, index) => val !== list[0] + index * step)[0] - step;
}

function findMissing3(list) {
  const expectedSum =
    ((list[0] + list[list.length - 1]) * (list.length + 1)) / 2;
  const sum = list.reduce((total, num) => total + num, 0);
  return expectedSum - sum;
}

// Practicing
function findMissingZ(list) {
  return 1;
}

module.exports = findMissing;
