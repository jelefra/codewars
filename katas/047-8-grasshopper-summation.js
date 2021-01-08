/*
https://www.codewars.com/kata/grasshopper-summation/train/javascript

Write a program that sums numbers between 1 and num. The number will always be a positive integer greater than 0.

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

// Submission
const summation = function(num) {
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }
  return sum;
};

// Inspiration
const summation2 = n => {
  return (n * (n + 1)) / 2;
};

const summation3 = n => {
  return [...Array(n + 1).keys()].slice(1).reduce((sum, n) => sum + n, 0);
};

const summation4 = n => {
  return Array.from(Array(n + 1).keys())
    .slice(1)
    .reduce((sum, n) => sum + n, 0);
};

// Practicing
const summationZ = n => {
  return 1;
};

module.exports = summation;
