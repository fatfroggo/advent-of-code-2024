const { spliceArray } = require("./utils/spliceArray");
const { checkSingleBadEgg } = require("./utils/checkSingleBadEgg");

exports.part2 = (inputData) => {
  const safeReports = inputData.filter((report) => {
    const isInitialValueSafe = checkSingleBadEgg(report);
    if (isInitialValueSafe) return true;

    let isSafe = true;
    for (let i = 0; i < report.length; i++) {
      isSafe = checkSingleBadEgg(spliceArray(report, i));
      if (isSafe) break;
    }
    return isSafe;
  });
  return safeReports.length;
};
