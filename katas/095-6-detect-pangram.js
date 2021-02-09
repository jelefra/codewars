/*
https://www.codewars.com/kata/detect-pangram/train/javascript

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return true if it is, false if not. Ignore numbers and punctuation.
*/

// Submission
function isPangram(str) {
  const a = [...str.toLowerCase()];
  for (let i = 97; i < 123; i++) {
    if (!a.includes(String.fromCharCode(i))) {
      return false;
    }
  }
  return true;
}

// Inspiration
const isPangram2 = str => {
  str = str.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every(letter => str.includes(letter));
};

const isPangram3 = str => {
  return (str.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
};

// Practicing
const isPangramZ = str => {
  return 1;
};

module.exports = isPangram;
