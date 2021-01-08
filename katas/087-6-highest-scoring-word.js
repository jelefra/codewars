/*
https://www.codewars.com/kata/highest-scoring-word/train/javascript

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

// Submission
function high(sentence) {
  let highestScore = 0; // can also do  let highestScore = 0, highestScoringWord;
  let highestScoringWord = "";
  sentence.split(" ").forEach(word => {
    const wordScore = word.split("").reduce((total, char) => {
      return (total += char.codePointAt() - 96);
    }, 0);
    if (wordScore > highestScore) {
      highestScoringWord = word;
      highestScore = wordScore;
    }
  });
  return highestScoringWord;
}

// Inspiration
function high2(s) {
  const as = s
    .split(" ")
    .map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}

function high3(x) {
  const arr = x.split(" ");
  const str = "abcdefghijklmnopqrstuvwxyz";
  const newArr = arr.map(word => {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  return arr[newArr.indexOf(Math.max(...newArr))];
}

// Practicing
function highZ() {
  return 1;
}

module.exports = high;
