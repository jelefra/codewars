/*
https://www.codewars.com/kata/hamming-numbers/train/javascript

A Hamming number is a positive integer of the form 2^i * 3^j * 5^k, for some non-negative integers i, j, and k.

Write a function that computes the nth smallest Hamming number.

Specifically:
The first smallest Hamming number is 1 = 2^0 * 3^0 * 5^0
The second smallest Hamming number is 2 = 2^1 * 3^0 * 5^0
The third smallest Hamming number is 3 = 2^0 * 3^1 * 5^0
The fourth smallest Hamming number is 4 = 2^2 * 3^0 * 5^0
The fifth smallest Hamming number is 5 = 2^0 * 3^0 * 5^1

2^0 * 3^0 * 5^0 = 1
2^1 * 3^0 * 5^0 = 2
2^0 * 3^1 * 5^0 = 3
2^2 * 3^0 * 5^0 = 4
2^0 * 3^0 * 5^1 = 5
2^1 * 3^1 * 5^0 = 6
2^3 * 3^0 * 5^0 = 8
2^0 * 3^2 * 5^0 = 9
2^1 * 3^0 * 5^1 = 10
2^2 * 3^1 * 5^0 = 12

The 20 smallest Hamming numbers are given in example test fixture.

Your code should be able to compute all of the smallest 5,000 Hamming numbers without timing out.
*/

// My try
const hammings = [0, 1];
const seriesTwo = [1, 2];
const seriesThree = [1, 3];
const seriesFive = [1, 5];

const min = () =>
  Math.min(
    seriesTwo[seriesTwo.length - 1],
    seriesThree[seriesThree.length - 1],
    seriesFive[seriesFive.length - 1]
  );

function hamming(n) {
  if (hammings[n]) return hammings[n];

  const next = min();
  hammings[n] = next;

  if (seriesTwo[seriesTwo.length - 1] === next)
    seriesTwo.push(hammings[seriesTwo.length] * 2);
  if (seriesThree[seriesThree.length - 1] === next)
    seriesThree.push(hammings[seriesThree.length] * 3);
  if (seriesFive[seriesFive.length - 1] === next)
    seriesFive.push(hammings[seriesFive.length] * 5);

  return hammings[n];
}

// Best practice
function hamming2(n) {
  const seq = [1];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  for (let i = 1; i < n; i++) {
    const x = Math.min(2 * seq[i2], 3 * seq[i3], 5 * seq[i5]);
    seq.push(x);
    if (2 * seq[i2] <= x) i2++;
    if (3 * seq[i3] <= x) i3++;
    if (5 * seq[i5] <= x) i5++;
  }
  return seq[n - 1];
}

// For reference
function hamming3(n) {
  // the next hamming number is either 2x, 3x or 5x an existing hamming number
  // i is the (index of the) largest hamming number we HAVEN'T used, to multiply by 2
  // j is the (index of the) largest hamming number we HAVEN'T used, to multiply by 3
  // k is the (index of the) largest hamming number we HAVEN'T used, to multiply by 5

  // for example, when we are at [1,2,3,4,5,6,8]
  // i is 4 ... nums[3] = 4 ... 2 * nums[3] = 2 * 4 = 8 !
  // j is 2 ... nums[1] = 3 ... 3 * nums[1] = 3 * 2 = 6 !
  // k is 1 ... nums[0] = 1 ... 5 * nums[0] = 5 * 1 = 5 !

  // So to find the next hamming number, find 3 viable next hamming numbers:
  // when i = 4 ... 2 * nums[4] = 2 * 5 = 10
  // when j = 2 ... 3 * nums[2] = 3 * 3 = 9
  // when k = 1 ... 5 * nums[1] = 5 * 2 = 10

  // Find the min of those 3 options.
  // - Push the hamming number onto the list (9)
  // - Increment those indices which match (j)

  const nums = [1];
  let i = 0;
  let j = 0;
  let k = 0;
  let iRes;
  let jRes;
  let kRes;
  let min;

  while (nums.length < n) {
    iRes = nums[i] * 2;
    jRes = nums[j] * 3;
    kRes = nums[k] * 5;
    min = Math.min(iRes, jRes, kRes);
    nums.push(min);
    if (iRes === min) i++;
    if (jRes === min) j++;
    if (kRes === min) k++;
  }
  return nums.slice(-1);
}

// Practicing
function name() {
  return 1;
}

module.exports = hamming;

// hamming(4);
