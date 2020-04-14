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

// My try
function list(names) {
  return names
    .map(obj => obj.name)
    .join(", ")
    .replace(/, ([^,]+)$/, " & $1");
}

// Best practice
function list2(names) {
  return names.reduce(function(prev, current, index, array) {
    if (index === 0) {
      return current.name;
    }
    if (index === array.length - 1) {
      return `${prev} & ${current.name}`;
    }
    return `${prev}, ${current.name}`;
  }, "");
}

// Other
function list3(names) {
  const xs = names.map(p => p.name);
  const x = xs.pop();
  return xs.length ? `${xs.join(", ")} & ${x}` : x || "";
}

// Practicing
function listZ() {
  return 1;
}

module.exports = list;
