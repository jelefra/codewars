/*
https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabet_position("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
*/

// My try
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

// Clever & best practice
function alphabetPosition2(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map(c => c.charCodeAt(0) - 96)
    .join(" ");
}

// Practicing
function alphabetPositionZ(words) {
  return 1;
}

module.exports = alphabetPosition;
