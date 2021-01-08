/*
https://www.codewars.com/kata/directions-reduction/train/javascript

Once upon a time, on a way through the old wild mountainous west, a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.

The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]

Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [].

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed.

Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
*/

// Submission
function dirReduc(arr) {
  const pairs = [
    ["NORTH", "SOUTH"],
    ["SOUTH", "NORTH"],
    ["EAST", "WEST"],
    ["WEST", "EAST"]
  ];
  while (hasNeedless(arr, pairs)) {
    arr = removeNeedless(arr, pairs);
  }
  return arr;
}

function hasNeedless(arr, pairs) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < pairs.length; j++) {
      if (arr[i] == pairs[j][0] && arr[i + 1] == pairs[j][1]) {
        return true;
      }
    }
  }
}

function removeNeedless(arr, pairs) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < pairs.length; j++) {
      if (arr[i] == pairs[j][0] && arr[i + 1] == pairs[j][1]) {
        arr.splice(i, 2);
        return arr;
      }
    }
  }
}

// Inspiration
const dirReduc2 = plan => {
  const opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST"
  };

  return plan.reduce((dirs, dir) => {
    dirs.slice(-1) === opposite[dir] ? dirs.pop() : dirs.push(dir);
    return dirs;
  }, []);
};

const dirReduc3 = arr => {
  let str = arr.join("");
  const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, "");
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
};

// Practicing
const dirReducZ = arr => {
  return 1;
};

module.exports = dirReduc3;
