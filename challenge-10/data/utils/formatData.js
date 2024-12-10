exports.formatData = (rawDataString) => {
  return rawDataString.split("\n").map((gridRow) => {
    const splitRow = gridRow.split("");
    return splitRow.map((numberAsString) => +numberAsString);
  });
};
