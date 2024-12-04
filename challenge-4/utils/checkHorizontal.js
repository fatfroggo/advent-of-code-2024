exports.checkHorizontal = (row, col, array) => {
  let count = 0;

  // check forward
  if (
    array[row]?.[col + 1] === "M" &&
    array[row]?.[col + 2] === "A" &&
    array[row]?.[col + 3] === "S"
  )
    count++;

  // check backwards
  if (
    array[row]?.[col - 1] === "M" &&
    array[row]?.[col - 2] === "A" &&
    array[row]?.[col - 3] === "S"
  )
    count++;

  return count;
};
