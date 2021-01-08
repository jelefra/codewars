/*
https://www.codewars.com/kata/human-readable-duration-format/train/javascript

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

// Submission
function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }
  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let arr = [];
  if (seconds >= 365 * 24 * 60 * 60) {
    years = Math.trunc(seconds / (365 * 24 * 60 * 60));
    seconds %= 365 * 24 * 60 * 60;
    if (years > 1) {
      years += " years";
    } else if (years > 0) {
      years += " year";
    }
  }
  if (seconds >= 24 * 60 * 60) {
    days = Math.trunc(seconds / (24 * 60 * 60));
    seconds %= 24 * 60 * 60;
    if (days > 1) {
      days += " days";
    } else if (days > 0) {
      days += " day";
    }
  }
  if (seconds >= 60 * 60) {
    hours = Math.trunc(seconds / (60 * 60));
    seconds %= 60 * 60;
    if (hours > 1) {
      hours += " hours";
    } else if (hours > 0) {
      hours += " hour";
    }
  }
  if (seconds >= 60) {
    minutes = Math.trunc(seconds / 60);
    seconds %= 60;
    if (minutes > 1) {
      minutes += " minutes";
    } else if (minutes > 0) {
      minutes += " minute";
    }
  }
  if (seconds > 1) {
    seconds += " seconds";
  } else if (seconds > 0) {
    seconds += " second";
  }
  arr.push(years, days, hours, minutes, seconds);
  arr = arr.filter(e => e !== 0);
  if (arr.length > 1) {
    arr[arr.length - 1] = `and ${arr[arr.length - 1]}`;
  }
  const sentence = arr.join(", ");
  return sentence.replace(", and", " and");
}

// Inspiration
function formatDuration2(seconds) {
  const time = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };
  const res = [];

  if (seconds === 0) return "now";

  for (const key in time) {
    if (seconds >= time[key]) {
      let val = Math.floor(seconds / time[key]);
      res.push((val += val > 1 ? ` ${key}s` : ` ${key}`));
      seconds %= time[key];
    }
  }

  return res.length > 1
    ? res.join(", ").replace(/,([^,]*)$/, " and" + "$1")
    : res[0];
}

// Practicing
function formatDurationZ(seconds) {
  return 1;
}

module.exports = formatDuration;
