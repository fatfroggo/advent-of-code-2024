exports.part1 = (inputData) => {
  const validMuls = inputData.match(/mul\(\d{1,3},\d{1,3}\)/g);
  let total = 0;
  const numbers = validMuls.map((singleMul) =>
    singleMul
      .substring(0, singleMul.length - 1)
      .split("(")[1]
      .split(",")
  );

  for (let i = 0; i < numbers.length; i++) {
    total += +numbers[i][0] * +numbers[i][1];
  }
  return total;
};
