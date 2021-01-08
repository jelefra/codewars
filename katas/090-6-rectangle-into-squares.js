/*
https://www.codewars.com/kata/rectangle-into-squares/train/javascript

The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

(image missing)

Can you translate this drawing into an algorithm?

You will be given two dimensions:
  a positive integer length
  a positive integer width

You will return an array with the size of each of the squares.
  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]

Your result and the reference test solution are compared by strings.

Notes:
lng == wdth as a starting case would be an entirely different problem and the drawing is planned to be interpreted with lng != wdth.

When the initial parameters are so that lng == wdth, the solution [lng] would be the most obvious but not in the spirit of this kata so, in that case, return null
*/

// Submission
function sqInRect(length, width) {
  if (length == width) {
    return null;
  }
  const arr = [];
  while (length + width > 0) {
    arr.push(Math.min(length, width));
    if (length > width) {
      length -= width;
    } else if (width > length) {
      width -= length;
    } else {
      length = width = 0;
    }
  }
  return arr;
}

function sqInRect2(length, width) {
  if (length == width) {
    return null;
  }
  const arr = [];
  while (length > 0 && width > 0) {
    arr.push(Math.min(length, width));
    length > width ? (length -= width) : (width -= length);
  }
  return arr;
}

// Inspiration
function sqInRect3(a, b, initial = true) {
  if (a === b) {
    return initial ? null : [a];
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return [min, ...sqInRect(max - min, min, false)];
}

// Practicing
function sqInRectZ() {
  return 1;
}

module.exports = sqInRect;
