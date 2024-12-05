const {
  findRelevantInstructions,
} = require("./utils/findRelevantInstructions");

exports.part1 = ({ instructions, pages }) => {
  const validLists = [];
  for (let i = 0; i < pages.length; i++) {
    let isValid = true;
    for (let j = 0; j < pages[i].length; j++) {
      const orders = findRelevantInstructions(pages[i][j], instructions);
      for (let k = 0; k < pages[i].length; k++) {
        //before the number
        if (k < j) {
          if (orders[1].includes(pages[i][k])) {
            isValid = false;
          }
        }
        //after
        else if (k > j) {
          if (orders[0].includes(pages[i][k])) {
            isValid = false;
          }
        }
      }
    }
    if (isValid === true) validLists.push(pages[i]);
  }

  let sum = 0;
  validLists.forEach((item) => (sum += item[Math.floor(item.length / 2)]));

  return sum;
};
