/*
https://www.codewars.com/kata/rgb-to-hex-conversion/train/javascript

The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// Submission
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

// Inspiration
const toHex = d => {
  if (d <= 0) {
    return "00";
  }
  if (d >= 255) {
    return "FF";
  }
  return `${Number(d).toString(16)}`.toUpperCase();
};

const rgb2 = (r, g, b) => {
  return toHex(r) + toHex(g) + toHex(b);
};

const rgb3 = (r, g, b) =>
  [r, g, b]
    .map(item =>
      item >= 255 ? "FF" : item <= 0 ? "00" : item.toString(16).toUpperCase()
    )
    .join("");

function rgb4(r, g, b) {
  return [].map
    .call(arguments, color =>
      color <= 0 ? "00" : color > 255 ? "FF" : color.toString(16)
    )
    .join("")
    .toUpperCase();
}

// Practicing
const rgbZ = (r, g, b) => {
  const toHexZ = decimal =>
    `0${Math.max(Math.min(decimal, 255), 0).toString(16)}`
      .slice(-2)
      .toUpperCase();
  return toHexZ(r) + toHexZ(g) + toHexZ(b);
};

module.exports = rgb;
