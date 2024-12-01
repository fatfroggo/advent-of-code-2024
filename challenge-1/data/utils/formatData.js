exports.formatData = (rawDataString) => {
    const stringSplit = rawDataString.split('\n')
    const useableData = []
    for(let i = 0; i < stringSplit.length; i ++){ useableData.push(...stringSplit[i].split('   '))}
    const array1 = useableData.filter((item, index) => index %2 === 0 ? true : false)
    const array2 = useableData.filter((item, index) => index %2 !== 0 ? true : false)
    const outputArray = [array1, array2]

    return outputArray
};