/*
https://www.codewars.com/kata/decode-the-morse-code/train/javascript

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

The Morse code table is preloaded for you as a dictionary, feel free to use it. The table can be accessed like this: MORSE_CODE['.--'].
*/

const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9"
};

// Submission
decodeMorse = function(morseCode) {
  morseCode = morseCode.replace(/^\s+|\s+$/g, "");
  morseCode = morseCode.split("   ");
  const sentence = [];
  for (let i = 0; i < morseCode.length; i++) {
    const wordMorseCode = morseCode[i].split(" ");
    let word = "";
    for (let j = 0; j < wordMorseCode.length; j++) {
      word += wordMorseCode[j] === "" ? "" : MORSE_CODE[wordMorseCode[j]];
    }
    sentence.push(word);
  }
  return sentence.join(" ");
};

// Inspiration
decodeMorse2 = function(morseCode) {
  return morseCode
    .trim()
    .split(/ {2}| /)
    .map(code => MORSE_CODE[code] || " ")
    .join("");
};

// Practicing
const decodeMorseZ = morse => {
  return 1;
};

module.exports = decodeMorse;
