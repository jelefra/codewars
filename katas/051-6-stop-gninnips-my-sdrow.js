/*
https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
    spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
    spinWords( "This is a test") => returns "This is a test"
    spinWords( "This is another test" )=> returns "This is rehtona test"

Success streak: |||
*/

// My try
function spinWords(words) {
  return words
    .split(" ")
    .reduce((ac, cv) => {
      if (cv.length > 4) {
        cv = cv
          .split("")
          .reverse()
          .join("");
      }
      ac.push(cv);
      return ac;
    }, [])
    .join(" ");
}

// Best practice
function spinWords2(words) {
  return words
    .split(" ")
    .map(word => {
      return word.length > 4
        ? word
            .split("")
            .reverse()
            .join("")
        : word;
    })
    .join(" ");
}

// Clever
function spinWords3(words) {
  return words.replace(/\w{5,}/g, w =>
    w
      .split("")
      .reverse()
      .join("")
  );
}

// For reference
function spinWords4(words) {
  return words
    .split(" ")
    .reduce((s, w) => {
      w.length > 4
        ? (w = w
            .split("")
            .reverse()
            .join(""))
        : w;
      s.push(w);
      return s;
    }, [])
    .join(" ");
}

// Practicing
function spinWordsZ(words) {
  return 1;
}

module.exports = spinWords;
