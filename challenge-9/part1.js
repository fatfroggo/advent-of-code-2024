const { createIndexAndDotsArray } = require("./utils/createIndexAndDotsArray");

exports.part1 = (diskMap) => {
  const diskArray = createIndexAndDotsArray(diskMap);
  for (let i = diskArray.length - 1; i >= 0; i--) {
    if (diskArray[i] !== ".") {
      const firstDot = diskArray.indexOf(".");
      if (firstDot < i) {
        diskArray[firstDot] = diskArray[i];
        diskArray[i] = ".";
      }
    }
  }
  return diskArray.reduce((sum, element, i) => {
    if (element !== ".") {
      return (sum += element * i);
    } else return sum;
  }, 0);
};
