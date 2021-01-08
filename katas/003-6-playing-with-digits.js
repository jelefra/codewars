/*
https://www.codewars.com/kata/playing-with-digits/train/javascript

Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:

Is there an integer k such as : (a^p + b^(p+1) + c^(p+2) + d^(p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n, p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

// Submission
function digPow(n, p) {
  // Convert the integer to a string to count the number of digits using 'length'.
  const countOfDigits = n.toString().length;
  let sum = 0;
  // Get the sum of the digits to the successive powers.
  for (let i = 0; i < countOfDigits; i++) {
    const digit = n.toString()[i];
    const parsedDigit = parseInt(digit);
    sum += Math.pow(parsedDigit, p);
    p += 1;
  }
  // Check if the sum is a multiple of n and if yes return the factor.
  if (sum % n === 0) {
    return sum / n;
  }
  return -1;
}

// Inspiration
function digPow2(n, p) {
  const sum = String(n)
    .split("")
    .reduce((total, digit, index) => total + Number(digit) ** (p + index), 0);
  return sum % n ? -1 : sum / n;
}

// Practicing
const digPowZ = (n, p) => {
  return 1;
};

module.exports = digPow;
