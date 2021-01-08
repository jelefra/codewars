/*
https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// Submission
function sumOfMultiples(number) {
  let s = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      s += i;
    }
  }
  return s;
}

// Inspiration
const sumOfMultiples2 = number => {
  const n3 = Math.floor(--number / 3);
  const n5 = Math.floor(number / 5);
  const n15 = Math.floor(number / 15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
};

const sumOfMultiples3 = number => {
  return [...Array(number).keys()].reduce(
    (sum, digit) => (digit % 3 === 0 || digit % 5 === 0 ? sum + digit : sum),
    0
  );
};

const sumOfMultiples4 = n => {
  return Array.from({ length: n }, (_, i) =>
    i % 3 === 0 || i % 5 === 0 ? i : 0
  ).reduce((x, y) => x + y, 0);
};

const sumOfMultiples5 = number => {
  return [...new Array(number).keys()]
    .filter(n => n % 3 === 0 || n % 5 === 0)
    .reduce((a, b) => a + b, 0);
};

// Practicing
const sumOfMultiplesZ = number => {
  return 1;
};

module.exports = sumOfMultiples;
