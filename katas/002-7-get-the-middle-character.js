/*
https://www.codewars.com/kata/get-the-middle-character/train/javascript

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"

Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

Output
The middle character(s) of the word represented as a string.
*/

// My try
function getMiddle(s) {
  const wordLength = s.length;
  if (wordLength % 2 > 0) {
    // Word length is odd.
    const indexOfMiddle = Math.floor(wordLength / 2);
    const middleCharacter = s.substr(indexOfMiddle, 1);
    return middleCharacter;
  }
  // Word length is even.
  const indexOfMiddle = Math.floor(wordLength / 2);
  const middleCharacters = s.substr(indexOfMiddle - 1, 2);
  return middleCharacters;
}

// Best practice
function getMiddle2(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

function getMiddle3(s) {
  return s.slice(Math.floor((s.length - 1) / 2), Math.floor(s.length / 2 + 1));
}

function getMiddle4(s) {
  return s.substr((s.length - 1) / 2, s.length % 2 ? 1 : 2);
}

function getMiddle5(s) {
  return s.substr(Math.floor((s.length - 1) / 2), s.length % 2 ? 1 : 2);
}

// Practicing
function getMiddleZ(s) {
  return 1;
}

module.exports = getMiddle;
