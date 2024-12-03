exports.part1 = (inputData) => {
  const validMuls = inputData.match(/mul\(\d{1,3},\d{1,3}\)/g);
  const numbers = validMuls.map((singleMul) =>
    singleMul
      .substring(0, singleMul.length - 1)
      .split("(")[1]
      .split(",")
  );

  return numbers
    .map((pair) => pair[0] * pair[1])
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
