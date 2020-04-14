/*
https://www.codewars.com/kata/does-my-number-look-big-in-this/train/javascript

A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits): 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits): 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

Success streak: V
*/

// My try
function narcissistic(n) {
  return (
    [...n.toString()].reduce((total, digit, index, src) => {
      return (total += digit ** src.length);
    }, 0) === n
  );
}

// Practicing
function narcissisticZ() {
  return 1;
}

module.exports = narcissistic;
