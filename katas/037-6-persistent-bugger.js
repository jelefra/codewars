/*
https://www.codewars.com/kata/persistent-bugger/train/javascript

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:
persistence(39) === 3   // because 3*9 = 27, 2*7 = 14, 1*4=4
                        // and 4 has only one digit
persistence(999) === 4  // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2
persistence(4) === 0    // because 4 is already a one-digit number
*/

// My try
function persistence(num) {
  let multiplicativePersistence = 0;
  let a = String(num).split("");
  while (a.length > 1) {
    num = parseInt(a[0]);
    for (let i = 1; i < a.length; i++) {
      num *= parseInt(a[i]);
    }
    a = String(num).split("");
    multiplicativePersistence++;
  }
  return multiplicativePersistence;
}

// Best practice
function persistence2(num) {
  let times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

// Clever
const persistence3 = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};

// Practicing
function persistenceZ(args) {
  return 1;
}

module.exports = persistence;
