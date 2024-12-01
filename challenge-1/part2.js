exports.similarityCalculator = (inputArray) => {
    const baseScores = inputArray[0]
    const multipliers = inputArray[1]

    let totalScore = 0
    baseScores.map((score) => totalScore += score*multipliers.filter((item) => +item === +score).length)

    return totalScore
}