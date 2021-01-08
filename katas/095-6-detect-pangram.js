/*
https://www.codewars.com/kata/detect-pangram/train/javascript

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// Submission
function isPangram(string) {
  const a = [...string.toLowerCase()];
  for (let i = 97; i < 123; i++) {
    if (!a.includes(String.fromCharCode(i))) {
      return false;
    }
  }
  return true;
}

// Inspiration
function isPangram2(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x) {
    return string.indexOf(x) !== -1;
  });
}

function isPangram3(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

// Practicing
function isPangram4() {
  return 1;
}

module.exports = isPangram;
