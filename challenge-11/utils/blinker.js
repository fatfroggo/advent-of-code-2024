exports.blinker = (stone, blinkNum) => {
  let blinks = 0;

  while (blinks < blinkNum) {
    for (let i = 0; i < stone.length; i++) {
      const numberToString = String(stone[i]);

      if (stone[i] === 0) stone[i] = 1;
      else if (numberToString.length % 2 === 1) stone[i] *= 2024;
      else {
        const firstHalf = +numberToString.slice(0, numberToString.length / 2);
        const secondHalf = +numberToString.slice(numberToString.length / 2);
        stone.splice(i, 1, firstHalf, secondHalf);
        i++;
      }
    }
    blinks++;
  }
  return stone;
};
