/*
https://www.codewars.com/kata/create-phone-number/train/javascript

Write a function that accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/

// Submission
function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

// Inspiration
const createPhoneNumber2 = numbers => {
  return numbers.reduce((p, c) => p.replace("x", c), "(xxx) xxx-xxxx");
};

const createPhoneNumber3 = numbers => {
  return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
};

const createPhoneNumber4 = numbers => {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
};

const createPhoneNumber5 = numbers => {
  numbers = numbers.join("");
  return `(${numbers.substring(0, 3)}) ${numbers.substring(
    3,
    6
  )}-${numbers.substring(6)}`;
};

const createPhoneNumber6 = numbers => {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
};

// Practicing
const createPhoneNumberZ = numbers => {
  return 1;
};

module.exports = createPhoneNumber;
