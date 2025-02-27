// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str = "") {
  // If string is empty so we will return inmediatly.
  if (!str) return;

  // Split the string
  const words = str.split(" ");

  // Capitalize first character using a RegExp
  // O(n) time complexity
  const capitalized = words.map((word) =>
    word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  );

  // Join to makeIt a string
  return capitalized.join(" ");
}

module.exports = capitalize;
