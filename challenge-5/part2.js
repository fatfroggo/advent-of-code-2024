const {
  findRelevantInstructions,
} = require("./utils/findRelevantInstructions");

exports.part2 = ({ instructions, pages }) => {
  const inValidLists = [];

  for (let i = 0; i < pages.length; i++) {
    let lookupObject = {};
    let isValid = true;
    const problemNumberPairs = [];
    for (let j = 0; j < pages[i].length; j++) {
      const orders = findRelevantInstructions(pages[i][j], instructions);
      for (let k = 0; k < pages[i].length; k++) {
        //before the number
        if (k < j) {
          if (orders[1].includes(pages[i][k])) {
            isValid = false;
            problemNumberPairs.push([pages[i][j], pages[i][k]]);
          }
        }
        //after
        else if (k > j) {
          if (orders[0].includes(pages[i][k])) {
            isValid = false;
            problemNumberPairs.push([pages[i][k], pages[i][j]]);
          }
        }
      }
    }

    problemNumberPairs.forEach((pair) => {
      if (!lookupObject[pair[0]]) {
        lookupObject[pair[0]] = [];
      }

      if (!lookupObject[pair[0]].includes(pair[1])) {
        lookupObject[pair[0]].push(pair[1]);
      }
    });

    const correctlyOrderedList = pages[i].sort((a, b) => {
      if (lookupObject[a]?.includes(b)) return -1;
      else return 0;
    });
    if (isValid === false) inValidLists.push(correctlyOrderedList);
  }

  let sum = 0;
  inValidLists.forEach((item) => (sum += item[Math.floor(item.length / 2)]));

  return sum;
};
