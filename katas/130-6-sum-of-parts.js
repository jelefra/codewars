/*
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

Let's consider this example: ls = [0, 1, 3, 6, 10]

Its following parts:
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []

The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function partsSums will take as parameter a list ls and return a list of the sums of its parts as defined above.

Other Examples:
ls = [1, 2, 3, 4, 5, 6]
partsSums(ls) -> [21, 20, 18, 15, 11, 6, 0]
*/

// Submission
const partsSums = ls => {
  const total = ls.reduce((sum, number) => sum + number, 0);
  return ls.reduce(
    (sums, number, index) => {
      sums.push(sums[index] - number);
      return sums;
    },
    [total]
  );
};

// Inefficient
const partsSums2 = ls => {
  const sums = [];
  while (ls.length) {
    sums.push(ls.reduce((sum, number) => sum + number, 0));
    ls.shift();
  }
  sums.push(0);
  return sums;
};

// Inspiration
const partsSums3 = ls => {
  ls.unshift(0);
  let sum = ls.reduce((total, number) => total + number, 0);
  return ls.map(value => (sum -= value));
};

// Practicing
const partsSumsZ = ls => {
  return 1;
};

module.exports = partsSums;
