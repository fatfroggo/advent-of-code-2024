const { part1 } = require("../part1");
const { part2 } = require("../part2");
const testData = require("../data/testData/testData");
const fullData = require("../data/fullData/fullData");

describe("part 1 - finding safe reports", () => {
  test("Sucessfully identifies the number of safe reports where safe reports are either gradually increasing or decreasing by between 1 and 3 digits at a time", () => {
    expect(part1(testData)).toBe(2);
    expect(part1(fullData)).toBe(606);
  });
});

describe.only("part 2 - ", () => {
  test("", () => {
    expect(part2(testData)).toBe(9);
    expect(part2(fullData)).toBe(644)
  });
});
