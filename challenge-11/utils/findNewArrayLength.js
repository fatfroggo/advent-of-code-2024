function findNewArrayLength(characterArray) {
  const subArray = [];
  for (let i = 0; i < characterArray.length; i++) {
    const currentStone = characterArray[i];
    const numberToString = String(currentStone);

    if (currentStone === 0) subArray.push([1]);
    else if (numberToString.length % 2 === 1)
      subArray.push([(characterArray[i] *= 2024)]);
    else {
      const firstHalf = +numberToString.slice(0, numberToString.length / 2);
      const secondHalf = +numberToString.slice(numberToString.length / 2);
      subArray.push([firstHalf, secondHalf]);
    }
  }

  return subArray;
}

module.exports = { findNewArrayLength };
