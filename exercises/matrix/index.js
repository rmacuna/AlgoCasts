// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const createMatrix = (n) => {
  const result = [];
  for (var i = 0; i < n; i++) {
    result.push(new Array(n));
  }
  return result;
};

function matrix(n) {
  let counter = 1;
  let matrix = createMatrix(n);
  let startCol = 0;
  let startRow = 0;
  let endCol = n - 1;
  let endRow = n - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // Vertical from top to bottom
    for (let j = startRow; j <= endRow; j++) {
      matrix[j][endCol] = counter;
      counter++;
    }
    endCol--;
    // From right to left
    for (let k = endCol; k >= startCol; k--) {
      matrix[endRow][k] = counter;
      counter++;
    }
    endRow--;
    // From bottom to top
    for (let l = endRow; l >= startRow; l--) {
      matrix[l][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return matrix;
}

const m = matrix(10);
console.log(m);

module.exports = matrix;
