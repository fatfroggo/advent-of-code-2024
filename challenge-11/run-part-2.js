const { part2 } = require("./part2");
const fullData = require("./data/fullData/fullData");
const fs = require("fs/promises");
const result = part2(fullData);
fs.writeFile(`${__dirname}/part-2-result.txt`, JSON.stringify(result));
console.log(`Computer says: ${result}`);
