/*
https://www.codewars.com/kata/playing-with-passphrases

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means.

One is the following:
0. choose a text in capital letters including or not digits and non alphabetic characters,
1. shift each letter by a given number but the transformed letter must be a letter (circular shift),
2. replace each digit by its complement to 9,
3. keep such as non alphabetic and non digit characters,
4. downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
5. reverse the whole result.

Example:
your text: "BORN IN 2015!", shift 1
1 + 2 + 3 -> "CPSO JO 7984!"
4 "CpSo jO 7984!"
5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

*/

// My try
function playPass(s, n) {
  return s
    .split("")
    .map((char, index) => {
      if (/[A-Z]/.test(char)) {
        const shiftedChar = String.fromCharCode(
          65 + ((char.charCodeAt(0) + n - 65) % 26)
        );
        return index % 2 ? shiftedChar.toLowerCase() : shiftedChar;
      }
      if (/\d/.test(char)) {
        return 9 - char;
      }
      return char;
    })
    .reverse()
    .join("");
}

// Best practice
function playPass2(s, n) {
  return s
    .replace(/[A-Z]/g, char =>
      String.fromCharCode(((char.charCodeAt(0) - 65 + n) % 26) + 65)
    )
    .replace(/\d/g, digit => 9 - digit)
    .replace(
      /(.)(.?)/g,
      (match, even, odd) => even.toUpperCase() + odd.toLowerCase()
    )
    .split("")
    .reverse()
    .join("");
}

// Practicing
function playPassZ(s, n) {
  return 1;
}

module.exports = playPass;
