/*
https://www.codewars.com/kata/remove-first-and-last-character/train/javascript

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

// My try
function removeChar(str) {
  return str.substr(1, str.length - 2);
}

// Best practice
function removeChar2(str) {
  return str.slice(1, -1);
}

// Practicing
function removeCharZ(str) {
  return 1;
}

module.exports = removeChar;
