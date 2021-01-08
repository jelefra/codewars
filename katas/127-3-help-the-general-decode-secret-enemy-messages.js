/*
https://www.codewars.com/kata/help-the-general-decode-secret-enemy-messages/train/javascript

General Patron is faced with a problem , his intelligence has intercepted some secret messages from the enemy but they are all encrypted. Those messages are crucial to getting the jump on the enemy and winning the war. Luckily intelligence also captured an encoding device as well. However even the smartest programmers weren't able to crack it though. So the general is asking you , his most odd but brilliant programmer.

You can call the encoder like this:
console.log(device.encode ('What the hell'));

Our cryptoanalysts kept poking at it and found some interesting patterns.

console.log(device.encode('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));
bdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhpF,82QsLir

console.log(device.encode('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'));
dhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqHabdhp

console.log(device.encode('!@#$%^&*()_+-'));
!@#$%^&*()_+-


console.log(device.encode('abcdefghijklmnopqrstuvwxyz'));
bhx,zWyLZ3pOGIhzeXTYtjAaDW

console.log('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode (a);
}).join ('')) ;
bdfhjlnprtvxzBDFHJLNPRTVXZ

console.log('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode ('_'+a)[1];
}).join ('')) ;
dhlptxBFJNRVZ37,aeimquyCGK

console.log('abcdefghijklmnopqrstuvwxyz'.split ('').map (function (a) {
  return device.encode ('__'+a)[2];
}).join ('')) ;
hpxFNV3,emuCKS08bjrzHPX5 g


We think if you keep on this trail you should be able to crack the code! You are expected to fill in the device.decode function.

Good luck ! General Patron is counting on you!

*/

// Submission
const decode = w => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,? ";
  return w.replace(/./g, (c, i) => {
    let code = chars.indexOf(c) + 1;
    while (i-- >= 0) {
      code = code % 2 ? (code + 67) / 2 : code / 2;
    }
    return code ? chars[code - 1] : c;
  });
};

// Inspiration

// Practicing
const decodeZ = () => 1;

module.exports = decode;
