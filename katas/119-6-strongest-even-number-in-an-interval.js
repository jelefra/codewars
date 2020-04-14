/*
https://www.codewars.com/kata/strongest-even-number-in-an-interval/train/javascript

A strongness of an even number is the number of times we can successively divide by 2 until we reach an odd number starting with an even number n.

For example, if n = 12, then
12 / 2 = 6
6 / 2 = 3
We divided successively 2 times and we reached 3, so the strongness of 12 is 2.

If n = 16 then
16 / 2 = 8
8 / 2 = 4
4 / 2 = 2
2 / 2 = 1
We divided successively 4 times and we reached 1, so the strongness of 16 is 4

Task
Given a closed interval [n, m], return the even number that is the strongest in the interval. If multiple solutions exist return the smallest strongest even number.

Note that programs must run within the allotted server time; a naive solution will probably time out.

Constraints
1 <= n < m <= INT_MAX

Examples
for the input [1, 2] return 2 (1 has strongness 0, 2 has strongness 1)
for the input [5, 10] return 8 (5, 7, 9 have strongness 0; 6, 10 have strongness 1; 8 has strongness 2)
for the input [48, 56] return 48
*/

// My try
function strongestEven(n, m) {
  let best = 1;
  while (true) {
    const ceiling = n / best + (n % best === 0 ? 0 : 1);
    const floor = m / best;

    if (ceiling > floor) {
      best /= 2;
      return best * Math.floor(m / best);
    }
    best *= 2;
  }
}

// Best practice
function strongestEven2(n, m) {
  let current = n;
  for (let step = 1; current + step <= m; step *= 2) {
    if ((current + step) % (step * 2) === 0) {
      current += step;
    }
  }
  return current;
}

// Practicing
function name() {
  return 1;
}

module.exports = strongestEven;
