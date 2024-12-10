function checkAllPossibleTrails(
  topographicMap,
  nextElevation,
  startingCoordinate,
  score = 0
) {
  const [startRow, startCol] = startingCoordinate;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  for (let i = 0; i <= 3; i++) {
    const nextRow = startRow + directions[i][0];
    const nextCol = startCol + directions[i][1];
    if (topographicMap[nextRow]?.[nextCol] === nextElevation) {
      if (nextElevation === 9) {
        score++;
      } else {
        score = checkAllPossibleTrails(
          topographicMap,
          nextElevation + 1,
          [nextRow, nextCol],
          score
        );
      }
    }
  }

  return score;
}

module.exports = { checkAllPossibleTrails };
