const { getCoords } = require("./utils/getCoords");

exports.part1 = (grid) => {
  const coords = getCoords(grid);
  const allCombinations = [];

  for (const antenna in coords) {
    for (let i = 0; i < coords[antenna].length; i++) {
      for (let j = 0; j < coords[antenna].length; j++) {
        if (coords[antenna][i] !== coords[antenna][j])
          allCombinations.push([coords[antenna][i], coords[antenna][j]]);
      }
    }
  }

  const nodeCoordinates = allCombinations.map((pair) => {
    const [firstX, firstY] = pair[0];
    const [secondX, secondY] = pair[1];

    const [xdifference, ydifference] = [secondX - firstX, secondY - firstY];
    const node = [firstX - xdifference, firstY - ydifference];

    if (node[0] >= 0 && node[1] < grid.length) {
      return `${node[0]},${node[1]}`;
    } else return [];
  });

  const flattenedArray = nodeCoordinates.flat();
  return new Set(flattenedArray).size;
};
