/*
https://www.codewars.com/kata/sudoku-solution-validator/train/javascript

Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

Examples
validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
*/

// Submission (incorrect)
function validSolutionA(board) {
  function rowsAddUp(board) {
    return board
      .map(row => row.reduce((sum, n) => sum + n, 0))
      .every(sum => sum === 45);
  }

  function columnsAddUp(board) {
    const sums = [];
    for (let i = 0; i < 9; i++) {
      let sum = 0;
      for (let j = 0; j < 9; j++) {
        sum += board[i][j];
      }
      sums.push(sum);
    }
    return sums.every(sum => sum === 45);
  }

  function subGridsAddUp(board) {
    const sums = [];
    const divisions = [
      [0, 3],
      [3, 6],
      [6, 9]
    ];
    for (const division of divisions) {
      const sumChunks = [0, 0, 0];
      for (let j = division[0]; j < division[1]; j++) {
        sumChunks[0] += board[j][0] + board[j][1] + board[j][2];
        sumChunks[1] += board[j][3] + board[j][4] + board[j][5];
        sumChunks[2] += board[j][6] + board[j][7] + board[j][8];
      }
      sums.push(...sumChunks);
    }
    return sums.every(sum => sum === 45);
  }

  return rowsAddUp(board) && columnsAddUp(board) && subGridsAddUp(board);
}

// Inspiration
function validArray(a) {
  const u = [];
  for (let i = 0; i < 9; i++) {
    if (a[i] <= 0) return false;
    u[a[i] - 1] = true;
  }
  return u.length === 9;
}

function validSolution(board) {
  const cols = new Array(9);
  const blocks = new Array(9);
  for (let i = 0; i < 9; i++) {
    cols[i] = [];
    blocks[i] = [];
  }

  for (let r = 0; r < 9; r++) {
    if (!validArray(board[r])) return false;
    for (let c = 0; c < 9; c++) {
      cols[c].push(board[r][c]);
      blocks[Math.floor(c / 3) + 3 * Math.floor(r / 3)].push(board[r][c]);
    }
  }
  for (let i = 0; i < 9; i++) if (!validArray(cols[i])) return false;
  for (let i = 0; i < 9; i++) if (!validArray(blocks[i])) return false;

  return true;
}

function validArray2(a) {
  a.sort();
  return a.join() === "1,2,3,4,5,6,7,8,9";
}

// Practicing
function validSolutionZ(board) {
  return 1;
}

module.exports = validSolution;
