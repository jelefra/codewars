/*
https://www.codewars.com/kata/grasshopper-summation/train/javascript

Write a program that sums number between 1 and num. The number will always be a positive integer greater than 0.

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

// My try
const summation = function(num) {
  let sum = 0;
  for (let i = num; i > 0; i--) {
    sum += i;
  }
  return sum;
};

// Best practice
const summation2 = n => {
  return (n * (n + 1)) / 2;
};

// Practicing
const summationZ = n => {
  return 1;
};

module.exports = summation;
