function checkSurroundingTiles(
  topographicMap,
  nextElevation,
  startingCoordinate,
  score = 0,
  usedNines = []
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
      if (nextElevation === 9 && !usedNines.includes(`${nextRow},${nextCol}`)) {
        usedNines.push(`${nextRow},${nextCol}`);
        score++;
      } else {
        score = checkSurroundingTiles(
          topographicMap,
          nextElevation + 1,
          [nextRow, nextCol],
          score,
          usedNines
        );
      }
    }
  }

  return score;
}

module.exports = { checkSurroundingTiles };
