/*
https://www.codewars.com/kata/shortest-word/train/javascript

Given a string of words, return the length of the shortest word.

The string will never be empty and you do not need to account for different data types.
*/

// Submission
function findShort(s) {
  const a = s.split(" ");
  let shortestWordLength = a[0].length;
  for (let i = 1; i < a.length; i++) {
    if (a[i].length < shortestWordLength) {
      shortestWordLength = a[i].length;
    }
  }
  return shortestWordLength;
}

// Inspiration
const findShort2 = s => {
  return Math.min(...s.split(" ").map(s => s.length));
};

const findShort3 = s => {
  return Math.min(...s.split(" ").map(({ length }) => length));
};

const findShort4 = s => {
  return Math.min.apply(
    null,
    s.split(" ").map(w => w.length)
  );
};

// Practicing
const findShortZ = s => {
  return 1;
};

module.exports = findShort;
