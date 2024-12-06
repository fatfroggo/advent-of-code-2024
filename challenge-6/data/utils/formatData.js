exports.formatData = (rawDataString) => {
    const splitByLine = rawDataString.split("\n");
    const grid = splitByLine.map(line => line.split(""))
    return grid;
};