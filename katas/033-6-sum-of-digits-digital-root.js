/*
https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works:

digitalRoot(16)
=> 1 + 6
=> 7

digitalRoot(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6
*/

// Submission
function digitalRoot(n) {
  let a = String(n).split("");
  if (a.length === 1) {
    return n;
  }
  while (a.length > 1) {
    var s = 0;
    for (let i = 0; i < a.length; i++) {
      s += parseInt(a[i]);
    }
    a = String(s).split("");
  }
  return s;
}

const digitalRoot2 = n => {
  return ((n - 1) % 9) + 1;
};

// Inspiration
const digitalRoot3 = n => {
  while (n > 9) {
    n = [...String(n)].reduce((sum, digit) => sum + Number(digit), 0);
  }
  return n;
};

const digitalRoot4 = n => {
  return n < 10
    ? n
    : digitalRoot4(
        [...String(n)].reduce((sum, digit) => sum + Number(digit), 0)
      );
};

// Practicing
const digitalRootZ = n => {
  return 1;
};

module.exports = digitalRoot;
