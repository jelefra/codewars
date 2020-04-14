/*
https://www.codewars.com/kata/weird-string-case/train/javascript

Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

// My try
function toWeirdCase(str) {
  return str
    .split(" ")
    .map(word =>
      [...word]
        .map((char, idx) => (idx % 2 ? char.toLowerCase() : char.toUpperCase()))
        .join("")
    )
    .join(" ");
}

// Best practice

// Practicing
function toWeirdCaseZ() {
  return 1;
}

module.exports = toWeirdCase;
