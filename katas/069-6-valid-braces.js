/*
https://www.codewars.com/kata/valid-braces/train/javascript

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct braces.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

// My try
function validBraces(braces) {
  const pairs = ["()", "{}", "[]"];
  let looping;
  do {
    looping = false;
    pairs.forEach(pair => {
      if (braces.indexOf(pair) > -1) {
        const regex = new RegExp(pair.replace(/[[\]{}()]/g, "\\$&"), "g");
        braces = braces.replace(regex, "");
        looping = true;
      }
    });
  } while (looping);
  return braces === "";
}

// Best practice
function validBraces2(braces) {
  const matches = { "(": ")", "{": "}", "[": "]" };
  const stack = [];
  let currentChar;

  for (let i = 0; i < braces.length; i++) {
    currentChar = braces[i];
    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

// Clever
function validBraces3(braces) {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
  }
  return !braces.length;
}

function validBraces4(braces) {
  while (
    braces.indexOf("{}") != -1 ||
    braces.indexOf("()") != -1 ||
    braces.indexOf("[]") != -1
  ) {
    braces = braces
      .replace("{}", "")
      .replace("()", "")
      .replace("[]", "");
  }
  return braces.length == 0;
}

// Practicing
function validBracesZ(words) {
  return 1;
}

module.exports = validBraces;
