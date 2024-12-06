function checkNextPosition(locationGrid, currentPosition, direction) {
  let row = +currentPosition.split(",")[0];
  let col = +currentPosition.split(",")[1];
  if (direction === "up") {
    if (!locationGrid[row - 1]?.[col])
      return { location: `${row},${col}`, done: true };
    if (locationGrid[row - 1]?.[col] !== "#") {
      return checkNextPosition(locationGrid, `${row - 1},${col}`, "up");
    } else {
      return { done: false, location: `${row},${col}` };
    }
  }
  if (direction === "down") {
    if (!locationGrid[row + 1]?.[col])
      return { location: `${row},${col}`, done: "done" };
    if (locationGrid[row + 1]?.[col] !== "#")
      return checkNextPosition(locationGrid, `${row + 1},${col}`, "down");
    else {
      return { done: false, location: `${row},${col}` };
    }
  }
  if (direction === "left") {
    if (!locationGrid[row]?.[col - 1])
      return { location: `${row},${col}`, done: "done" };
    if (locationGrid[row]?.[col - 1] !== "#")
      return checkNextPosition(locationGrid, `${row},${col - 1}`, "left");
    else {
      return { done: false, location: `${row},${col}` };
    }
  }
  if (direction === "right") {
    if (!locationGrid[row]?.[col + 1])
      return { location: `${row},${col}`, done: "done" };
    if (locationGrid[row]?.[col + 1] !== "#")
      return checkNextPosition(locationGrid, `${row},${col + 1}`, "right");
    else {
      return { done: false, location: `${row},${col}` };
    }
  }
}

module.exports = { checkNextPosition };
