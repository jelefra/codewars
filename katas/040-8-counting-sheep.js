/*
https://www.codewars.com/kata/counting-sheep-dot-dot-dot/train/javascript

Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example:
[true,  true,  true,  false,
 true,  true,  true,  true,
 true,  false, true,  false,
 true,  false, false, true,
 true,  true,  true,  true,
 false, false, true,  true]

The correct answer is 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// Submissions
function countSheep(arrayOfSheep) {
  if (Array.isArray(arrayOfSheep) && arrayOfSheep.length > 0) {
    return arrayOfSheep.reduce((acc, cv) => {
      if (cv === true) {
        acc++;
      }
      return acc;
    }, 0);
  }
  return 0;
}

function countSheep2(arrayOfSheep) {
  if (Array.isArray(arrayOfSheep) && arrayOfSheep.length > 0) {
    return arrayOfSheep.filter(sheep => sheep === true).length;
  }
  return 0;
}

// Inspiration
const countSheep3 = arrayOfSheep => {
  return arrayOfSheep.filter(Boolean).length;
};

// Practicing
const countSheepZ = arrayOfSheep => {
  return 1;
};

module.exports = countSheep;
