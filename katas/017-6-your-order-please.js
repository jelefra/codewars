/*
https://www.codewars.com/kata/your-order-please/train/javascript

Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

your_order("is2 Thi1s T4est 3a")
"Thi1s is2 3a T4est"
*/

// My try
function order(words) {
  let ordered = [];
  for (let i = 1; i <= words.split(" ").length; i++) {
    const re = new RegExp(`\\w*${i}\\w*`, "gi");
    ordered.push(words.match(re));
  }
  ordered = ordered.join(" ");
  return ordered;
}

// Best practice
function order2(words) {
  return words
    .split(" ")
    .sort(function(a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

// Practicing
function orderZ(m) {
  return 1;
}

module.exports = order;
