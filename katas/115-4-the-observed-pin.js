/*
https://www.codewars.com/kata/the-observed-pin/train/javascript

Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible variations.

Can you help us to find all those variations? It would be nice to have a function, that returns an array of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we count on you!
*/

// Array.prototype.flat() wasn't working in Codewars
Object.defineProperty(Array.prototype, "flat", {
  value(depth = 1) {
    return this.reduce(function(flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  }
});

// Array.prototype.flatMap() wasn't working in Codewars
const concat = (x, y) => x.concat(y);

const flatMap = (f, xs) => xs.map(f).reduce(concat, []);

Array.prototype.flatMap = function(f) {
  return flatMap(f, this);
};

// Submission
const digitSubstitutes = {
  "1": ["1", "2", "4"],
  "2": ["1", "2", "3", "5"],
  "3": ["2", "3", "6"],
  "4": ["1", "4", "5", "7"],
  "5": ["2", "4", "5", "6", "8"],
  "6": ["3", "5", "6", "9"],
  "7": ["4", "7", "8"],
  "8": ["5", "7", "8", "9", "0"],
  "9": ["6", "8", "9"],
  "0": ["8", "0"]
};

const permute = arr =>
  arr.flatMap((v, i, a) => {
    return v.flatMap(v2 => {
      return a
        .slice(i + 1)
        .flat()
        .map(w => `${v2}${w}`);
    });
  });

const permuteRecursively = arr => {
  let copyOfArr = arr;
  while (copyOfArr.length > 1) {
    const combined = permute(copyOfArr.slice(-2));
    copyOfArr = copyOfArr.slice(0, copyOfArr.length - 2);
    copyOfArr.push(combined);
  }
  return copyOfArr.flat(1);
};

function getPINs(observed) {
  const digits = observed.split("");
  const arraysOfDigits = digits.map(digit => digitSubstitutes[digit]);
  return permuteRecursively(arraysOfDigits);
}

// Inspiration
function getPINs2(observed) {
  const adjacent = [
    /* 0 */ [0, 8],
    /* 1 */ [1, 2, 4],
    /* 2 */ [1, 2, 3, 5],
    /* 3 */ [2, 3, 6],
    /* 4 */ [1, 4, 5, 7],
    /* 5 */ [2, 4, 5, 6, 8],
    /* 6 */ [3, 5, 6, 9],
    /* 7 */ [4, 7, 8],
    /* 8 */ [5, 7, 8, 9, 0],
    /* 9 */ [6, 8, 9]
  ];

  return observed
    .split("")
    .map(function(d) {
      return adjacent[d | 0];
    })
    .reduce(
      function(pa, da) {
        return da.reduce(function(pv, d) {
          return pv.concat(
            pa.map(function(p) {
              return `${p}${d}`;
            })
          );
        }, []);
      },
      [""]
    );
}

function getPINs3(observed) {
  return observed
    .split("")
    .map(
      t =>
        ({
          "0": ["0", "8"],
          "1": ["1", "2", "4"],
          "2": ["1", "2", "3", "5"],
          "3": ["2", "3", "6"],
          "4": ["1", "4", "5", "7"],
          "5": ["2", "4", "5", "6", "8"],
          "6": ["3", "5", "6", "9"],
          "7": ["4", "7", "8"],
          "8": ["5", "7", "8", "9", "0"],
          "9": ["6", "8", "9"]
        }[t])
    )
    .reduce((pre, cur) =>
      [].concat.apply(
        [],
        pre.map(t => cur.map(g => t + g))
      )
    );
}

// Practicing
function getPINsZ() {
  return 1;
}

module.exports = getPINs;
