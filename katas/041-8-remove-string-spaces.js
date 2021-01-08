/*
https://www.codewars.com/kata/remove-string-spaces/train/javascript

Simple, remove the spaces from the string, then return the resultant string.
*/

// Submission
function noSpace(x) {
  return x.replace(/ /g, "");
}

// Inspiration
const noSpace2 = x => {
  return x.replace(/\s/g, "");
};

// Practicing
const noSpaceZ = x => {
  return 1;
};

module.exports = noSpace;
