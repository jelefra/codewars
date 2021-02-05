/*
https://www.codewars.com/kata/fold-an-array/train/javascript

Write a method that folds a given array of integers by the middle x-times.

Fold 1-time:
[1,2,3,4,5] -> [6,6,3]

Visualization:

                     5/           5|         5\
                    4/            4|          4\
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*

Fold 2-times:
[1,2,3,4,5] -> [9,6]

As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter "runs" will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays the same array.

The input array should not be modified!
*/

// Submission
function foldArray(array, runs) {
  let arrayCopy = [...array];

  for (let i = 0; i < runs; i++) {
    arrayCopy = arrayCopy.reduce((accumulator, value, index) => {
      index < arrayCopy.length / 2
        ? (accumulator[index] = value)
        : (accumulator[arrayCopy.length - index - 1] += value);
      return accumulator;
    }, []);
  }
  return arrayCopy;
}

// Inspiration
const foldArray2 = (array, runs) => {
  const result = [];
  const copy = array.slice();
  while (copy.length) result.push(copy.pop() + (copy.shift() || 0));
  return runs - 1 ? foldArray(result, runs - 1) : result;
};

// Practicing
const foldArrayZ = (array, runs) => {
  return 1;
};

module.exports = foldArray;
