const { part1 } = require("../part1");
const { part2 } = require("../part2");
const testData = require("../data/testData/testData");
const fullData = require("../data/fullData/fullData");

describe.skip("part 1 - guard duty", () => {
  test("calculate the number of unique locations the guard travels to on his route", () => {
    expect(part1(testData)).toBe(41);
    expect(part1(fullData)).toBe(5095);
  });
});

describe.skip("part 2 - obstacles", () => {
  test("calculate the number of locations an obstacle can be placed to ensure the guard never leaves the grid", () => {
    expect(part2(testData)).toBe(6);
    expect(part2(fullData)).toBe(1933);
  });
});
