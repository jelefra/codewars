/*
https://www.codewars.com/kata/jennys-secret-message/train/javascript

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

Hello, my love!
Hello, Jim!
Hello, Jane!
*/

// Submission
function greet(name) {
  return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}

// Inspiration
const greet2 = name => {
  return `Hello, ${name === "Johnny" ? "my love" : name}!`;
};

// Practicing
const greetZ = name => {
  return 1;
};

module.exports = greet;
