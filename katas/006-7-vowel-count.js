/*
http://www.codewars.com/kata/vowel-count/train/javascript

Return the number of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters or spaces.
*/

// Submission
function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) > -1) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

// Inspiration
const getCount2 = str => {
  return (str.match(/[aeiou]/gi) || []).length;
};

const getCount3 = str => {
  return str.replace(/[^aeiou]/gi, "").length;
};

// Practicing
const getCountZ = str => {
  return 1;
};

module.exports = getCount;
