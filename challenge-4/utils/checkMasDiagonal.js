exports.checkMasDiagonal = (row, col, array) => {
  if (
    (array[row - 1]?.[col - 1] === "M" && array[row + 1]?.[col + 1] === "S") ||
    (array[row - 1]?.[col - 1] === "S" && array[row + 1]?.[col + 1] === "M")
  ) {
    if (
      (array[row + 1]?.[col - 1] === "M" &&
        array[row - 1]?.[col + 1] === "S") ||
      (array[row + 1]?.[col - 1] === "S" && array[row - 1]?.[col + 1] === "M")
    )
      return 1;
  }
  return 0;
};
