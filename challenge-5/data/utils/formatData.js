exports.formatData = (rawDataString) => {
  const array = rawDataString.split("\n");
  const instructions = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "") {
      break;
    }
    instructions.push(array[i]);
  }

  const finalInstructions = instructions.map((item) => {
    const splitInstructions = item.split("|");
    return [+splitInstructions[0], +splitInstructions[1]];
  });

  const pages = [...array.slice(instructions.length + 1)];
  const finalPages = pages.map((pageList) => {
    const singleList = pageList.split(",");
    return singleList.map((page) => +page);
  });

  return { instructions: finalInstructions, pages: finalPages };
};
