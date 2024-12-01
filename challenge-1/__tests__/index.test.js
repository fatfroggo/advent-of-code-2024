const { differenceSummer } = require("../part1")
const { similarityCalculator } = require("../part2")
// const differenceSummer = require("../index")
const testData = require("../data/testData/testData")
const fullData = require("../data/fullData/fullData")

describe('differenceSummer', () => {
    test('Sums the difference between two sets of numbers and returns the correct total difference', () => {
        expect(differenceSummer(testData)).toBe(11)
        expect(differenceSummer(fullData)).toBe(1938424)
    })
})

describe.only('similarityCalculator', () => {
    test('Calculates the similarities between the two lists to find a total similarity score', () => {
        expect(similarityCalculator(testData)).toBe(31)
        expect(similarityCalculator(fullData)).toBe(22014209)
    })
})