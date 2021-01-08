/*
https://www.codewars.com/kata/unique-in-order/train/javascript

Implement the function uniqueInOrder which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// Submission
const uniqueInOrder = function(iterable) {
  if (typeof iterable !== "object") {
    iterable = iterable.split("");
  }
  const arrayOfUnique = [];
  let lastUnique = "";
  for (let i = 0; i < iterable.length; i < i++) {
    if (iterable[i] != lastUnique) {
      arrayOfUnique.push(iterable[i]);
      lastUnique = iterable[i];
    }
  }
  return arrayOfUnique;
};

// Inspiration
const uniqueInOrder2 = iterable => {
  return [...iterable].filter((item, i) => item !== iterable[i - 1]);
};

const uniqueInOrder3 = iterable => {
  const result = [];
  let last;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push((last = iterable[i]));
    }
  }

  return result;
};

// Practicing
const uniqueInOrderZ = iterable => {
  return 1;
};

module.exports = uniqueInOrder;
