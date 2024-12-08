exports.formatData = (rawDataString) => {
  return rawDataString.split(`\n`).map((row) => row.split(""));
};
