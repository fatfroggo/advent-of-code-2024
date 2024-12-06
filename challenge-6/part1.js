const { getStartPosition } = require("./utils/getStartPosition");

exports.part1 = (grid) => {
  let currentPosition = getStartPosition(grid);
  const locations = [currentPosition];

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let inArea = true;
  let obstacles = 0;

  while (inArea) {
    // find direction based on the current obstacle number e.g. if at 1 obstacle, use index 1 of directions array
    let directionToUse = obstacles % 4;

    const [rowChange, colChange] = directions[directionToUse];

    // current location is the last valid point the guard was at
    const [currentRow, currentCol] = locations[locations.length - 1]
      .split(",")
      .map((location) => +location);

    const [nextRow, nextCol] = [currentRow + rowChange, currentCol + colChange];

    const nextLocation = grid[nextRow]?.[nextCol];

    if (!nextLocation) inArea = false;
    else if (nextLocation === "#") obstacles++;
    else locations.push(`${nextRow},${nextCol}`);
  }

  const uniqueLocations = new Set(locations);
  return uniqueLocations.size;
};
