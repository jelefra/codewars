/*
https://www.codewars.com/kata/counting-duplicates/train/javascript

Write a function that returns the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only letters (both uppercase and lowercase) and numbers.

Example
"abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// Submission
function duplicateCount(text) {
  try {
    return text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/(.)\1+/g).length;
  } catch (e) {
    return 0;
  }
}

// Inspiration
const duplicateCount2 = words => {
  const dict = {};
  [...words.toLowerCase()].forEach(value =>
    dict[value] ? dict[value]++ : (dict[value] = 1)
  );
  return Object.values(dict).filter(count => count > 1).length;
};

const duplicateCount3 = text => {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
};

const duplicateCount4 = text => {
  return text
    .toLowerCase()
    .split("")
    .filter(
      (val, i, arr) => arr.indexOf(val) !== i && arr.lastIndexOf(val) === i
    ).length;
};

const duplicateCount5 = text => {
  const lower = text.toLowerCase();
  let count = 0;
  const used = [];

  lower.split("").forEach(letter => {
    if (!used.includes(letter) && lower.split(letter).length > 2) {
      count++;
      used.push(letter);
    }
  });

  return count;
};

// Practicing
const duplicateCountZ = words => {
  const dict = {};
  [...words.toLowerCase()].forEach(character =>
    dict[character] ? dict[character]++ : (dict[character] = 1)
  );
  return Object.values(dict).filter(count => count > 1).length;
};

module.exports = duplicateCount;
