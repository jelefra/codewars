/*
https://www.codewars.com/kata/strings-mix/train/javascript

Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"
s2 = "& aaa bbb c d"
s1 has 4 'a', 2 'b', 1 'c'
s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

// Submission
const letterAppearsTwice = (letter, array) =>
  array.indexOf(letter) !== array.lastIndexOf(letter);

const manipulate = (string, stringNumber) =>
  string
    .match(/[a-z]/g)
    .filter((letter, index, array) => letterAppearsTwice(letter, array))
    .reduce((totalCountOfLetters, letter) => {
      if (totalCountOfLetters[letter]) {
        totalCountOfLetters[letter].count++;
      } else {
        totalCountOfLetters[letter] = {
          letter,
          count: 1,
          stringNumber
        };
      }
      return totalCountOfLetters;
    }, {});

function combineData(s1Data, s2Data) {
  const combination = { ...s1Data };
  const copyOfS2Data = { ...s2Data };
  Object.keys(s1Data).forEach(letter => {
    if (Object.keys(s2Data).includes(letter)) {
      if (s2Data[letter].count > s1Data[letter].count) {
        combination[letter].count = s2Data[letter].count;
        combination[letter].stringNumber = 2;
      } else if (s2Data[letter].count === s1Data[letter].count) {
        combination[letter].stringNumber = "=";
      }
      delete copyOfS2Data[letter];
    }
  });
  return Object.values({ ...combination, ...copyOfS2Data });
}

function sortArray(a, b) {
  if (a.length < b.length) {
    return 1;
  }
  if (a.length === b.length && a > b) {
    return 1;
  }
  return -1;
}

function mix(s1, s2) {
  const s1Data = manipulate(s1, 1);
  const s2Data = manipulate(s2, 2);
  const combination = combineData(s1Data, s2Data);
  return combination
    .map(
      letter => `${letter.stringNumber}:${letter.letter.repeat(letter.count)}`
    )
    .sort(sortArray)
    .join("/");
}

// Inspiration
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function mix2(s1, s2) {
  return alphabet
    .map(char => {
      const s1Count = s1.split("").filter(x => x === char).length,
        s2Count = s2.split("").filter(x => x === char).length,
        maxCount = Math.max(s1Count, s2Count);

      return {
        char: char,
        count: maxCount,
        src: maxCount > s1Count ? "2" : maxCount > s2Count ? "1" : "="
      };
    })
    .filter(c => c.count > 1)
    .sort(
      (objA, objB) =>
        objB.count - objA.count ||
        (objA.src + objA.char > objB.src + objB.char ? 1 : -1)
    )
    .map(c => `${c.src}:${c.char.repeat(c.count)}`)
    .join("/");
}

function mix3(s1, s2) {
  var counter = s =>
    s
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .reduce((x, y) => ((x[y] = 1 + (x[y] || 0)), x), {});
  s1 = counter(s1);
  s2 = counter(s2);
  var res = [],
    keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
  keys.forEach(key => {
    var c1 = s1[key] || 0,
      c2 = s2[key] || 0,
      count = Math.max(c1, c2);
    if (count > 1) {
      var from = [1, "=", 2][Math.sign(c2 - c1) + 1];
      var str = [...Array(count)].map(_ => key).join("");
      res.push(from + ":" + str);
    }
  });
  return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join("/");
}

// Practicing
function mixZ(s1, s2) {
  return 1;
}

module.exports = mix;
