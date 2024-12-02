exports.part1 = (inputData) => {
  const safeReports = inputData.filter((report) => {
    let isDecreasing;
    report[0] > report[1] ? (isDecreasing = true) : (isDecreasing = false);

    let isSafe = true;
    for (let i = 0; i < report.length; i++) {
      if (isDecreasing) {
        if (report[i + 1] >= report[i] || report[i + 1] < report[i] - 3)
          isSafe = false;
      } else {
        if (report[i + 1] <= report[i] || report[i + 1] > report[i] + 3)
          isSafe = false;
      }
    }
    return isSafe;
  });
  return safeReports.length;
};
