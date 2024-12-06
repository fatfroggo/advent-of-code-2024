const { checkNextPosition } = require("./utils/checkNextPosition");
const { getStartPosition } = require("./utils/getStartPosition");

exports.part1 = (grid) => {
  let currentPosition = getStartPosition(grid);
  const locations = [currentPosition];
  let direction = "up";
  let isDone = false;

  while (!isDone) {
    const turnPoint = checkNextPosition(grid, currentPosition, direction);
    if (turnPoint.done) {
      isDone = true;
    }
    if (direction === "up") {
      for (
        let i = currentPosition.split(",")[0];
        i >= turnPoint.location.split(",")[0];
        i--
      ) {
        locations.push(`${i},${turnPoint.location.split(",")[1]}`);
      }
    }
    if (direction === "down") {
      for (
        let i = currentPosition.split(",")[0];
        i <= turnPoint.location.split(",")[0];
        i++
      ) {
        locations.push(`${i},${turnPoint.location.split(",")[1]}`);
      }
    }
    if (direction === "left") {
      for (
        let i = currentPosition.split(",")[1];
        i >= turnPoint.location.split(",")[1];
        i--
      ) {
        locations.push(`${turnPoint.location.split(",")[0]},${i}`);
      }
    }
    if (direction === "right") {
      for (
        let i = currentPosition.split(",")[1];
        i <= turnPoint.location.split(",")[1];
        i++
      ) {
        locations.push(`${turnPoint.location.split(",")[0]},${i}`);
      }
    }

    currentPosition = turnPoint.location;
    if (direction === "up") direction = "right";
    else if (direction === "right") direction = "down";
    else if (direction === "down") direction = "left";
    else if (direction === "left") direction = "up";
  }

  const uniqueLocations = new Set(locations);
  return uniqueLocations.size;
};
