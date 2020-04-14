/*
https://www.codewars.com/kata/two-to-one/train/javascript

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// My try
function longest(s1, s2) {
  return [...new Set((s1 + s2).split("").sort())].join("");
}

// Best practice
function longest2(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}

// Practicing
function longestZ(s1, s2) {
  return 1;
}

module.exports = longest;

// See
// https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
