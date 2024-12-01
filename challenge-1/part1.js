exports.differenceSummer = (inputArray) => {
    const sortedArrays = inputArray.map((unsortedArray) => unsortedArray.sort((a, b) => a - b))
    
    let output = 0
    for(let i = 0; i < sortedArrays[0].length; i ++){
       output = output + Math.abs(+sortedArrays[0][i] - sortedArrays[1][i])
    }
    return output
}