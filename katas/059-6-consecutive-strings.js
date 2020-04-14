/*
https://www.codewars.com/kata/consecutive-strings/train/javascript

You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

// My try
function longestConsec(strarr, k) {
  if (strarr.length === 0 || k <= 0 || k > strarr.length) {
    return "";
  }
  let longest = "";
  for (let i = 0; i < strarr.length - k + 1; i++) {
    let thisGroup = "";
    for (let j = 0; j < k; j++) {
      thisGroup += strarr[i + j];
    }
    if (thisGroup.length > longest.length) {
      longest = thisGroup;
    }
  }
  return longest;
}

// Best practice
function longestConsec2(strarr, k) {
  let longest = "";
  for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
    const tempArray = strarr.slice(i, i + k);
    const tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

// Clever
function longestConsec3(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k < 1) return "";
  const lens = strarr.map((_, i, arr) => arr.slice(i, i + k).join("").length);
  const i = lens.indexOf(Math.max(...lens));
  return strarr.slice(i, i + k).join("");
}

// Practicing
function longestConsecZ(words) {
  return 1;
}

module.exports = longestConsec;
