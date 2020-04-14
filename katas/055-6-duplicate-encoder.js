/*
https://www.codewars.com/kata/duplicate-encoder/train/javascript

The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
    "din" => "((("
    "recede" => "()()()"
    "Success" => ")())())"
    "(( @" => "))(("
*/

// My try
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

// Performance
function duplicateEncode2(word) {
  const map = {};
  const characters = word.toLowerCase().split("");

  characters.forEach(char => {
    map[char] = map[char] ? ")" : "(";
  });

  return characters.map(char => map[char]).join("");
}

// Poor performance
function duplicateEncode3(word) {
  const letters = word.toLowerCase().split("");
  return letters
    .map((c, i) => {
      return letters.some((x, j) => {
        return x === c && i !== j;
      })
        ? ")"
        : "(";
    })
    .join("");
}

// Poor performance
function duplicateEncode4(word) {
  return word
    .toLowerCase()
    .split("")
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// Also
function duplicateEncode5(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}

// Practicing
function duplicateEncodeZ(word) {
  return 1;
}

module.exports = duplicateEncode;
