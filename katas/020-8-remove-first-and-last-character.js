/*
https://www.codewars.com/kata/remove-first-and-last-character/train/javascript

Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

// Submission
function removeChar(str) {
  return str.substr(1, str.length - 2);
}

// Inspiration
const removeChar2 = str => {
  return str.slice(1, -1);
};

// Practicing
const removeCharZ = str => {
  return str.slice(1, -1);
};

module.exports = removeCharZ;
