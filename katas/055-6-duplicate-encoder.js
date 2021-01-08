/*
https://www.codewars.com/kata/duplicate-encoder/train/javascript

The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
    "din" => "((("
    "recede" => "()()()"
    "Success" => ")())())"
    "(( @" => "))(("
*/

// Submission
function duplicateEncode(word) {
  return word
    .split("")
    .map(l => {
      const regex = new RegExp(
        l.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
        "gi"
      );
      return word.replace(regex, "").length === word.length - 1 ? "(" : ")";
    })
    .join("");
}

// Inspiration
const duplicateEncode2 = word => {
  const map = {};
  const characters = word.toLowerCase().split("");

  characters.forEach(char => {
    map[char] = map[char] ? ")" : "(";
  });

  return characters.map(char => map[char]).join("");
};

const duplicateEncode3 = word => {
  const letters = word.toLowerCase().split("");
  return letters
    .map((character, i) =>
      letters.some((letter, j) => letter === character && i !== j) ? ")" : "("
    )
    .join("");
};

const duplicateEncode4 = word => {
  return word
    .toLowerCase()
    .split("")
    .map((character, i, word) =>
      word.indexOf(character) === word.lastIndexOf(character) ? "(" : ")"
    )
    .join("");
};

const duplicateEncode5 = word => {
  return word
    .toLowerCase()
    .replace(/./g, character =>
      word.indexOf(character) === word.lastIndexOf(character) ? "(" : ")"
    );
};

const duplicateEncode6 = word => {
  return Array.from(word.toLowerCase(), character =>
    [...word].filter(char => char === character).length > 1 ? ")" : "("
  ).join("");
};

// Practicing
const duplicateEncodeZ = word => {
  return 1;
};

module.exports = duplicateEncode;
