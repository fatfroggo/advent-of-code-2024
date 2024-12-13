const { blinker } = require("./utils/blinker");
const { findNewArrayLength } = require("./utils/findNewArrayLength");

exports.part2 = (stones) => {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    const numberAtIndex = stones.slice(i, i + 1);
    const innerArray = blinker(numberAtIndex, 5);
    stones[i] = innerArray;
    count += innerArray.length;
  }
  console.log(count, "5 blinks - first layer");
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < stones[i].length; j++) {
      const numberAtIndex = stones[i].slice(j, j + 1);
      const innerArray = blinker(numberAtIndex, 5);
      stones[i][j] = innerArray;
      count += innerArray.length;
    }
  }
  console.log(count, "10 - 2nd layer");
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < stones[i].length; j++) {
      for (let k = 0; k < stones[i][j].length; k++) {
        const numberAtIndex = stones[i][j].slice(k, k + 1);
        const innerArray = blinker(numberAtIndex, 5);
        stones[i][j][k] = innerArray;
        count += innerArray.length;
      }
    }
  }
  console.log(count, "15 - 3rd layer");
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < stones[i].length; j++) {
      for (let k = 0; k < stones[i][j].length; k++) {
        for (let l = 0; l < stones[i][j][k].length; l++) {
          const numberAtIndex = stones[i][j][k].slice(l, l + 1);
          const innerArray = blinker(numberAtIndex, 5);
          stones[i][j][k][l] = innerArray;
          count += innerArray.length;
        }
      }
    }
  }
  console.log(count, "20 - 4th layer");
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < stones[i].length; j++) {
      for (let k = 0; k < stones[i][j].length; k++) {
        for (let l = 0; l < stones[i][j][k].length; l++) {
          for (let m = 0; m < stones[i][j][k][l].length; m++) {
            const numberAtIndex = stones[i][j][k][l].slice(m, m + 1);
            const innerArray = blinker(numberAtIndex, 5);
            stones[i][j][k][l][m] = innerArray;
            count += innerArray.length;
          }
        }
      }
    }
  }

  console.log(count, "25 - 5th layer");
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < stones[i].length; j++) {
      for (let k = 0; k < stones[i][j].length; k++) {
        for (let l = 0; l < stones[i][j][k].length; l++) {
          for (let m = 0; m < stones[i][j][k][l].length; m++) {
            for (let n = 0; n < stones[i][j][k][l][m].length; n++) {
              const numberAtIndex = stones[i][j][k][l][m].slice(n, n + 1);
              const innerArray = blinker(numberAtIndex, 5);
              stones[i][j][k][l][m][n] = innerArray;
              count += innerArray.length;
            }
          }
        }
      }
    }
  }

  console.log(count, "30 - 6th layer");

  //   for (let i = 0; i < stones.length; i++) {
  //     for (let j = 0; j < stones[i].length; j++) {
  //       for (let k = 0; k < stones[i][j].length; k++) {
  //         for (let l = 0; l < stones[i][j][k].length; l++) {
  //           for (let m = 0; m < stones[i][j][k][l].length; m++) {
  //             const numberAtIndex = stones[i][j][k][l].slice(m, m + 1);
  //             const innerArray = blinker(numberAtIndex);
  //             stones[i][j][k][l][m] = innerArray;
  //             count += innerArray.length;
  //           }
  //         }
  //       }
  //     }
  //   }

  //   for (let i = 0; i < stones.length; i++) {
  //     for (let j = 0; j < stones[i].length; j++) {
  //       for (let k = 0; k < stones[i][j].length; k++) {
  //         for (let l = 0; l < stones[i][j][k].length; l++) {
  //           for (let m = 0; m < stones[i][j][k][l].length; m++) {
  //             const numberAtIndex = stones[i][j][k][l].slice(m, m + 1);
  //             const innerArray = blinker(numberAtIndex);
  //             stones[i][j][k][l][m] = innerArray;
  //             count += innerArray.length;
  //           }
  //         }
  //       }
  //     }
  //   }

  //   for (let i = 0; i < stones.length; i++) {
  //     for (let j = 0; j < stones[i].length; j++) {
  //       for (let k = 0; k < stones[i][j].length; k++) {
  //         for (let l = 0; l < stones[i][j][k].length; l++) {
  //           for (let m = 0; m < stones[i][j][k][l].length; m++) {
  //             const numberAtIndex = stones[i][j][k][l].slice(m, m + 1);
  //             const innerArray = blinker(numberAtIndex);
  //             stones[i][j][k][l][m] = innerArray;
  //             count += innerArray.length;
  //           }
  //         }
  //       }
  //     }
  //   }

  //   for (let i = 0; i < stones.length; i++) {
  //     for (let j = 0; j < stones[i].length; j++) {
  //       for (let k = 0; k < stones[i][j].length; k++) {
  //         for (let l = 0; l < stones[i][j][k].length; l++) {
  //           for (let m = 0; m < stones[i][j][k][l].length; m++) {
  //             const numberAtIndex = stones[i][j][k][l].slice(m, m + 1);
  //             const innerArray = blinker(numberAtIndex);
  //             stones[i][j][k][l][m] = innerArray;
  //             count += innerArray.length;
  //           }
  //         }
  //       }
  //     }
  //   }

  console.log(count);

  return "";
};
