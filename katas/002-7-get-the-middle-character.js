/*
https://www.codewars.com/kata/get-the-middle-character/train/javascript

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"
*/

// Submission
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

// Inspiration
const getMiddle2 = s => {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
};

const getMiddle3 = s => {
  return s.slice(Math.floor((s.length - 1) / 2), Math.floor(s.length / 2 + 1));
};

const getMiddle4 = s => {
  return s.substring((s.length - 1) / 2, s.length / 2 + 1);
};

const getMiddle5 = s => {
  return s.substring(
    Math.floor((s.length - 1) / 2),
    Math.floor(s.length / 2 + 1)
  );
};

// Practicing
const getMiddleZ = s => {
  return 1;
};

module.exports = getMiddle;
