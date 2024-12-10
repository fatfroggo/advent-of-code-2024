exports.createIndexAndDotsArray = (array) => {
  let currentDiskNumber = 0;
  const output = array.flatMap((item, index) => {
    let itemToPush = "";
    const subArray = [];
    if (index % 2 === 0) {
      itemToPush = currentDiskNumber;
      currentDiskNumber++;
    } else itemToPush = ".";

    for (let i = 1; i <= item; i++) {
      subArray.push(itemToPush);
    }
    return subArray;
  });
  return output;
};
