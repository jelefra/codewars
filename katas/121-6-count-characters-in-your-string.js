/*
https://www.codewars.com/kata/count-characters-in-your-string/train/javascript

Count all the UTF-8 characters in the string.

count(aba) returns { 'a': 2, 'b': 1 }

If the string is empty the result should be empty object literal { }.
*/

// Submission
function count(string) {
  return string.split("").reduce((accumulator, letter) => {
    letter in accumulator
      ? (accumulator[letter] += 1)
      : (accumulator[letter] = 1);
    return accumulator;
  }, {});
}

// Inspiration
const count2 = string => {
  const count = {};
  string.split("").forEach(char => {
    count[char] ? count[char]++ : (count[char] = 1);
  });
  return count;
};

const count3 = string => {
  return string.split("").reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
};

// Practicing
const countZ = string => {
  return 1;
};

module.exports = count;
