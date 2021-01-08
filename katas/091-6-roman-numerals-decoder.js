/*
https://www.codewars.com/kata/roman-numerals-decoder/train/javascript

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

// Submission
function romanToArabic(roman) {
  const values = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  const subtractions = ["IV", "IX", "XL", "XC", "CD", "CM"];
  let arabic = [...roman].reduce((sum, symbol) => sum + values[symbol], 0);
  subtractions.forEach(pair => {
    if (roman.indexOf(pair) > -1) {
      arabic -= 2 * values[pair[0]];
    }
  });
  return arabic;
}

// Inspiration
function romanToArabic2(roman) {
  const conversion = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  return roman
    .match(/CM|CD|XC|XL|IX|IV|\w/g)
    .reduce((accum, roman) => accum + conversion[roman], 0);
}

// Practicing
function romanToArabicZ() {
  return 1;
}

module.exports = romanToArabic;
