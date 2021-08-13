// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str = ``) {
  // First all we're going to create the regExp
  // Or we can try with the iterative solution...

  // Solution iterative:
  let vowelCount = 0;
  const vowels = [`a`, `e`, `i`, `o`, `u`];
  for (const character of str) {
    const lowerChar = character.toLowerCase();
    if (vowels.includes(lowerChar)) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}

module.exports = vowels;
