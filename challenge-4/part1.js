const { checkHorizontal } = require("./utils/checkHorizontal");
const { checkVertical } = require("./utils/checkVertical");
const { checkDiagonal } = require("./utils/checkDiagonal");

exports.part1 = (inputData) => {
  let count = 0;
  for (let i = 0; i < inputData.length; i++) {
    for (let j = 0; j < inputData[i].length; j++) {
      if (inputData[i][j] === "X") {
        count += checkHorizontal(i, j, inputData);
        count += checkVertical(i, j, inputData);
        count += checkDiagonal(i, j, inputData);
      }
    }
  }
  return count;
};
