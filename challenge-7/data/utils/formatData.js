exports.formatData = (rawDataString) => {
  const lines = rawDataString.split("\n").map((line) => {
    const splitLine = line.split(": ");
    return [+splitLine[0], splitLine[1].split(" ").map((value) => +value)];
  });
  return lines;
};
