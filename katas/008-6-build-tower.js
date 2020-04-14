/*
https://www.codewars.com/kata/build-tower/train/javascript

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

JavaScript: returns an Array;

For example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

// My try
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

// Best practice
function towerBuilder2(n) {
  return Array.from({ length: n }, function(v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}

// Practicing
function towerBuilderZ(n) {
  return 1;
}

module.exports = towerBuilder;
