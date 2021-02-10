/*
https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!

You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

Key:
      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point

Direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
2. The start and finish positions will change for the final tests.
3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
4. If you reach the end point before all your moves have gone, you should return Finish.
5. If you hit any walls or go outside the maze border, you should return Dead.
6. If you find yourself still in the maze after using all the moves, you should return Lost.

Good luck, and stay safe!
*/

// Submission
const mazeRunner = (maze, directions) => {
  let x;
  let y;

  for (let i = 0; i < maze.length; i++) {
    if (maze[i].includes(2)) {
      x = i;
      y = maze[i].findIndex(el => el === 2);
    }
  }

  const map = {
    N: -1,
    S: 1,
    E: 1,
    W: -1
  };

  for (let k = 0; k < directions.length; k++) {
    if (directions[k] === "N" || directions[k] === "S") {
      x += map[directions[k]];
    }

    if (directions[k] === "E" || directions[k] === "W") {
      y += map[directions[k]];
    }

    if (
      x < 0 ||
      y < 0 ||
      x >= maze.length ||
      y > maze[x].length ||
      maze[x][y] === 1
    ) {
      return "Dead";
    }

    if (maze[x][y] === 3) {
      return "Finish";
    }
  }

  return "Lost";
};

// Inspiration
const mazeRunner2 = (maze, dirs) => {
  let y = maze.findIndex(arr => arr.includes(2));
  let x = maze[y].indexOf(2);
  let curPos;
  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === "N") y--;
    if (dirs[i] === "S") y++;
    if (dirs[i] === "W") x--;
    if (dirs[i] === "E") x++;
    if (!maze[y]) return "Dead";
    curPos = maze[y][x];
    if (curPos === 3) return "Finish";
    if (curPos === 1 || curPos === undefined) return "Dead";
  }
  return "Lost";
};

// Practicing
const mazeRunnerZ = (maze, directions) => {
  return 1;
};

module.exports = mazeRunner;
