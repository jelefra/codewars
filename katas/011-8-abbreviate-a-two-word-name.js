/*
https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F
*/

// My try
function abbrevName(name) {
  const array = name.split(" ");
  const abbrev = `${array[0][0]}.${array[1][0]}`;
  return abbrev.toUpperCase();
}

// Best practice
function abbrevName2(name) {
  const nameArray = name.split(" ");
  return `${nameArray[0][0]}.${nameArray[1][0]}`.toUpperCase();
}

// Shortest
function abbrevName3(name) {
  return `${name[0]}.${name.split(" ")[1][0]}`;
}

// For reference
function abbrevName4(name) {
  const nameArray = name.split(" ");
  return `${nameArray[0][0]}.${nameArray[1][0]}`.toUpperCase();
}

// Practicing
function abbrevNameZ(name) {
  return 1;
}

module.exports = abbrevName;
