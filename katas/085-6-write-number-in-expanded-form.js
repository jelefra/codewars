/*
https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript

Given a number, return it as a string in expanded form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/

// Submission
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

// Inspiration
const expandedForm3 = num => {
  return [...String(num)]
    .map((n, i, a) => n * 10 ** (a.length - i - 1))
    .filter(Boolean)
    .join(" + ");
};

const expandedForm4 = num => {
  return [...`${num}`]
    .map((d, i, a) => d + "0".repeat(a.length - 1 - i))
    .filter(a => a[0] !== "0")
    .join(" + ");
};

const expandedForm5 = num => {
  const arr = [];
  for (let e = 10, d = num % e; num; num -= d, e *= 10, d = num % e) {
    if (d) arr.unshift(d);
  }
  return arr.join(" + ");
};

const expandedForm6 = n => {
  n.toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");
};

// Practicing
const expandedFormZ = num => {
  return 1;
};

module.exports = expandedForm;
