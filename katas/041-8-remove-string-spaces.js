/*
https://www.codewars.com/kata/remove-string-spaces/train/javascript

Simple, remove the spaces from the string, then return the resultant string.
*/

// My try
function noSpace(x) {
  return x.replace(/ /g, "");
}

// Best practice
function noSpace2(x) {
  return x.replace(/\s/g, "");
}

// Practicing
function noSpaceZ(x) {
  return 1;
}

module.exports = noSpace;
