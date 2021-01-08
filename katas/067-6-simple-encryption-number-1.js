/*
https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript

To build the encrypted string:
Take every 2nd char from the string, then the other chars, and concat them as new string.
Do this n times.

Examples:
"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function decrypt(encryptedText, n)

For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.
*/

// Submission
function encrypt(text, n) {
  if (!text || n <= 0) {
    return text;
  }
  for (let i = 0; i < n; i++) {
    let temp = "";
    let remainder = "";
    for (let j = 0; j < text.length; j++) {
      j % 2 ? (temp += text[j]) : (remainder += text[j]);
    }
    text = temp + remainder;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) {
    return encryptedText;
  }

  for (let i = 0; i < n; i++) {
    let temp = "";
    const mid = Math.floor(encryptedText.length / 2);
    for (let j = mid; j < encryptedText.length; j++) {
      temp += encryptedText[j];
      if (j < encryptedText.length - 1 || encryptedText.length % 2 === 0) {
        temp += encryptedText[j - mid];
      }
    }
    encryptedText = temp;
  }
  return encryptedText;
}

// Inspiration
const encrypt2 = (text, n) => {
  if (!text || n <= 0) return text;
  while (n--) {
    let answer = "";
    for (let i = 1; i < text.length; i += 2) {
      answer += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      answer += text[i];
    }
    text = answer;
  }
  return text;
};

const decrypt2 = (encryptedText, n) => {
  if (!encryptedText || n <= 0) return encryptedText;
  const answer = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < answer.length; i += 2) {
      answer[i] = encryptedText[j++];
    }
    for (let i = 0; i < answer.length; i += 2) {
      answer[i] = encryptedText[j++];
    }
    encryptedText = answer.join("");
  }
  return encryptedText;
};

const encrypt3 = (text, n) => {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, "$1") + text.replace(/(.)./g, "$1");
  }
  return text;
};

const decrypt3 = (encryptedText, n) => {
  const l = encryptedText && (encryptedText.length / 2) | 0;
  for (let i = 0; i < n; i++) {
    encryptedText = encryptedText
      .slice(l)
      .replace(/./g, (_, i) => _ + (i < l ? encryptedText[i] : ""));
  }
  return encryptedText;
};

// Practicing
const encryptZ = (text, n) => {
  return 1;
};

const decryptZ = (encryptedText, n) => {
  return 1;
};

module.exports = { encrypt, decrypt };
