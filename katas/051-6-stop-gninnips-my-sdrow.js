/*
https://www.codewars.com/kata/stop-gninnips-my-sdrow/train/javascript

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
    spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
    spinWords( "This is a test") => returns "This is a test"
    spinWords( "This is another test" )=> returns "This is rehtona test"
*/

// Submission
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

// Inspiration
const spinWords2 = words => {
  return words
    .split(" ")
    .map(word => (word.length > 4 ? [...word].reverse().join("") : word))
    .join(" ");
};

const spinWords3 = words => {
  return words.replace(/\w{5,}/g, word =>
    word
      .split("")
      .reverse()
      .join("")
  );
};

// Practicing
const spinWordsZ = words => {
  return 1;
};

module.exports = spinWords;
