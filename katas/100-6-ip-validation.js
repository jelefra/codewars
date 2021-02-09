/*
https://www.codewars.com/kata/ip-validation/train/javascript

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Valid inputs:
1.2.3.4
123.45.67.89

Invalid inputs:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid.
*/

// Submission
function isValidIP(str) {
  return (
    str.match(
      /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))$/
    ) !== null
  );
}

// Inspiration
const isValidIP2 = str => {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
};

const isValidIP3 = str => {
  return (
    str.split(".").filter(v => v === Number(v).toString() && Number(v) < 256)
      .length === 4
  );
};

// Practicing;
const isValidIPZ = str => {
  return 1;
};

module.exports = isValidIP;
