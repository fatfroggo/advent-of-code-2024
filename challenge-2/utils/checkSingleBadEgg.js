exports.checkSingleBadEgg = (array) => {
  let isDecreasing = array[0] > array[1];
  let isSafe = true;

  for (let i = 0; i < array.length; i++) {
    if (isDecreasing) {
      if (array[i + 1] >= array[i] || array[i + 1] < array[i] - 3)
        isSafe = false;
    } else {
      if (array[i + 1] <= array[i] || array[i + 1] > array[i] + 3)
        isSafe = false;
    }
  }
  return isSafe;
};
