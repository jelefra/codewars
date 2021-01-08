/*
https://www.codewars.com/kata/a-needle-in-the-haystack/train/javascript

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle, it should return a message that says: "found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) should return "found the needle at position 5"
*/

// Submission
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}

// Inspiration
const findNeedle2 = haystack => {
  return `found the needle at position ${haystack.indexOf("needle")}`;
};

// Practicing
const findNeedleZ = haystack => {
  return 1;
};

module.exports = findNeedle;
