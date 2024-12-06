const { part1 } = require("../part1");
const { part2 } = require("../part2");
const testData = require("../data/testData/testData");
const fullData = require("../data/fullData/fullData");

describe.skip("part 1 - validMuls", () => {
  test("find the correct value when using the valid multiplier sets in the formal mul(num, num) where num is between 1-3 digits", () => {
    expect(part1(testData)).toBe(161);
    expect(part1(fullData)).toBe(156388521);
  });
});

describe.skip("part 2 - validMuls", () => {
  test("find the correct value when using the valid multiplier sets in the formal mul(num, num) where num is between 1-3 digits accounting for do and dont instructions", () => {
    expect(part2(testData)).toBe(48);
    expect(part2(fullData)).toBe(75920122);
  });
});
