/*
https://www.codewars.com/kata/a-rule-of-divisibility-by-13/train/javascript

When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:

1, 10, 9, 12, 3, 4.

Then the whole pattern repeats.

Hence the following method: multiply the rightmost digit of the number with the leftmost number in the sequence shown above, the second rightmost digit to the second left most digit of the number in the sequence. The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.

Example: What is the remainder when 1234567 is divided by 13?

7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178

We repeat the process with 178:
8x1 + 7x10 + 1x9 = 87

and again with 87:
7x1 + 8x10 = 87

From now on the sequence is stationary and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13: 9

Call thirteen the function which processes this sequence of operations on an integer n (>=0). thirteen will return the stationary number.

thirteen(1234567) calculates 178, then 87, then 87 and returns 87.
thirteen(321) calculates 48, then 48 and returns 48.
*/

// Submission
const sequence = [1, 10, 9, 12, 3, 4];

const operator = n => {
  return String(n)
    .split("")
    .reverse()
    .map((digit, index) => Number(digit) * sequence[index % 6])
    .reduce((sum, digitMultiplied) => (sum += digitMultiplied), 0);
};

function thirteen(n) {
  let latestOperatorResult = "";
  while (true) {
    const operationResult = operator(n);

    if (operationResult === latestOperatorResult) {
      return operationResult;
    }
    latestOperatorResult = operationResult;
    n = operationResult;
  }
}

// Inspiration
const thirteen2 = n => {
  const sum = `${n}`
    .split("")
    .reverse()
    .reduce((sum, v, i) => sum + v * sequence[i % sequence.length], 0);
  return sum === n ? n : thirteen2(sum);
};

// Practicing
const thirteenZ = n => {
  return 1;
};

module.exports = thirteen;
