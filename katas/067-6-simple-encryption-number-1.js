/*
https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)

For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

This kata is part of the Simple Encryption Series:
Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty

Have fun coding it and please don't forget to vote and rank this kata! :-)
*/

// My try
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

// Best practice
function encrypt2(text, n) {
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = "";
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt2(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}

// Clever
function encrypt3(text, n) {
  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, "$1") + text.replace(/(.)./g, "$1");
  }
  return text;
}

function decrypt3(text, n) {
  const l = text && (text.length / 2) | 0;
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ""));
  }
  return text;
}

// Practicing
function decryptZ(words) {
  return 1;
}

module.exports = { encrypt, decrypt };
