const fs = require("fs/promises");

const setupChallengeDay = () => {
    const day = new Date().getDate();

    return fs
        .mkdir(`${__dirname}/challenge-${day}`)
        .then(() => {
            fs.writeFile(`${__dirname}/challenge-${day}/part1.js`, "exports.part1 = (inputData) => {\n\n}");
            return fs.writeFile(`${__dirname}/challenge-${day}/part2.js`, "exports.part2 = (inputData) => {\n\n}");
        })
        .then(() => {
            return fs.mkdir(`${__dirname}/challenge-${day}/__tests__`);
        })
        .then(() => {
            return fs.writeFile(
                `${__dirname}/challenge-${day}/__tests__/index.test.js`,
                "const { part1 } = require('../part1')\nconst { part2 } = require('../part2')\nconst testData = require('../data/testData/testData')\nconst fullData = require('../data/fullData/fullData')\n\ndescribe('part 1 - ', () => { \ntest('', () => {\n//expect(part1(testData).toBe())\n//expect(part1(fullData).toBe())\n})})\n\ndescribe('part 2 - ', () => { \ntest('', () => {\n//expect(part2(testData).toBe())\n//expect(part2(fullData).toBe())\n})})"
            );
        })
        .then(() => {
            return fs.mkdir(`${__dirname}/challenge-${day}/data`);
        })
        .then(() => {
            fs.mkdir(`${__dirname}/challenge-${day}/data/utils`);
            return fs.mkdir(`${__dirname}/challenge-${day}/utils`);
        })
        .then(() => {
            return fs.mkdir(`${__dirname}/challenge-${day}/data/fullData`);
        })
        .then(() => {
            return fs.writeFile(
                `${__dirname}/challenge-${day}/data/fullData/rawFullData.txt`,
                ""
            );
        })
        .then(() => {
            return fs.mkdir(`${__dirname}/challenge-${day}/data/testData`);
        })
        .then(() => {
            return fs.writeFile(
                `${__dirname}/challenge-${day}/data/testData/rawTestData.txt`,
                ""
            );
        })
        .then(() => {
            // setup data format function
            fs.writeFile(
                `${__dirname}/challenge-${day}/data/utils/formatData.js`,
                "exports.formatData = (rawDataString) => {};"
            );

            // setup readAndWriteData function
            fs.writeFile(
                `${__dirname}/challenge-${day}/data/utils/readAndWriteData.js`,
                "const { formatData } = require('./formatData.js');\nconst fs = require('fs/promises');\n\nexports.readAndWriteData = (readPath, writePath) => {\nreturn fs.readFile(`${__dirname}/../${readPath}`, 'utf-8').then((content) => {\nconst dataToWrite = `module.exports = ${JSON.stringify(formatData(content),null,2)}`;\nreturn fs.writeFile(`${__dirname}/../${writePath}`, dataToWrite);\n});\n};"
            );

            // setup file to run read and write function
            fs.writeFile(
                `${__dirname}/challenge-${day}/run-data-formatting.js`,
                "const {readAndWriteData} = require('./data/utils/readAndWriteData.js');\n\nreadAndWriteData('/testData/rawTestData.txt', '/testData/testData.js');\nreadAndWriteData('/fullData/rawfullData.txt', '/fullData/fullData.js');"
            );
        });
};

setupChallengeDay();