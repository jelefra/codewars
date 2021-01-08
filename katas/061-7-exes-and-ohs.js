/*
https://www.codewars.com/kata/exes-and-ohs/train/javascript

Check if a string has the same amount of 'x's and 'o's. The method returns a boolean and is case insensitive. The string can contain any character.

Examples input/output:
    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
*/

// Submission
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

// Inspiration
const XO2 = str => {
  return (
    str.toLowerCase().split("o").length === str.toLowerCase().split("x").length
  );
};

const XO3 = str => {
  const dict = { x: 0, o: 0 };
  [...str.toLowerCase()].forEach(char =>
    dict[char] ? dict[char]++ : (dict[char] = 1)
  );
  return dict.x === dict.o;
};

const XO4 = str => {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
};

const XO5 = str => {
  str = str.toLowerCase().split("");
  return (
    str.filter(x => x === "x").length === str.filter(x => x === "o").length
  );
};

// Practicing
const XOZ = str => {
  return 1;
};

module.exports = XO;
