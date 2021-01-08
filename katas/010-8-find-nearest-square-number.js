/*
https://www.codewars.com/kata/find-nearest-square-number/train/javascript

Your task is to find the nearest square number, nearestSq(n), of a positive integer n.
*/

// Submission
function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}

// Inspiration
function nearestSq2(n) {
  return Math.round(n ** 0.5) ** 2;
}

// Practicing
const nearestSqZ = n => {
  return 1;
};

module.exports = nearestSq;
