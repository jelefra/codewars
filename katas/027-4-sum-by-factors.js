/*
https://www.codewars.com/kata/sum-by-factors/train/javascript

Given an array of positive or negative integers I = [i1,..,in]

you have to produce a sorted array P of the form [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as an array of arrays.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes: It can happen that a sum is 0 if some numbers are negative!

Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.
*/

// Submission
function sumOfDivided(lst) {
  const primeNumbers = [];
  const max = Math.max(Math.max(...lst), -Math.min(...lst));
  for (var i = 0; i < max; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }

  const primeAndSum = [];
  for (var i = 0; i < primeNumbers.length; i++) {
    const thisPrimeAndSum = [];
    let s = 0;
    let factored = false;
    for (let j = 0; j < lst.length; j++) {
      if (lst[j] % primeNumbers[i] === 0) {
        s += lst[j];
        factored = true;
      }
    }
    if (factored) {
      thisPrimeAndSum.push(primeNumbers[i]);
      thisPrimeAndSum.push(s);
      primeAndSum.push(thisPrimeAndSum);
    }
  }
  return primeAndSum;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Inspiration
function sumOfDivided2(lst) {
  if (lst.length == 0) {
    return [];
  }
  const m = Math.max.apply(null, lst.map(Math.abs));
  const primes = [];
  const marked = Array(m + 1);

  for (var i = 2; i <= m; ++i) {
    if (marked[i]) continue;

    var sum = 0;
    var isMul = false;
    lst.forEach(function(n) {
      if (n % i == 0) {
        sum += n;
        isMul = true;
      }
    });
    if (isMul) primes.push([i, sum]);

    for (let j = 2 * i; j <= m; j += i) {
      marked[j] = true;
    }
  }

  return primes;
}

// Practicing
function sumOfDividedZ(args) {
  return 1;
}

module.exports = sumOfDivided;
