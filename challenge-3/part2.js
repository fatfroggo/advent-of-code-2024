exports.part2 = (inputData) => {
  const splitArray = inputData.match(
    /mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g
  );

  const validMuls = [];
  let isValid = true;
  for (let i = 0; i < splitArray.length; i++) {
    if (splitArray[i] === "don't()") isValid = false;
    if (splitArray[i] === "do()") isValid = true;
    if (
      isValid === true &&
      splitArray[i] !== "don't()" &&
      splitArray[i] !== "do()"
    )
      validMuls.push(splitArray[i]);
  }

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
