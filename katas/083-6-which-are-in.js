/*
https://www.codewars.com/kata/which-are-in/train/javascript

Given two arrays of strings a1 and a2, return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Notes:
Don't mutate the inputs.
*/

// Submission
function inArray(array1, array2) {
  return array1
    .reduce((acc, cv) => {
      for (let j = 0; j < array2.length; j++) {
        if (array2[j].indexOf(cv) > -1 && acc.indexOf(cv) === -1) {
          acc.push(cv);
        }
      }
      return acc;
    }, [])
    .sort();
}

// Inspiration
const inArray2 = (arr1, arr2) => {
  return arr1
    .filter(needle => arr2.some(haystack => haystack.includes(needle)))
    .sort();
};

// Practicing
const inArrayZ = (arr1, arr2) => {
  return 1;
};

module.exports = inArray;
