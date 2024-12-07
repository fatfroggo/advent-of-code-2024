const { part1 } = require("../part1");
const { part2 } = require("../part2");
const testData = require("../data/testData/testData");
const fullData = require("../data/fullData/fullData");
const { combinationGenerator } = require("../utils/combinationGenerator");

describe.skip("utils", () => {
  test("combination generator", () => {
    expect(combinationGenerator(2, ["*", "+"])).toEqual([
      "**",
      "*+",
      "+*",
      "++",
    ]);
    const expected = ["*++", "***", "*+*", "+**", "++*", "**+", "+*+", "+++"];
    expect(combinationGenerator(3, ["*", "+"])).toEqual(
      expect.arrayContaining(expected)
    );
  });
});

describe.skip("part 1 - retrieve the total of all the valid combinations", () => {
  test("", () => {
    expect(part1(testData)).toBe(3749);
    expect(part1(fullData)).toBe(2314935962622);
  });
});

describe.skip("part 2 - ", () => {
  test("", () => {
    expect(part2(testData)).toBe(11387);
    expect(part2(fullData)).toBe(401477450831495);
  });
});
