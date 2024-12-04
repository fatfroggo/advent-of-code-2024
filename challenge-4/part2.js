const { checkMasDiagonal } = require("./utils/checkMasDiagonal");

exports.part2 = (inputData) => {
  let count = 0;
  for (let i = 0; i < inputData.length; i++) {
    for (let j = 0; j < inputData[i].length; j++) {
      if (inputData[i][j] === "A") count += checkMasDiagonal(i, j, inputData);
    }
  }
  return count;
};
