const { checkCombination } = require("./utils/checkCombination");
const { combinationGenerator } = require("./utils/combinationGenerator");

exports.part2 = (inputData) => {
  let validCasesTotal = 0;
  inputData.forEach((testCase) => {
    const [expectedTotal, values] = testCase;
    const combinations = combinationGenerator(values.length - 1, [
      "*",
      "+",
      "|",
    ]);

    for (let i = 0; i < combinations.length; i++) {
      const isValid = checkCombination(values, expectedTotal, combinations[i]);
      if (isValid) {
        validCasesTotal += expectedTotal;
        break;
      }
    }
  });
  return validCasesTotal;
};
