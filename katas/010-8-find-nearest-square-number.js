/*
https://www.codewars.com/kata/find-nearest-square-number/train/javascript

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

// My try
function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}

// Alternative
function nearestSq2(n) {
  return Math.round(n ** 0.5) ** 2;
}

// Practicing
function nearestSqZ(n) {
  return 1;
}

module.exports = nearestSq;
