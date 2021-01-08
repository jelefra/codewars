/*
https://www.codewars.com/kata/twice-linear/train/javascript

Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dblLinear returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Example:
dblLinear(10) should return 22
*/

// Submission
function dblLinear(n) {
  const u = [1];
  for (let i = 1; i <= 10 * n; i++) {
    u.push(2 * u[i - 1] + 1);
    u.push(3 * u[i - 1] + 1);
  }
  return [...new Set(u)].sort((a, b) => a - b)[n];
}

// Inspiration
function dblLinear2(n) {
  let ai = 0;
  let bi = 0;
  let i = 0;
  const sequence = [1];
  while (i < n) {
    const y = 2 * sequence[ai] + 1;
    const z = 3 * sequence[bi] + 1;
    if (y < z) {
      sequence.push(y);
      ai++;
    } else if (y > z) {
      sequence.push(z);
      bi++;
    } else {
      sequence.push(y);
      ai++;
      bi++;
    }
    i++;
  }
  return sequence.pop();
}

function dblLinear3(n) {
  const u = [1];

  function insertInto(arr, val) {
    if (!arr.includes(val)) {
      if (val > arr[arr.length - 1]) {
        arr.push(val);
      } else {
        const idx = arr.findIndex(v => v > val);
        arr.splice(idx, 0, val);
      }
    }
  }

  let i = 0;
  while (i <= n) {
    const y = 2 * u[i] + 1;
    const z = 3 * u[i] + 1;
    insertInto(u, y);
    insertInto(u, z);
    i++;
  }
  return u[n];
}

// Practicing
function dblLinearZ(n) {
  return 1;
}

module.exports = dblLinear;
