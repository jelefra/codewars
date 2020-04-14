/*
https://www.codewars.com/kata/validate-credit-card-number/train/javascript

In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.

Here is the algorithm:

Double every other digit, scanning from right to left, starting from the second digit (from the right).

Another way to think about it:
If there is an even number of digits, double every other digit starting with the first.
1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]

If there is an odd number of digits, double every other digit starting with the second:
12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
891 ==> [8, 9*, 1] ==> [8, 18, 1]

If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]
[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]

Sum all of the final digits:
[8, 9, 1] ==> 8 + 9 + 1 = 18

Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
*/

// My try
function validate(n) {
  return (
    String(n)
      .split("")
      .reverse()
      .map((d, i) => (i > 0 && i % 2 ? (2 * d > 9 ? 2 * d - 9 : 2 * d) : d))
      .reduce((t, d) => t + parseInt(d), 0) %
      10 ===
    0
  );
}

// Refactor
function validate2(n) {
  return (
    n
      .toString()
      .split("")
      .map(Number)
      .reduceRight((sum, digit, index, arr) => {
        if ((arr.length - index - 1) & 1) digit <<= 1;
        if (digit > 9) digit -= 9;
        return sum + digit;
      }, 0) %
      10 ===
    0
  );
}

// Clever
function validate3(n) {
  n = n
    .toString()
    .split("")
    .map(Number)
    .reverse();
  return (
    n.reduce(function(sum, digit, index) {
      if (index & 1) digit <<= 1;
      if (digit > 9) digit -= 9;
      return sum + digit;
    }, 0) %
      10 ===
    0
  );
}

// Practicing
function validateZ(n) {
  return 1;
}

module.exports = validate;
