/*
https://www.codewars.com/kata/iq-test/train/javascript

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples :
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

// My try
function iqTest(numbers) {
  const n = numbers.split(" ");
  const even = n.filter(n => n % 2 === 0);
  const odd = n.filter(n => n % 2 === 1);
  return (even.length === 1 ? n.indexOf(even[0]) : n.indexOf(odd[0])) + 1;
}

// Best practice?
function iqTest2(numbers) {
  const numArr = numbers.split(" ");
  const odd = numArr.slice(0, 3).filter(x => x % 2).length;
  return odd < 2
    ? numArr.findIndex(x => x % 2) + 1
    : numArr.findIndex(x => x % 2 === 0) + 1;
}

// Also
function iqTest3(numbers) {
  const m = numbers.match(
    /[02468]\b.*[02468]\b/.test(numbers) ? /\d*[13579]\b/ : /\d*[02468]\b/
  )[0];
  return numbers.split(" ").indexOf(m) + 1;
}

// Practicing
function iqTestZ(words) {
  return 1;
}

module.exports = iqTest;
