/*
https://www.codewars.com/kata/two-to-one/train/javascript

Take 2 strings s1 and s2 including only letters from a to z. Return the longest possible sorted string containing distinct letters from s1 and s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// Submission
function longest(s1, s2) {
  return [...new Set((s1 + s2).split("").sort())].join("");
}

// Inspiration
function longest2(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

// Practicing
const longestZ = (s1, s2) => {
  return 1;
};

module.exports = longest;
