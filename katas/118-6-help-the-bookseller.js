/*
https://www.codewars.com/kata/help-the-bookseller/javascript

A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters. The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of one of the stocklists could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :
M = ["A", "B", "C", "W"]
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string:
  (A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "".

Note:
In the result codes and their values are in the same order as in M.
*/

// Submission
function stockList(listOfArt, listOfCat) {
  const quantityOfBooksByCategory = listOfArt.reduce(
    (accumulator, bookCode) => {
      const bookCategory = bookCode[0];
      const quantityOfBooks = parseInt(bookCode.split(" ")[1], 0);
      Object.keys(accumulator).includes(bookCategory)
        ? (accumulator[bookCategory] += quantityOfBooks)
        : (accumulator[bookCategory] = quantityOfBooks);
      return accumulator;
    },
    {}
  );

  const resultExists = listOfCat.some(category =>
    Object.keys(quantityOfBooksByCategory).includes(category)
  );

  return resultExists
    ? listOfCat
        .map(category => {
          return `(${category} : ${quantityOfBooksByCategory[category] || 0})`;
        })
        .join(" - ")
    : "";
}

// Inspiration
function stockList2(listOfArt, listOfCat) {
  const qs = {};
  if (!listOfArt.length) return "";

  listOfArt.forEach(function(art) {
    const cat = art[0];
    qs[cat] = (qs[cat] | 0) + +art.split(" ")[1];
  });

  return listOfCat
    .map(function(c) {
      return `(${c} : ${qs[c] | 0})`;
    })
    .join(" - ");
}

function stockList3(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return "";
  return listOfCat
    .map(w => {
      const s = listOfArt.reduce(
        (a, b) => a + (b.charAt(0) === w ? +b.split(" ")[1] : 0),
        0
      );
      return `(${w} : ${s})`;
    })
    .join(" - ");
}

// Practicing
function stockListZ(listOfArt, listOfCat) {
  return 1;
}

module.exports = stockList;
