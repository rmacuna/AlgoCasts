// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// /[^\w]/

const cleanString = (value) => value.replace(/[^\w]/g, "").toLowerCase();

const createCharacterMap = (value) => {
  let characterMap = {};

  [...value].forEach((e) => {
    characterMap[e] = characterMap[e] ? characterMap[e]++ : 1;
  });

  return characterMap;
};

// An alternative solution could be, sort each cleaned string and then compare it

function anagrams(stringA, stringB) {
  // Clean the strings (We don't want to count spaces or punctuation)
  const cleanedStringA = cleanString(stringA);
  const cleanedStringB = cleanString(stringB);
  // Create the character map function
  // We call the function for each string

  const characterMapOfStringA = createCharacterMap(cleanedStringA);
  const characterMapOfStringB = createCharacterMap(cleanedStringB);

  if (
    Object.keys(characterMapOfStringA).length !==
    Object.keys(characterMapOfStringB).length
  )
    return false;

  for (const char in characterMapOfStringA) {
    const valueInMapA = characterMapOfStringA[char];
    const valueInMapB = characterMapOfStringB[char];

    if (valueInMapA !== valueInMapB) return false;
  }

  return true;
}

module.exports = anagrams;
