const { part1 } = require("../part1");
const { part2 } = require("../part2");
const testData = require("../data/testData/testData");
const fullData = require("../data/fullData/fullData");

describe("part 1 - ", () => {
  test("", () => {
    expect(part1(testData)).toBe(143);
    expect(part1(fullData)).toBe(5452);
  });
});

describe.only("part 2 - ", () => {
  test("", () => {
    expect(part2(testData)).toBe(123)
    expect(part2(fullData)).toBe(4598)
  });
});
