exports.formatData = (rawDataString) => {
  return rawDataString.split(" ").map((numberString) => Number(numberString));
};
