/*
https://www.codewars.com/kata/find-the-missing-letter/train/javascript

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/

// Submission
function findMissingLetter(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i].charCodeAt(0) !== array[i - 1].charCodeAt(0) + 1) {
      return String.fromCharCode(array[i - 1].charCodeAt(0) + 1);
    }
  }
}

// Inspiration
const findMissingLetter2 = array => {
  const first = array[0].charCodeAt(0);
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
  throw new Error("Invalid input");
};

const findMissingLetter3 = array => {
  let i = array[0].charCodeAt(0);
  array.map(x => (x.charCodeAt(0) === i ? i++ : i));
  return String.fromCharCode(i);
};

// Practicing
const findMissingLetterZ = array => {
  return 1;
};

module.exports = findMissingLetter;
