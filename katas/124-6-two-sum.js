/*
https://www.codewars.com/kata/two-sum/train/javascript

Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

twoSum [1, 2, 3] 4 === (0, 2)

*/

// Submission
function twoSum(numbers, target) {
  let sol;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.slice(i + 1).includes(target - numbers[i])) {
      sol = [
        numbers.indexOf(numbers[i]),
        numbers.slice(i + 1).indexOf(target - numbers[i]) + i + 1
      ];
      break;
    }
  }
  return sol;
}

function twoSum2(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.slice(i + 1).includes(target - numbers[i])) {
      return [i, numbers.slice(i + 1).indexOf(target - numbers[i]) + i + 1];
    }
  }
}

// Inspiration
function twoSum3(numbers, target) {
  for (let i = 0; i in numbers; i++) {
    for (let j = i + 1; j in numbers; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}

function twoSum4(numbers, target) {
  const dict = {};
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    dict[target - numbers[i]] = i;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (dict[numbers[i]]) {
      result.push(i, dict[numbers[i]]);
      return result;
    }
  }

  return result;
}

function twoSum5(numbers, target) {
  var left = 0,
    right = numbers.length - 1;
  numbers = numbers.map((n, i) => [n, i]).sort((a, b) => a[0] - b[0]);
  while (numbers[left][0] + numbers[right][0] !== target)
    numbers[left][0] + numbers[right][0] < target ? left++ : right--;
  return [numbers[left][1], numbers[right][1]];
}

function twoSum6(n, t) {
  return r(n, t, 0);
}

function r(n, t, p) {
  const i = n.indexOf(t - n[p]);
  if (i == -1 || i == p) return r(n, t, ++p);
  return [p, i];
}

// Practicing
function twoSumZ() {
  return 1;
}

module.exports = twoSum4;
