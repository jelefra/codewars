/*
https://www.codewars.com/kata/split-strings/train/javascript

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

// Submission
function solution(str) {
  if (str.length % 2) {
    str += "_";
  }
  const arr = [];
  for (let i = 0; i < str.length; i += 2) {
    arr.push([...str].slice(i, i + 2).join(""));
  }
  return arr;
}

// Inspiration
const solution2 = str => {
  return `${str}_`.match(/../g);
};

const solution3 = str => {
  return (str.length % 2 ? `${str}_` : str).match(/../g);
};

// Practicing
const solutionZ = str => {
  return 1;
};

module.exports = solution;
