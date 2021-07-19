/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
  const tracker = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (tracker[i]) {
        tracker[i][j] = 0;
      } else {
        tracker[i] = [];
        tracker[i][j] = 0;
      }
    }
  }

  let count = 0;
  const markWholeIslandVisited = (x, y, grid, tracker) => {
    tracker[x][y] = 1;
    if (
      y < grid[0].length - 1 &&
      grid[x][y + 1] == 1 &&
      tracker[x][y + 1] == 0
    ) {
      markWholeIslandVisited(x, y + 1, grid, tracker);
    }
    if (y > 0 && grid[x][y - 1] == 1 && tracker[x][y - 1] == 0) {
      markWholeIslandVisited(x, y - 1, grid, tracker);
    }
    if (x < grid.length - 1 && grid[x + 1][y] == 1 && tracker[x + 1][y] == 0) {
      markWholeIslandVisited(x + 1, y, grid, tracker);
    }
    if (x > 0 && grid[x - 1][y] == 1 && tracker[x - 1][y] == 0) {
      markWholeIslandVisited(x - 1, y, grid, tracker);
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const isLand = grid[i][j] == 1;
      if (isLand && tracker[i][j] == 0) {
        markWholeIslandVisited(i, j, grid, tracker);
        count++;
      }
    }
  }

  return count;
};

// const grid1 = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"]
// ];
// console.log(numIslands(grid1));

const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];
console.log(numIslands(grid2));
