exports.getStartPosition = (locationGrid) => {
    for(let i = 0; i < locationGrid.length; i ++){
        for(let j = 0; j < locationGrid[i].length; j++){
            if(locationGrid[i][j] === "^") {
                return `${i},${j}`
            }
        }
    }
}