/*
https://www.codewars.com/kata/vasya-clerk/train/javascript

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/

// Submission
function tickets(peopleInLine) {
  const change = {
    "25": 0,
    "50": 0,
    "100": 0
  };
  let possible = "YES";
  peopleInLine.forEach(note => {
    if (note === 25) {
      change["25"]++;
    } else if (note === 50) {
      change["50"]++;
      if (change["25"] > 0) {
        change["25"]--;
      } else {
        possible = "NO";
      }
    } else if (note === 100) {
      if (change["50"] > 0 && change["25"] > 0) {
        change["50"]--;
        change["25"]--;
      } else if (change["25"] > 2) {
        change["25"] -= 3;
      } else {
        possible = "NO";
      }
    }
  });
  return possible;
}

// Inspiration
function Clerk(name) {
  this.name = name;

  this.money = {
    25: 0,
    50: 0,
    100: 0
  };

  this.sell = element => {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : (this.money[25] -= 2);
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

const tickets2 = peopleInLine => {
  const vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
};

const tickets3 = peopleInLine => {
  let current;
  const register = { 25: 0, 50: 0, 100: 0 };
  while ((current = peopleInLine.shift())) {
    register[current]++;
    switch (current) {
      case 100:
        register[50] ? register[50]-- : (register[25] -= 2);
      case 50:
        if (--register[25] < 0) return "NO";
        break;
    }
  }
  return "YES";
};

// Practicing
function ticketsZ(peopleInLine) {
  return 1;
}

module.exports = tickets;
