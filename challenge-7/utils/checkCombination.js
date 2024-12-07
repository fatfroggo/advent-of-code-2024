exports.checkCombination = (values, expectedTotal, operators) => {
  let equation = values[0];
  let runningTotal = 0;

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "|") {
      equation = `${equation}${values[i + 1]}`;
    } else {
      equation += operators[i];
      equation += values[i + 1];
    }
    equation = eval(equation);
  }

  return equation === expectedTotal;
};
