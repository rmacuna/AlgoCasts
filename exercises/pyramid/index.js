// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  ' 4 - 2 = 2 (First level) -> n - 1
//       ' ### ' (Second level) -> n - 2
//       '#####' (Third level) -> n - n
//   pyramid(5)
//  (1) 1 '    #    ' 1 --- 8
/*  (1) 2 '   ###   ' 3 --- 6 
    (2) 3 '  #####  ' 5 --- 4
    (3) 4 ' ####### ' 7 --- 2
    (4) 5 '#########' 9 --- 0

        [---.---]
        [--...--]
        [       ]
        [       ]
*/

// Recursive solution

function pyramid(n, row = 0, level = "") {
  // Base cases
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(n, row, level + add);
}

// function pyramid(n) {
//   if (n === 1) return "#";
//   const levelLength = 2 * n - 1;
//   const middle = Math.floor(levelLength / 2) + 1;

//   for (let i = 1; i <= n; i++) {
//     let level = "";
//     for (let j = 1; j <= levelLength; j++) {
//       // For the first iteration you put the # in the middle
//       if (i === 1) {
//         level += j === middle ? "#" : " ";
//       }
//       // If you are in the base of the pyramid you put all the #
//       if (i === n) {
//         level += "#";
//       }
//       // Add the logic for resolving the pyramid
//       if (i < n && i > 1) {
//         if (j <= middle - i || j >= middle + i) {
//           level += " ";
//         } else {
//           level += "#";
//         }
//       }
//     }
//     console.log(level);
//   }
// }

module.exports = pyramid;
