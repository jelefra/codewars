/*
https://www.codewars.com/kata/get-character-from-ascii-value/train/javascript

Write a function that takes a number and returns the corresponding ASCII character value for that value.

Example:
getChar(65) # => 'A'
For ASCII table, you can refer to http://www.asciitable.com/
*/

// Submission
function getChar(c) {
  return String.fromCharCode(c);
}

// Practicing
const getCharZ = c => {
  return String.fromCharCode(c);
};

module.exports = getChar;
