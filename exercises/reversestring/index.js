// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Brute force...
function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    reversed += element;
  }
  return reversed;
}

// Aknowlege of JS.
// function reverse(str = "") {
//   return [...str].reverse().join("");
// }

module.exports = reverse;
