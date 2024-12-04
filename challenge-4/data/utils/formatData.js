exports.formatData = (rawDataString) => {
  const mainAray = rawDataString.split("\n").map((item) => item.split(""));
  return mainAray;
};
