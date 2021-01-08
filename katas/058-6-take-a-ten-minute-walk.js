/*
https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones. Every time you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

// Submission
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  walk = walk.reduce(
    (coord, s) => {
      if (s === "n") {
        coord[0] += 1;
      } else if (s === "s") {
        coord[0] -= 1;
      } else if (s === "e") {
        coord[1] += 1;
      } else if (s === "w") {
        coord[1] -= 1;
      }
      return coord;
    },
    [0, 0]
  );
  return walk[0] === 0 && walk[1] === 0;
}

// Inspiration
const isValidWalk2 = walk => {
  return (
    walk.length === 10 &&
    !walk.reduce((w, step) => w + { n: -1, s: 1, e: 99, w: -99 }[step], 0)
  );
};

const returnsToOrigin = words => {
  const dict = {
    n: 0,
    s: 0,
    e: 0,
    w: 0
  };
  words.forEach(char => (dict[char] ? dict[char]++ : (dict[char] = 1)));
  return dict.n === dict.s && dict.e === dict.w;
};

const isValidWalk3 = walk => {
  return walk.length === 10 && returnsToOrigin(walk);
};

const isValidWalk4 = walk => {
  return (
    walk.length === 10 &&
    walk
      .reduce(
        (pos, curr) => {
          switch (curr) {
            case "n":
              pos[0]++;
              break;
            case "s":
              pos[0]--;
              break;
            case "e":
              pos[1]++;
              break;
            case "w":
              pos[1]--;
              break;
          }
          return pos;
        },
        [0, 0]
      )
      .every(a => a === 0)
  );
};

// Practicing
const isValidWalkZ = walk => {
  return 1;
};

module.exports = isValidWalk;
