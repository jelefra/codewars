/*
https://www.codewars.com/kata/snail/train/javascript

Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

Note: The 0x0 (empty matrix) is represented as [[]]
*/

// My try
function snail(array) {
  if (array[0].length === 0) {
    return [];
  }

  let newArray = [];
  while (array.length > 0) {
    if (array.length === 1) {
      newArray = newArray.concat(array.shift());
    } else if (array.length === 2) {
      newArray = newArray.concat(array.shift());
      newArray = newArray.concat(array.pop().reverse());
    } else {
      newArray = newArray.concat(array.shift());
      for (let i = 0; i < array.length - 1; i++) {
        newArray.push(array[i].pop());
      }
      newArray = newArray.concat(array.pop().reverse());
      for (let i = array.length - 1; i > 0; i--) {
        newArray.push(array[i].shift());
      }
    }
  }
  return newArray;
}

// Best practice
snail2 = function(array) {
  let result;
  while (array.length) {
    // Steal the first row.
    result = result ? result.concat(array.shift()) : array.shift();
    // Steal the right items.
    for (var i = 0; i < array.length; i++) result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
  }
  return result;
};

// For reference
function snail3(array) {
  const vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}

// 2 kyu solution
const _ = require("lodash");

snail4 = function(array) {
  const res = [];
  while (array.length) {
    res.push(...array.shift());
    array = _.zip(...array).reverse();
  }
  return res;
};

// Practicing

module.exports = snail;
