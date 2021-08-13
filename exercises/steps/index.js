// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   ' -- n - 1
//       '##  ' -- n - 2
//       '### ' -- n - 3
//       '####' -- 0

// Recursive solution

// function steps(n, row = 0, stair = "") {
//   if (row === n) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     steps(n, row + 1);
//     return;
//   }

//   if (stair.length <= row) {
//     stair += "#";
//   } else {
//     stair += " ";
//   }

//   steps(n, row, stair);
// }

function steps(n) {
  // Guard: Prevent continue if n <= 0
  if (n <= 0) return "";

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (i >= j) {
        row += "#";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

module.exports = steps;
