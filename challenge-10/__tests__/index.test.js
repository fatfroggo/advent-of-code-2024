const { part1 } = require("../part1");
const { part2 } = require("../part2");
const testData = require("../data/testData/testData");
const fullData = require("../data/fullData/fullData");

describe.skip("part 1 - Find hiking paths ", () => {
  test("check that the total number of hiking paths found is correct whilst not repeating the same start and end points", () => {
    expect(part1(testData, 0)).toBe(36);
    expect(part1(fullData)).toBe(587);
  });
});

describe("part 2 - Find all unique hiking paths", () => {
  test("Allows repetitions of the end point to find all possible hiking paths", () => {
    expect(part2(testData)).toBe(81);
    expect(part2(fullData)).toBe(1340);
  });
});
