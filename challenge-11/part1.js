exports.part1 = (stones) => {
  let blinkCounter = 0;

  while (blinkCounter < 25) {
    for (let i = 0; i < stones.length; i++) {
      const currentStone = stones[i];
      const numberToString = String(currentStone);

      if (currentStone === 0) stones[i] = 1;
      else if (numberToString.length % 2 === 1) stones[i] *= 2024;
      else {
        const firstHalf = +numberToString.slice(0, numberToString.length / 2);
        const secondHalf = +numberToString.slice(numberToString.length / 2);
        stones.splice(i, 1, firstHalf, secondHalf);
        i++;
      }
    }
    blinkCounter++;
  }
  return stones.length;
};
