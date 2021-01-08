/*
https://www.codewars.com/kata/find-the-odd-int/train/javascript

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

// Submission
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

// Inspiration
const findOdd2 = a => {
  return a.find(item => a.filter(d => d === item).length % 2);
};
const findOdd3 = a => {
  return a.reduce((a, b) => a ^ b);
};
const findOdd4 = a => {
  const dict = {};
  a.forEach(digit => {
    dict[digit] ? dict[digit]++ : (dict[digit] = 1);
  });

  return Number(Object.entries(dict).find(([, y]) => y % 2)[0]);
};

// Practicing
const findOddZ = a => {
  return 1;
};

module.exports = findOdd;
