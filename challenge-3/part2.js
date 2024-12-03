exports.part2 = (inputData) => {
  // find valid muls by sepating by do and don't
  const validMuls = inputData
    .split("do()")
    .map((item) => item.split("don't()")[0].match(/mul\(\d{1,3},\d{1,3}\)/g))
    .flat();

  // isolate numbers alone from the pairs 
  const numbers = validMuls.map((singleMul) =>
    singleMul
      .substring(0, singleMul.length - 1)
      .split("(")[1]
      .split(",")
  );

  // add up the product of each pair and return 
  return numbers
    .map((pair) => pair[0] * pair[1])
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
