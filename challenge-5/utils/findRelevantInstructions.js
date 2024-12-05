exports.findRelevantInstructions = (pageNumber, instructions) => {
  const relevantInstructions = instructions.filter((item) =>
    item.includes(pageNumber)
  );
  const before = [];
  const after = [];
  for (let i = 0; i < relevantInstructions.length; i++) {
    if (relevantInstructions[i][0] !== pageNumber)
      before.push(relevantInstructions[i][0]);
    if (relevantInstructions[i][0] === pageNumber)
      after.push(relevantInstructions[i][1]);
  }
  return [before, after];
};
