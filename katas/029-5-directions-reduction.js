/*
https://www.codewars.com/kata/directions-reduction/train/javascript
*/

// My try
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

// Best practice
function dirReduc2(plan) {
  const opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST"
  };
  return plan.reduce(function(dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

// Alternative
function dirReduc3(arr) {
  const opposite = {
    SOUTH: "NORTH",
    NORTH: "SOUTH",
    WEST: "EAST",
    EAST: "WEST"
  };
  return arr.reduce(function(a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b);
    return a;
  }, []);
}

// Clever
function dirReduc4(arr) {
  let str = arr.join("");
  const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, "");
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

// Practicing
function dirReducZ(args) {
  return 1;
}

module.exports = dirReduc;
