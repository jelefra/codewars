/*
https://www.codewars.com/kata/554a44516729e4d80b000012/train/javascript

Let us begin with an example: a man has a rather old car worth $2,000. He saw a secondhand car worth $8,000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1,000 each month but the prices of his old car and of the new one decrease by 1.5% per month. Furthermore this percent of loss increases of 0.5% at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

Parameters and return of function:

parameter (positive int or float, guaranteed) startPriceOld (old car price)
parameter (positive int or float, guaranteed) startPriceNew (new car price)
parameter (positive int or float, guaranteed) savingPerMonth
parameter (positive float or int, guaranteed) percentLossByMonth

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)

Detail of the above example:
end month 1: percentLoss 1.5 available -4910.0
end month 2: percentLoss 2.0 available -3791.7999...
end month 3: percentLoss 2.0 available -2675.964
end month 4: percentLoss 2.5 available -1534.06489...
end month 5: percentLoss 2.5 available -395.71327...
end month 6: percentLoss 3.0 available 766.158120825...

where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158.

Note:

Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
*/

// Submission
const nbMonths = (
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) => {
  let savings = 0;
  let diff = savings + startPriceOld - startPriceNew;
  let countOfMonths = 0;

  while (diff < 0) {
    savings += savingPerMonth;
    if (countOfMonths % 2 === 1) {
      percentLossByMonth += 0.5;
    }
    startPriceOld *= 1 - percentLossByMonth / 100;
    startPriceNew *= 1 - percentLossByMonth / 100;
    diff = savings + startPriceOld - startPriceNew;
    countOfMonths++;
  }
  return [countOfMonths, Math.round(diff)];
};

// Inspiration
function nbMonths2(
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) {
  let months = 0;
  let moneySaved = 0;
  while (startPriceNew > startPriceOld + moneySaved) {
    moneySaved += savingPerMonth;
    startPriceOld -= startPriceOld * (percentLossByMonth / 100);
    startPriceNew -= startPriceNew * (percentLossByMonth / 100);
    months++;
    if (months % 2 === 1) {
      percentLossByMonth += 0.5;
    }
  }
  return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}

// Practicing
const nbMonthsZ = (
  startPriceOld,
  startPriceNew,
  savingPerMonth,
  percentLossByMonth
) => {
  return 1;
};

module.exports = nbMonths;
