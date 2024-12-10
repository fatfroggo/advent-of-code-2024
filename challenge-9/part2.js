const { createIndexAndDotsArray } = require("./utils/createIndexAndDotsArray");

exports.part2 = (diskMap) => {
  const diskArray = createIndexAndDotsArray(diskMap);

  let currentDiskNumber = 0;
  for (let i = diskArray.length - 1; i >= 0; i--) {
    if (diskArray[i] !== ".") {
      // Find out how many of the given disk there are
      currentDiskNumber = diskArray[i];
      const startIndexOfCurrentDisk = diskArray.indexOf(currentDiskNumber);
      const numberOfCurrentDisks = i - startIndexOfCurrentDisk + 1;
      i = startIndexOfCurrentDisk;

      let startOfSpaceIndex = diskArray.indexOf(".");
      let lengthOfCurrentSpace = 1;
      for (let j = startOfSpaceIndex; j < startIndexOfCurrentDisk; j++) {
        // if there is a big enough space, push
        if (lengthOfCurrentSpace >= numberOfCurrentDisks) {
          const numberArrayToInsert = [];
          const dotArrayToInsert = [];
          for (let k = 0; k < numberOfCurrentDisks; k++) {
            numberArrayToInsert.push(currentDiskNumber);
            dotArrayToInsert.push(".");
          }

          // move the numbers
          diskArray.splice(
            startOfSpaceIndex,
            numberOfCurrentDisks,
            ...numberArrayToInsert
          );
          // replace numbers with dots
          diskArray.splice(
            startIndexOfCurrentDisk,
            numberOfCurrentDisks,
            ...dotArrayToInsert
          );
          break;
        } else if (diskArray[j + 1] === ".") {
          lengthOfCurrentSpace++;
        } else {
          startOfSpaceIndex = diskArray.indexOf(
            ".",
            startOfSpaceIndex + lengthOfCurrentSpace
          );
          j = startOfSpaceIndex - 1;
          lengthOfCurrentSpace = 1;
        }
      }
    }
  }
  return diskArray.reduce((sum, element, i) => {
    if (element !== ".") {
      return (sum += element * i);
    } else return sum;
  }, 0);
};
