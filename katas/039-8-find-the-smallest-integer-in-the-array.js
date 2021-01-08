/*
https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

Given an array of integers, find the smallest integer.

For example:
Given [34, 15, 88, 2] should return 2
Given [34, -345, -1, 100] should return -345

The supplied array will not be empty.
*/

// Submission
function findSmallestInt(args) {
  return Math.min(...args);
}

// Practicing
function findSmallestIntZ(args) {
  return 1;
}

module.exports = findSmallestInt;
