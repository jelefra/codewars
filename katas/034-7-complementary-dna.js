/*
https://www.codewars.com/kata/complementary-dna/train/javascript

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
DNAStrand ("ATTGC") # return "TAACG"
DNAStrand ("GTAT") # return "CATA"
*/

// My try
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

// Best practice
function DNAStrand2(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c];
  });
}

DNAStrand.pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

// Alternative
const pairs3 = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand3(dna) {
  return dna
    .split("")
    .map(function(v) {
      return pairs3[v];
    })
    .join("");
}

// Alternative
const pairs4 = { A: "T", T: "A", C: "G", G: "C" };
const DNAStrand4 = dna => dna.replace(/./g, c => pairs4[c]);

// Practicing
function DNAStrandZ(args) {
  return 1;
}

module.exports = DNAStrand;
