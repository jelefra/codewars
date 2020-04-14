/*
https://www.codewars.com/kata/find-the-parity-outlier/train/javascript

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

Success streak: |||
*/

// My try
function findOutlier(integers) {
  const findTheOdd = int => int.filter(n => Math.abs(n % 2) === 1)[0];
  const findTheEven = int => int.filter(n => Math.abs(n % 2) === 0)[0];

  if (Math.abs(integers[0] % 2) === 0 && Math.abs(integers[1] % 2) === 0) {
    return findTheOdd(integers);
  }
  if (Math.abs(integers[0] % 2) === 1 && Math.abs(integers[1] % 2) === 1) {
    return findTheEven(integers);
  }
  if (Math.abs(integers[2] % 2) === 0) {
    return findTheOdd(integers);
  }
  return findTheEven(integers);
}

// Also
function findOutlier2(integers) {
  const even = integers.filter(a => a % 2 === 0);
  const odd = integers.filter(a => a % 2 === 1);
  return even.length === 1 ? even[0] : odd[0];
}

// Practicing
function findOutlierZ(integers) {
  return 1;
}

module.exports = findOutlier;
