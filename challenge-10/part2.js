const { checkAllPossibleTrails } = require("./utils/checkAllPossibleTrails");

function part2(topographicMap) {
  let score = 0;
  for (let row = 0; row < topographicMap.length; row++) {
    for (let col = 0; col < topographicMap[row].length; col++) {
      if (topographicMap[row][col] === 0) {
        const addingScore = checkAllPossibleTrails(topographicMap, 1, [
          row,
          col,
        ]);
        score += addingScore;
      }
    }
  }
  return score;
}

module.exports = { part2 };
