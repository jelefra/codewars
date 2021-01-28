/*
https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

Complete the function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

// Submission
function toCamelCase(str) {
  let delimiter = "";
  if (str.indexOf("_") > -1) {
    delimiter = "_";
  } else if (str.indexOf("-") > -1) {
    delimiter = "-";
  } else {
    return str;
  }
  return str.split(delimiter).reduce((acc, cv, index) => {
    return acc + (index === 0 ? cv[0] : cv[0].toUpperCase()) + cv.substring(1);
  }, "");
}

// Inspiration
const toCamelCase2 = str => {
  return str.replace(/[-_]\w/g, match => match.charAt(1).toUpperCase());
};

const toCamelCase3 = str => {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
};

const toCamelCase4 = str => {
  return str
    .split(/-|_/g)
    .map(
      (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
    )
    .join("");
};

// Practicing
const toCamelCaseZ = str => {
  return 1;
};

module.exports = toCamelCase;
