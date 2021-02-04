/*
https://www.codewars.com/kata/bouncing-balls/train/javascript

A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Example:
- h = 3, bounce = 0.66, window = 1.5, result is 3
*/

// Submission
function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let viewingOccurences = 0;
    while (h > window) {
      viewingOccurences++;
      h *= bounce;
      if (h > window) {
        viewingOccurences++;
      }
    }
    return viewingOccurences;
  }
  return -1;
}

// Inspiration
const bouncingBall2 = (h, bounce, window) => {
  let rebounds = -1;
  if (bounce > 0 && bounce < 1 && h > 0 && window > 0) {
    while (h > window) {
      (rebounds += 2), (h *= bounce);
    }
  }
  return rebounds;
};

const bouncingBall3 = (h, bounce, window) => {
  if (h < 0 || bounce < 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let rebounds = 1;
  while (bounce * h > window) {
    rebounds += 2;
    h *= bounce;
  }
  return rebounds;
};

const bouncingBall4 = (h, bounce, window) => {
  if (h <= window || bounce >= 1 || h < 0) {
    return -1;
  }
  const r = Math.floor(Math.log(window / h) / Math.log(bounce)) * 2 + 1;
  if (Number.isNaN(r)) {
    return -1;
  }
  return r;
};

// Practicing
const bouncingBallZ = (h, bounce, window) => {
  return 1;
};

module.exports = bouncingBall;
