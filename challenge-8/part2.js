const { getCoords } = require("./utils/getCoords");
exports.part2 = (grid) => {
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

    let currentNode = [firstX - xdifference, firstY - ydifference];
    const allNodes = [`${firstX},${firstY}`];

    while (
      currentNode[0] >= 0 &&
      currentNode[0] < grid.length &&
      currentNode[1] < grid.length &&
      currentNode[1] >= 0
    ) {
      allNodes.push(`${currentNode[0]},${currentNode[1]}`);
      currentNode = [
        currentNode[0] - xdifference,
        currentNode[1] - ydifference,
      ];
    }

    return allNodes;
  });

  const flattenedArray = nodeCoordinates.flat();
  return new Set(flattenedArray).size;
};
