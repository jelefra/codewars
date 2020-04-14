/*
https://www.codewars.com/kata/find-the-odd-int/train/javascript

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

// My try
function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        count++;
      }
    }
    if (count % 2 === 1) {
      return A[i];
    }
  }
}

// Best practice
const findOdd2 = xs => xs.reduce((a, b) => a ^ b);

// Alternative
function findOdd3(A) {
  const obj = {};
  A.forEach(function(el) {
    obj[el] ? obj[el]++ : (obj[el] = 1);
  });

  for (prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

// Practicing
function findOddZ(m) {
  return 1;
}

module.exports = findOdd;
