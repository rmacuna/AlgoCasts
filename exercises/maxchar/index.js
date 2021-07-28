// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let countChar = {};
  [...str].forEach((e) => {
    countChar[e] = countChar[e] ? countChar[e]++ : 1;
  });

  let max;
  Object.entries(countChar).forEach((entry) => {
    if (!max) {
      max = entry;
    }
    if (entry[1] > max[1]) {
      max = entry;
    }
  });

  return max[0];
}

module.exports = maxChar;
