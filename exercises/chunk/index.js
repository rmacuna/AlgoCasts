// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // Solution by Stephen Grider

  // const arrayToChunk = [...array];
  // const chunked = [];
  // for (const elem of arrayToChunk) {
  //   const lastElem = chunked[chunked.length - 1];
  //   if (!lastElem || lastElem.length === size) {
  //     chunked.push([elem]);
  //   } else {
  //     lastElem.push(elem);
  //   }
  // }

  // return chunked;

  // My solution
  let counter = 0;
  let chunkedArray = [];
  let chunkQueue = [];
  let i = 0;
  for (const elem of arrayToChunk) {
    counter++;
    i++;
    if (counter === size || i === arrayToChunk.length) {
      chunkQueue.push(elem);
      chunkedArray.push(chunkQueue);
      chunkQueue.length = 0;
      counter = 0;
    } else {
      chunkQueue.push(elem);
    }
  }
  return chunkedArray;
}

module.exports = chunk;
