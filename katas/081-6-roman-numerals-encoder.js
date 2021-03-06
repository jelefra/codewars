/*
https://www.codewars.com/kata/roman-numerals-encoder/train/javascript

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:
solution(1000); // should return 'M'

Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

Remember that there can't be more than 3 identical symbols in a row.
*/

// Submission
function solution(number) {
  let roman = "";
  const mapping = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
  for (let i = 0; i < mapping.length; i++) {
    while (number >= mapping[i][0]) {
      roman += mapping[i][1];
      number -= mapping[i][0];
    }
  }
  return roman;
}

function solution2(number) {
  const roman = "";
  const mapping = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
  return mapping.reduce((roman, current) => {
    while (number >= current[0]) {
      roman += current[1];
      number -= current[0];
    }
    return roman;
  }, "");
}

// Inspiration
const solution3 = number => {
  const mapping = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
  return mapping.reduce((roman, [threshold, symbol]) => {
    while (number >= threshold) {
      roman += symbol;
      number -= threshold;
    }
    return roman;
  }, "");
};

const solution4 = number => {
  return [
    { threshold: 1000, symbol: "M" },
    { threshold: 900, symbol: "CM" },
    { threshold: 500, symbol: "D" },
    { threshold: 400, symbol: "CD" },
    { threshold: 100, symbol: "C" },
    { threshold: 90, symbol: "XC" },
    { threshold: 50, symbol: "L" },
    { threshold: 40, symbol: "XL" },
    { threshold: 10, symbol: "X" },
    { threshold: 9, symbol: "IX" },
    { threshold: 5, symbol: "V" },
    { threshold: 4, symbol: "IV" },
    { threshold: 1, symbol: "I" }
  ].reduce((roman, curr) => {
    while (number >= curr.threshold) {
      roman += curr.symbol;
      number -= curr.threshold;
    }

    return roman;
  }, "");
};

const solution5 = number => {
  const mapping = {
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

  let roman = "";
  for (const symbol in mapping) {
    while (number >= mapping[symbol]) {
      roman += symbol;
      number -= mapping[symbol];
    }
  }
  return roman;
};

const solution6 = number => {
  const mapping = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];

  let roman = "";
  for (const symbol of mapping) {
    while (number >= symbol[0]) {
      roman += symbol[1];
      number -= symbol[0];
    }
  }
  return roman;
};

// Practicing
const solutionZ = number => {
  return 1;
};

module.exports = solution;
