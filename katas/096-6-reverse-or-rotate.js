/*
https://www.codewars.com/kata/reverse-or-rotate/train/javascript

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If sz is <= 0 or if str is empty return ""
If sz is strictly greater than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> ""
revrot("563000655734469485", 4) --> "0365065073456944"
*/

// Submission
function revrot(str, sz) {
  if (sz <= 0 || str === "" || sz > str.length) {
    return "";
  }
  const arr = [...str];
  let result = "";
  for (let i = 0; i < Math.floor(arr.length / sz); i++) {
    const chunk = arr.slice(i * sz, (i + 1) * sz).map(Number);
    chunk.reduce((s, d) => s + d ** 3, 0) % 2
      ? chunk.push(chunk.shift())
      : chunk.reverse();
    result += chunk.join("");
  }
  return result;
}

const revrot2 = (str, sz) => {
  if (sz < 1 || sz > str.length) return "";

  const reverse = s =>
    s
      .split("")
      .reverse()
      .join("");
  const rotate = s => s.slice(1) + s.slice(0, 1);
  const sumCubes = c => c.split("").reduce((a, b) => a + +(b ** 3), 0);

  return str
    .match(new RegExp(`.{${sz}}`, "g"))
    .map(c => (sumCubes(c) % 2 ? rotate(c) : reverse(c)))
    .join("");
};

// Practicing
const revrotZ = (str, sz) => {
  return 1;
};

module.exports = revrot;
