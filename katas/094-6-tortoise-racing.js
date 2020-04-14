/*
https://www.codewars.com/kata/tortoise-racing/train/javascript

Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second).

If v1 >= v2 then return null.

Examples:
race(720, 850, 70) => [0, 32, 18]
race(80, 91, 37)   => [3, 21, 49]
*/

// My try
function race(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }
  const h = Math.floor(g / (v2 - v1));
  const m = Math.floor((60 * g) / (v2 - v1) - 60 * h);
  const s = Math.floor((60 * 60 * g) / (v2 - v1) - 60 * 60 * h - 60 * m);
  return [h, m, Math.floor(s)];
}

// Refactored
function race2(v1, v2, g) {
  if (v1 >= v2) {
    return null;
  }

  const seconds = Math.floor((3600 * g) / (v2 - v1));
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds - h * 3600) / 60);
  const s = Math.floor(seconds - h * 3600 - m * 60);

  return [h, m, Math.floor(s)];
}

// Best practice
function race3(v1, v2, g) {
  const t = g / (v2 - v1);
  return v2 > v1
    ? [Math.floor(t), Math.floor((t * 60) % 60), Math.floor((t * 3600) % 60)]
    : null;
}

// Practicing
function raceZ() {
  return 1;
}

module.exports = race;
