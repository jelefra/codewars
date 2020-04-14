/*
https://www.codewars.com/kata/next-bigger-number-with-the-same-digits/train/javascript

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071

If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

// My try
function nextBigger(n) {
  const a = String(n).split("");
  for (var i = 1; i <= a.length; i++) {
    let subArray = a.slice(a.length - i, a.length);
    const stringifiedSubArray = subArray.join("").toString();
    const maxSubArray = subArray
      .sort()
      .reverse()
      .join("")
      .toString();
    if (stringifiedSubArray !== maxSubArray) {
      const trunc = a.slice(0, a.length - i);
      subArray = stringifiedSubArray.split("");
      const pivot = subArray[0];
      let substitute = "";
      subArray = subArray.sort();
      for (var i = 1; i < subArray.length; i++) {
        if (subArray[i] > pivot) {
          substitute = subArray[i];
          subArray.splice(i, 1);
          break;
        }
      }
      return parseInt(trunc.join("") + substitute + subArray.join(""));
    }
  }
  return -1;
}

// Suggestion to look into
function nextBigger2(n) {
  const chars = n.toString().split("");
  let i = chars.length - 1;
  while (i > 0) {
    if (chars[i] > chars[i - 1]) break;
    i--;
  }
  if (i == 0) return -1;
  const suf = chars.splice(i).sort();
  const t = chars[chars.length - 1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length - 1] = suf[i];
  suf[i] = t;
  const res = chars.concat(suf);
  const num = parseInt(res.join(""));
  return num;
}

// Suggestion to look into
const sortedDigits = n => {
  const arr = n.toString().split("");
  arr.sort((a, b) => b - a);
  return arr;
};

function nextBigger3(n) {
  const arr = sortedDigits(n);
  const max = parseInt(arr.join(""), 10);

  for (let i = n + 1; i <= max; i++) {
    if (sortedDigits(i).every((x, j) => x === arr[j])) {
      return i;
    }
  }

  return -1;
}

// Practicing
function nextBiggerZ(args) {
  return 1;
}

module.exports = nextBigger;
