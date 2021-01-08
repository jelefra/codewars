/*
https://www.codewars.com/kata/camelcase-method/train/javascript

Write simple .camelCase method for strings. All words must have their first letter capitalized without spaces.

For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

// Submission
String.prototype.camelCase = function() {
  return this.length
    ? this.trim()
        .split(" ")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join("")
    : "";
};

// Inspiration
String.prototype.camelCase2 = function() {
  return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase());
};

// Practicing
String.prototype.camelCase3 = function() {
  return 1;
};
