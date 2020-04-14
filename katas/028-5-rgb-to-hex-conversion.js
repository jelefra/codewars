/*
https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript

The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// My try
function rgb(r, g, b) {
  let hex = "";

  let hexRed = Math.max(Math.min(r, 255), 0).toString(16);
  hexRed = `0${hexRed}`.slice(-2);
  hex += hexRed;

  let hexGreen = Math.max(Math.min(g, 255), 0).toString(16);
  hexGreen = `0${hexGreen}`.slice(-2);
  hex += hexGreen;

  let hexBlue = Math.max(Math.min(b, 255), 0).toString(16);
  hexBlue = `0${hexBlue}`.slice(-2);
  hex += hexBlue;

  return hex.toUpperCase();
}

// Best practice
function rgb2(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return `0${Number(d).toString(16)}`.slice(-2).toUpperCase();
}

// Alternative
function rgb3(r, g, b) {
  return [].slice
    .call(arguments)
    .map(function(v) {
      const ret = Math.max(0, Math.min(255, v))
        .toString(16)
        .toUpperCase();
      return (ret.length < 2 ? "0" : "") + ret;
    })
    .join("");
}

// Practicing
function rgbZ(args) {
  return 1;
}

module.exports = rgb;
