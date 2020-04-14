/*
https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works (Ruby example given):

digital_root(16)
=> 1 + 6
=> 7

digital_root(942)
=> 9 + 4 + 2
=> 15 ...
=> 1 + 5
=> 6

digital_root(132189)
=> 1 + 3 + 2 + 1 + 8 + 9
=> 24 ...
=> 2 + 4
=> 6

digital_root(493193)
=> 4 + 9 + 3 + 1 + 9 + 3
=> 29 ...
=> 2 + 9
=> 11 ...
=> 1 + 1
=> 2
*/

// My try
function digital_root(n) {
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

// Clever
function digital_root2(n) {
  return ((n - 1) % 9) + 1;
}

// Practicing
function digital_rootZ(args) {
  return 1;
}

module.exports = digital_root;
