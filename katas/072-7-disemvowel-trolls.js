/*
https://www.codewars.com/kata/disemvowel-trolls/train/javascript

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// Submission
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter(letter => vowels.indexOf(letter.toLowerCase()) === -1)
    .join("");
}

// Inspiration
const disemvowel2 = str => {
  return str.replace(/[aeiou]/gi, "");
};

// Practicing
const disemvowelZ = str => {
  return 1;
};

module.exports = disemvowel;
