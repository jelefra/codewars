/*
https://www.codewars.com/kata/shortest-word/train/javascript

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

// My try
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

// Best practice
function findShort2(s) {
  return Math.min.apply(
    null,
    s.split(" ").map(w => w.length)
  );
}

// Alternative
function findShort3(s) {
  return Math.min(...s.split(" ").map(s => s.length));
}

// Practicing
function findShortZ(args) {
  return 1;
}

module.exports = findShort;
