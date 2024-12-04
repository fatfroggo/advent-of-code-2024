const { formatData } = require('./formatData.js');
const fs = require('fs/promises');

exports.readAndWriteData = (readPath, writePath) => {
return fs.readFile(`${__dirname}/../${readPath}`, 'utf-8').then((content) => {
const dataToWrite = `module.exports = ${JSON.stringify(formatData(content),null,2)}`;
return fs.writeFile(`${__dirname}/../${writePath}`, dataToWrite);
});
};