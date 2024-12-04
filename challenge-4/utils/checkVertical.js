exports.checkVertical = (row, col, array) => {
  let count = 0;

  // check down
  if (
    array[row + 1]?.[col] === "M" &&
    array[row + 2]?.[col] === "A" &&
    array[row + 3]?.[col] === "S"
  )
    count++;

  // check up
  if (
    array[row - 1]?.[col] === "M" &&
    array[row - 2]?.[col] === "A" &&
    array[row - 3]?.[col] === "S"
  )
    count++;

  return count;
};
