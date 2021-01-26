/*
https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.
*/

// Submission
function list(names) {
  return names
    .map(obj => obj.name)
    .join(", ")
    .replace(/, ([^,]+)$/, " & $1");
}

// Inspiration
const list2 = names => {
  names = names.map(p => p.name);
  const last = names.pop();
  return names.length ? `${names.join(", ")} & ${last}` : last || "";
};

const list3 = names => {
  return names.reduce((prev, current, index, array) => {
    if (index === 0) {
      return current.name;
    }
    if (index === array.length - 1) {
      return `${prev} & ${current.name}`;
    }
    return `${prev}, ${current.name}`;
  }, "");
};

const list4 = names => {
  return names
    .map(x => x.name)
    .join(", ")
    .replace(/(.*),(.*)$/, "$1 &$2");
};

const list5 = names => {
  names = names.map(name => name.name);
  const map = {
    0: "",
    1: `${names[0]}`,
    2: `${names[0]} & ${names[1]}`,
    3: `${names.slice(0, names.length - 2).join(", ")}, ${
      names[names.length - 2]
    } & ${names[names.length - 1]}`
  };
  return map[Math.min(names.length, 3)];
};

// Practicing
const listZ = names => {
  return 1;
};

module.exports = list;
