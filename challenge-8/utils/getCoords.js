exports.getCoords = (grid) => {
  const coords = {};
  grid.forEach((row, index) => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] !== ".") {
        if (!coords[row[i]]) coords[row[i]] = [[index, i]];
        else coords[row[i]].push([index, i]);
      }
    }
  });
  return coords
};
