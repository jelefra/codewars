/*
https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

John has invited some friends. His list is s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that makes this string uppercase and returns it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too.
*/

// Submission
const meeting = s => {
  return s
    .split(";")
    .map(name =>
      name.replace(
        /(.+):(.*)$/,
        (_, p2, p3) => `(${p3.toUpperCase()}, ${p2.toUpperCase()})`
      )
    )
    .sort()
    .join("");
};

// Inspiration
const meeting2 = s => {
  return s
    .toUpperCase()
    .replace(/(\w+):(\w+)/g, "($2, $1)")
    .split(";")
    .sort()
    .join("");
};

// Practicing
const meetingZ = s => {
  return 1;
};

module.exports = meeting;
