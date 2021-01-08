/*
https://www.codewars.com/kata/complementary-dna/train/javascript

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" complement each other, so do "C" and "G".

Given one side of the DNA, determine the complementary side.

The DNA strand is never empty or there is no DNA at all.
*/

// Submission
function DNAStrand(dna) {
  return dna.replace(/A|T|G|C/gi, function(nucleobase) {
    return complementary[nucleobase];
  });
}

var complementary = {
  A: "T",
  T: "A",
  G: "C",
  C: "G"
};

// Inspiration
DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

const DNAStrand2 = dna => {
  return dna.replace(/./g, c => DNAStrand.pairs[c]);
};

const pairs3 = { A: "T", T: "A", C: "G", G: "C" };

const DNAStrand3 = dna => {
  return dna
    .split("")
    .map(v => pairs3[v])
    .join("");
};

// Practicing
const DNAStrandZ = dna => {
  return 1;
};

module.exports = DNAStrand;
