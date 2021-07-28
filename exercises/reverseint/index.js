// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseStr(str) {
  return [...("" + str)].reverse().join("");
}

function reverseInt(n) {
  if (Math.abs(n) <= 9) return n;
  const reversed = reverseStr(n);
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
