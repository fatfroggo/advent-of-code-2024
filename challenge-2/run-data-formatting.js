const { readAndWriteData } = require("./data/utils/readAndWriteData.js");

readAndWriteData("/testData/rawTestData.txt", "/testData/testData.js");
readAndWriteData("/fullData/rawfullData.txt", "/fullData/fullData.js");
