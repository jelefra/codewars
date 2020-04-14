/*
https://www.codewars.com/kata/unique-in-order/train/javascript

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// My try
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

// Best practice
function uniqueInOrder2(it) {
  const result = [];
  let last;

  for (let i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push((last = it[i]));
    }
  }

  return result;
}

// Practicing
function uniqueInOrderZ(m) {
  return 1;
}

module.exports = uniqueInOrder;
