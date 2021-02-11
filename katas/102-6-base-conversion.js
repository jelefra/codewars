/*
https://www.codewars.com/kata/base-conversion/train/javascript

In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets. Here are some pre-defined alphabets:

const Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};
The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.

Additional Notes:
The maximum input value can always be encoded in a number without loss of precision in JavaScript.
The function must work for any arbitrary alphabets, not only the pre-defined ones.
You don't have to consider negative numbers.
*/

const Alphabet = {
  BINARY: "01",
  OCTAL: "01234567",
  DECIMAL: "0123456789",
  HEXA_DECIMAL: "0123456789abcdef",
  ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
  ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ALPHA: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ALPHA_NUMERIC:
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

const dec = Alphabet.DECIMAL;

// Submission
function convert(input, source, target) {
  if (source === target) {
    return input;
  }

  let decimalValue = [...input].reverse().reduce((total, val, idx) => {
    return total + Math.pow(source.length, idx) * source.indexOf(val);
  }, 0);

  if (decimalValue === 0) {
    return target[0];
  }

  if (target === dec) {
    return decimalValue.toString();
  }

  let targetValue = "";
  while (decimalValue > 0) {
    targetValue += target[decimalValue % target.length];
    decimalValue = Math.floor(decimalValue / target.length);
  }

  return targetValue
    .split("")
    .reverse()
    .join("");
}

// Inspiration
const convert2 = (input, source, target) => {
  const inBase = source.length;
  const len = input.length;
  const value = input
    .split("")
    .reduce((p, v, i) => p + source.indexOf(v) * inBase ** (len - i - 1), 0);
  return toBase(value, target);
};

const toBase = (value, target) => {
  const base = target.length;
  if (value < base) return `${target.charAt(value)}`;
  return toBase(Math.floor(value / base), target) + target.charAt(value % base);
};

// Practicing
const convertZ = (input, source, target) => {
  return 1;
};

module.exports = convert;
