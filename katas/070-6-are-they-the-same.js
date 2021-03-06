/*
https://www.codewars.com/kata/are-they-the-same/train/javascript

Given two arrays a and b write a function comp(a, b) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [].

If a or b are null, the problem doesn't make sense so return false.
*/

// Submission
function comp(array1, array2) {
  if (array1 === null || array2 === null || array1.length !== array2.length) {
    return false;
  }
  for (const num of array1) {
    if (array2.indexOf(num * num) === -1) {
      return false;
    }
    array2.splice(array2.indexOf(num * num), 1);
  }
  return true;
}

// Inspiration
const comp2 = (array1, array2) => {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.every((v, i) => v * v === array2[i]);
};

// Practicing
const compZ = (array1, array2) => {
  if (array1 === null || array2 === null || array1.length !== array2.length) {
    return false;
  }
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  for (let i = 0; i < array1.length; i++) {
    if (Math.pow(array1[i], 2) !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = comp;
