const { checkCombination } = require("./utils/checkCombination");
const { combinationGenerator } = require("./utils/combinationGenerator");

exports.part1 = (data) => {
  let validCasesTotal = 0;
  data.forEach((testCase) => {
    const [expectedTotal, values] = testCase;
    const combinations = combinationGenerator(values.length - 1, ["*", "+"]);

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
