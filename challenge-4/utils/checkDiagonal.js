exports.checkDiagonal = (row, col, array) => {
  let count = 0;

  // check forward-up
  if (
    array[row - 1]?.[col + 1] === "M" &&
    array[row - 2]?.[col + 2] === "A" &&
    array[row - 3]?.[col + 3] === "S"
  )
    count++;

  // check forward-down
  if (
    array[row + 1]?.[col + 1] === "M" &&
    array[row + 2]?.[col + 2] === "A" &&
    array[row + 3]?.[col + 3] === "S"
  )
    count++;

  // check backwards-up
  if (
    array[row - 1]?.[col - 1] === "M" &&
    array[row - 2]?.[col - 2] === "A" &&
    array[row - 3]?.[col - 3] === "S"
  )
    count++;

  // check backwards-down
  if (
    array[row + 1]?.[col - 1] === "M" &&
    array[row + 2]?.[col - 2] === "A" &&
    array[row + 3]?.[col - 3] === "S"
  )
    count++;

  return count;
};
