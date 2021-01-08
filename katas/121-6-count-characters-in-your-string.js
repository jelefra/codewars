/*
https://www.codewars.com/kata/count-characters-in-your-string/train/javascript

The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }
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
function count2 (string) {
  var count = {};
  string.split('').forEach(function(s) {
    count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

function count3 (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}

// Practicing
function countZ() {
  return 1;
}

module.exports = count;
