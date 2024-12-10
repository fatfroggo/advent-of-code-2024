const { checkSurroundingTiles } = require("./utils/checkSurroundingTiles");

function part1(topographicMap) {
  let score = 0;
  for (let row = 0; row < topographicMap.length; row++) {
    for (let col = 0; col < topographicMap[row].length; col++) {
      if (topographicMap[row][col] === 0) {
        const addingScore = checkSurroundingTiles(topographicMap, 1, [
          row,
          col,
        ]);
        score += addingScore;
      }
    }
  }
  return score;
}

module.exports = { part1 };
