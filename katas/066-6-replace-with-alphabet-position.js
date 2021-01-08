/*
https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript

Given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

// Submission
function alphabetPosition(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(char => char.match(/[a-z]/))
    .map(char => {
      return char.charCodeAt(0) - 96;
    })
    .join(" ");
}

// Inspiration
const alphabetPosition2 = text => {
  return text
    .toLowerCase()
    .match(/\w/g)
    .map(char => char.charCodeAt(0) - 96)
    .join(" ");
};

// Practicing
const alphabetPositionZ = words => {
  return 1;
};

module.exports = alphabetPosition;
