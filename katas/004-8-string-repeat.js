/*
http://www.codewars.com/kata/string-repeat/train/javascript

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

// My try
function repeatStr(n, s) {
  const stringArray = [];
  while (n > 0) {
    stringArray.push(s);
    n--;
  }
  const repeatedString = "".concat(...stringArray);
  return repeatedString;
}

// Best practice
function repeatStr2(n, s) {
  return s.repeat(n);
}

// Practicing
function repeatStrZ(n, s) {
  return 1;
}

module.exports = repeatStr;
