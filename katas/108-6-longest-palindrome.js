/*
https://www.codewars.com/kata/longest-palindrome/train/javascript

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1
"aab" -> 2
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

// Submission
function longestPalindrome(s) {
  if (s.length === 0) {
    return 0;
  }
  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      const substring = s.substring(j, j + i);
      if (isPalindrome(substring)) {
        return substring.length;
      }
    }
  }
}

function isPalindrome(string) {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function longestPalindrome2(s) {
  if (s.length === 0) {
    return 0;
  }
  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      const substring = s.substring(j, j + i);
      if (isPalindrome2(substring)) {
        return i;
      }
    }
  }
}

function isPalindrome2(string) {
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Practicing
function isPalindromeZ() {
  return 1;
}

module.exports = longestPalindrome;
