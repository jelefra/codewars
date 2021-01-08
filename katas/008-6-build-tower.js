/*
https://www.codewars.com/kata/build-tower/train/javascript

Build a tower given the number of floors (integer and always greater than 0).

A tower block is represented as *.

For example, a tower of 3 floors looks like this:

[
  '  *  ', 
  ' *** ', 
  '*****'
]

A tower of 6 floors looks like this:

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

// Submission
function towerBuilder(nFloors) {
  let tower = [];
  let baseLength = nFloors * 2 - 1;
  let whiteSpace = "";
  for (let i = 0; i < nFloors; i++) {
    tower.push(whiteSpace + "*".repeat(baseLength) + whiteSpace);
    whiteSpace = " ".repeat(i + 1);
    baseLength -= 2;
  }
  tower = tower.reverse();
  return tower;
}

// Inspiration
const towerBuilder2 = n => {
  return Array.from({ length: n }, (v, k) => {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
};

// Practicing
const towerBuilderZ = n => {
  return 1;
};

module.exports = towerBuilder;
