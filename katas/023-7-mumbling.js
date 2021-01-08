/*
https://www.codewars.com/kata/mumbling/train/javascript

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// Submission
function accum(s) {
  var s = s.toLowerCase().split("");
  const mumble = [];
  for (let i = 0; i < s.length; i++) {
    mumble.push(s[i].toUpperCase() + s[i].repeat(i));
  }
  return mumble.join("-");
}

// Inspiration
const accum2 = s => {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
};

// Practicing
const accumZ = s => {
  return 1;
};

module.exports = accum;
