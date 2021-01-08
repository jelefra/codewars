/*
https://www.codewars.com/kata/consecutive-strings/train/javascript

You are given an array of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

// Submission
const longestConsec = (words, k) => {
  if (words.length === 0 || k <= 0 || k > words.length) {
    return "";
  }
  let longest = "";
  for (let i = 0; i < words.length - k + 1; i++) {
    let thisGroup = "";
    for (let j = 0; j < k; j++) {
      thisGroup += words[i + j];
    }
    if (thisGroup.length > longest.length) {
      longest = thisGroup;
    }
  }
  return longest;
};

// Inspiration
const longestConsec2 = (words, k) => {
  if (words.length === 0 || k > words.length || k < 1) return "";
  const lens = words.map((_, i, arr) => arr.slice(i, i + k).join("").length);
  const i = lens.indexOf(Math.max(...lens));
  return words.slice(i, i + k).join("");
};

const longestConsec3 = (words, k) => {
  let longest = "";
  for (let i = 0; k > 0 && i <= words.length - k; i++) {
    const str = words.slice(i, i + k).join("");
    if (str.length > longest.length) {
      longest = str;
    }
  }
  return longest;
};

// Practicing
const longestConsecZ = (words, k) => {
  return 1;
};

module.exports = longestConsec;
