exports.formatData = (rawDataString) => {
  const individualReports = rawDataString.split("\n");
  const individualLevels = individualReports.map((report) =>
    report.split(" ").map((item) => +item)
  );
  return individualLevels;
};
