/*
https://www.codewars.com/kata/who-likes-it/train/javascript

You probably know the "like" system from Facebook and other social networks. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes, which must take an input array containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
*/

// Submission
function likes(names) {
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names.join(" and ")} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length -
        2} others like this`;
  }
}

// Inspiration
const likes2 = names => {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }[Math.min(4, names.length)];
};

const likes3 = names => {
  const templates = [
    "no one likes this",
    "{name} likes this",
    "{name} and {name} like this",
    "{name}, {name} and {name} like this",
    "{name}, {name} and {n} others like this"
  ];
  const idx = Math.min(names.length, 4);

  return templates[idx].replace(/{name}|{n}/g, val =>
    val === "{name}" ? names.shift() : names.length
  );
};

// Practicing
const likesZ = names => {
  return 1;
};

module.exports = likes;
