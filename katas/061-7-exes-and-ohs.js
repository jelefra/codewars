/*
https://www.codewars.com/kata/exes-and-ohs/train/javascript

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
*/

// My try
function XO(str) {
  return (
    str
      .toLowerCase()
      .split("o")
      .join("").length ===
    str
      .toLowerCase()
      .split("x")
      .join("").length
  );
}

// Clever
function XO2(str) {
  return (
    str.toLowerCase().split("o").length === str.toLowerCase().split("x").length
  );
}

// Also
function XO3(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

const XO4 = str => {
  str = str.toLowerCase().split("");
  return (
    str.filter(x => x === "x").length === str.filter(x => x === "o").length
  );
};

// Practicing
function XOZ(words) {
  return 1;
}

module.exports = XO;
