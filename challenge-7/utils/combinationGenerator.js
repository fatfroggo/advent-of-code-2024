exports.combinationGenerator = (numberOfOperators, operatorsArray) => {
  const indexes = [...Array(numberOfOperators).keys()];

  const combinationsArray = indexes.reduce((result) => {
    const allCombinations = operatorsArray.concat(
      result.flatMap((operator1) =>
        operatorsArray.map((operator2) => operator1 + operator2)
      )
    );
    return allCombinations;
  }, []);
  
  return combinationsArray.filter(
    (array) => array.length === numberOfOperators
  );
};
