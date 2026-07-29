const knightMoves = (initial, final, path = [initial]) => {
  const [a, b] = initial; // inital coordinates
  const [x, y] = final; // final coordinantes

  // checks if it has reached the end or not
  if (a === x && b === y) {
    console.log("done");
    console.log(path);
    return path;
  }

  let moves = [
    //this part is same as the switch...case but cleaner
    [2, 2],
    [2, -2],
    [-2, 2],
    [-2, -2],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // this does the same thing as switch case but efficiently  and cleanly

  let steps = [];
  for (const [dx, dy] of moves) {
    let new_x = a + dx;
    let new_y = b + dy;
    if (new_x >= 0 && new_y >= 0 && new_x <= 7 && new_y <= 7) {
      const alreadyVisited = path.some(
        ([px, py]) => px === new_x && py === new_y,
      );
      if (!alreadyVisited) {
        steps.push([new_x, new_y]);
      }
    }
  }

  /* 
  returns the above calculated steps 
  to the function to find out which 
  has the shortest distance to the final destination
  */
  return scoreSYS(steps, final, path);
};
const scoreSYS = (steps, final, path) => {
  const [x, y] = final;

  // sort candidates by score, closest first, instead of only keeping the single best

  let scored = steps
    .map(([step_x, step_y]) => {
      const dx = Math.abs(step_x - x);
      const dy = Math.abs(step_y - y);
      const score = Math.max(dx, dy);
      return { square: [step_x, step_y], score };
    })
    .sort((s1, s2) => s1.score - s2.score);
  // try each candidate in order; if one leads to a dead end (returns null), try the next
  for (const { square } of scored) {
    const result = knightMoves(square, final, [...path, square]);
    if (result !== null) return result;
  }

  // no candidates worked from here — dead end, signal failure to caller
  return null;
};
console.log(knightMoves([2, 4], [7, 2]));

export default knightMoves;
/*
movement calculations

 to move (+)ve x = ( a + 2 , b +(-1 )^n * 2) ) 
 to move (-)ve x = ( a - 2 , b +(-1 )^n * 2 ) 
 to move (+)ve y = ( a +(-1 )^n *  1 , b + 2 )
 to move (-)ve y = ( a +(-1 )^n *  1 , b - 2 )

 where a and b are the original coordinates of the knight
 */
