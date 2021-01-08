/*
https://www.codewars.com/kata/build-a-pile-of-cubes/train/javascript

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m, can you find the number n of cubes you will have to build?

The parameter of the function findNb will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
*/

// Submission
function findNb(m) {
  if (m === 0) {
    return 0;
  }
  let n = 0;
  let sum = 0;
  while (sum - m < 0) {
    n += 1;
    sum += Math.pow(n, 3);
    if (sum - m === 0) {
      return n;
    }
  }
  return -1;
}

// Inspiration
const findNb2 = m => {
  let n = 0;
  while (m > 0) {
    m -= Math.pow(++n, 3);
  }
  return m ? -1 : n;
};

// Practicing
const findNbZ = m => {
  return 1;
};

module.exports = findNb;
