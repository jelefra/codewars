/*
https://www.codewars.com/kata/

Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |

** Input **
- the list of game characters in a 2x6 grid;
- the initial position of the selection cursor (top-left is (0,0));
- a list of moves of the selection cursor (which are up, down, left, right);

** Output **
- the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);

** Rules **
Selection cursor is circular horizontally but not vertically!

** Test **
For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

** Examples **

1.
fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
then I should get:

['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

2.
fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']

Result:
['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

*/

// My try
const moveMap = {
  left: [0, -1],
  right: [0, 1],
  up: [-1, 0],
  down: [1, 0]
};

const getNewPosition = (startingPosition, nextMove) => {
  const row = Math.max(
    Math.min(startingPosition[0] + moveMap[nextMove][0], 1),
    0
  );
  const column = (startingPosition[1] + moveMap[nextMove][1] + 6) % 6;
  return [row, column];
};

const getNextFighter = (fighters, [row, column]) => {
  return fighters[row][column];
};

function streetFighterSelection(fighters, position, moves) {
  const fightersSelection = [];
  let startingPosition = position;
  let newPosition = "";
  const movesLeft = [...moves];
  while (movesLeft.length) {
    newPosition = getNewPosition(startingPosition, movesLeft.shift());
    const fighter = getNextFighter(fighters, newPosition);
    fightersSelection.push(fighter);
    startingPosition = newPosition;
  }
  return fightersSelection;
}

// Best practice
function streetFighterSelection2(fighters, position, moves) {
  const boundY = fighters.length - 1;
  const boundX = fighters[0].length - 1;

  let [y, x] = position;

  const controls = {
    right: () => (x === boundX ? (x = 0) : x++),
    left: () => (x ? x-- : (x = boundX)),
    up: () => (y ? y-- : y),
    down: () => (y < boundY ? y++ : y)
  };

  return moves.map(move => {
    controls[move]();
    return fighters[y][x];
  });
}

const streetFighterSelection3 = (fighters, [i, j], moves) => {
  return moves.map(move => {
    if (move === "up") i = Math.max(i - 1, 0);
    if (move === "down") i = Math.min(i + 1, 1);
    if (move === "left") j = (j - 1 + 6) % 6;
    if (move === "right") j = (j + 1 + 6) % 6;

    return fighters[i][j];
  });
};

// Practicing
function streetFighterSelectionZ() {
  return 1;
}

module.exports = streetFighterSelection;
