/*
https://www.codewars.com/kata/give-me-a-diamond/train/javascript

This kata is to practice simple string output. Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

You need to return a string that displays a diamond shape on the screen using asterisk ("*") characters. Please see provided test cases for exact output format.

The shape that will be returned from print method resembles a diamond, where the number provided as input represents the number of *’s printed on the middle line. The line above and below will be centered and will have 2 less *’s than the middle line. This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

Return null if input is even number or negative (as it is not possible to print diamond with even number or negative number).
*/

// Submission
function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  }
  let diam = "";
  for (let i = 1; i <= n; i++) {
    if (i <= Math.round(n / 2)) {
      diam += `${" ".repeat(Math.round(n / 2) - i) + "*".repeat(2 * i - 1)}\n`;
    } else {
      diam += `${" ".repeat(i - Math.round(n / 2)) +
        "*".repeat(2 * Math.round(n / 2) - 1 - 2 * (i - Math.round(n / 2)))}\n`;
    }
  }
  return diam;
}

// Inspiration
function diamond2(n) {
  if (n % 2 == 0 || n < 1) return null;
  let x = 0;
  let add;
  let diam = line(x, n);
  while ((x += 2) < n) {
    add = line(x / 2, n - x);
    diam = add + diam + add;
  }
  return diam;
}

function line(spaces, stars) {
  return `${" ".repeat(spaces) + "*".repeat(stars)}\n`;
}

function diamond3(n) {
  if (n < 0 || !(n % 2)) return null;
  const middleIndex = Math.floor(n / 2);

  return `${Array.apply(null, { length: n })
    .map((el, index) => {
      const indentation = Math.abs(index - middleIndex);
      const numberOfAsterisks = n - indentation * 2;
      return (
        Array(indentation + 1).join(" ") +
        Array(numberOfAsterisks + 1).join("*")
      );
    })
    .join("\n")}\n`;
}

// Practicing
function diamondZ() {
  return 1;
}

module.exports = diamond;
