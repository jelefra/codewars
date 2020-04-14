/*
https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

Success streak: IV
*/

// My try
function expandedForm(num) {
  num = num.toString();
  const s = [];
  for (let i = num.length; i > 0; i--) {
    if (num[num.length - i] !== "0") {
      s.push(num[num.length - i] * Math.pow(10, i - 1));
    }
  }
  return s.join(" + ");
}

function expandedForm2(num) {
  num = num.toString().split("");
  return num
    .reduce((acc, cv, i) => {
      if (cv !== "0") {
        acc.push(cv * Math.pow(10, num.length - i - 1));
      }
      return acc;
    }, [])
    .join(" + ");
}

// Best practice
const expandedForm3 = num => {
  return [...String(num)]
    .map((n, i, a) => n * 10 ** (a.length - i - 1))
    .filter(Boolean)
    .join(" + ");
};

// 2dan solution
function expandedForm4(num) {
  return [...`${num}`]
    .map((d, i, a) => d + "0".repeat(a.length - 1 - i))
    .filter(a => a[0] !== "0")
    .join(" + ");
}

// 2kyu solution
function expandedForm5(num) {
  const arr = [];
  for (let e = 10, d = num % e; num; num -= d, e *= 10, d = num % e) {
    if (d) arr.unshift(d);
  }
  return arr.join(" + ");
}

// For reference
function expandedForm6(n) {
  n.toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");
}

// Practicing
function expandedFormZ() {
  return 1;
}

module.exports = expandedForm;
