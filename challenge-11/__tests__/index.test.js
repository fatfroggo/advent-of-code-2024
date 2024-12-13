const { part1 } = require("../part1");
const { part2 } = require("../part2");
const testData = require("../data/testData/testData");
const fullData = require("../data/fullData/fullData");

describe.skip("part 1 - ", () => {
  test("", () => {
    expect(part1(testData)).toBe(55312);
    //expect(part1(fullData)).toBe(183484);
  });
});

describe("part 2 - ", () => {
  test("", () => {
    //expect(part2(testData)).toBe()
    expect(part2(fullData)).toBe();
  });
});
