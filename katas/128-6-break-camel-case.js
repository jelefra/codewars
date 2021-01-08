/*
https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/

// Submission and best practice
const breakCamelCase = string => {
  return string.replace(/([A-Z])/g, " $1");
};

// Practicing
const breakCamelCaseZ = month => {
  return 1;
};

module.exports = breakCamelCase;
