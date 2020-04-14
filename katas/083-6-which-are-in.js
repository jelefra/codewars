/*
https://www.codewars.com/kata/which-are-in/train/javascript

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.
Don't mutate the inputs.
*/

// My try
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

// Best practice
function inArray2(a, b) {
  return a
    .filter((e, i) => a.indexOf(e) == i && b.some(s => s.indexOf(e) + 1))
    .sort();
}

// For reference
function inArray3(arr1, arr2) {
  return arr1
    .filter(function(needle) {
      return arr2.some(function(haystack) {
        return haystack.indexOf(needle) > -1;
      });
    })
    .sort();
}

// Practicing
function inArrayZ() {
  return 1;
}

module.exports = inArray;
