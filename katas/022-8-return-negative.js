/*
https://www.codewars.com/kata/return-negative/train/javascript

In this assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:
makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
*/

// Submission
function makeNegative(num) {
  return -Math.abs(num);
}

// Practicing
const makeNegativeZ = n => {
  return 1;
};

module.exports = makeNegative;
