/*
https://www.codewars.com/kata/the-supermarket-queue/train/javascript

There is a queue for the self-checkout tills at the supermarket. Your task is to write a function to calculate the total time required for all the customers to check out!

The function has two input variables:

customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.

queueTime([5,3,4], 1)
// should return 12
// because when n=1, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12

N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

// Submission
function queueTime(customers, n) {
  const current = [];
  let totalMinutes = 0;
  let smallest = 0;
  while (customers.length) {
    while (current.length < n && customers.length) {
      const newCustomer = customers.shift();
      current.push(newCustomer);
    }
    if (customers.length === 0) {
      totalMinutes += Math.max(...current);
    } else {
      smallest = Math.min(...current);
      totalMinutes += smallest;
      for (let i = current.length - 1; i >= 0; i--) {
        if (current[i] === smallest) {
          current.splice(i, 1);
        } else {
          current[i] -= smallest;
        }
      }
    }
  }
  return totalMinutes;
}

// Inspiration
const queueTime2 = (customers, n) => {
  const queues = new Array(n).fill(0);
  for (const t of customers) {
    console.log(t);
    const index = queues.indexOf(Math.min(...queues));
    queues[index] += t;
  }
  return Math.max(...queues);
};

// Practicing
const queueTimeZ = (customers, n) => {
  return 1;
};

module.exports = queueTime;
