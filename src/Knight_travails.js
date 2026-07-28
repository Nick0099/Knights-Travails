const knightMoves = (initial, final, path = [initial]) => {
  const [a, b] = initial; // inital coordinates
  const [x, y] = final; // final coordinantes
  let steps = [];
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

  for (const [dx, dy] of moves) {
    let new_x = a + dx;
    let new_y = b + dy;
    if (new_x >= 1 && new_y >= 1 && new_x <= 8 && new_y <= 8) {
      steps.push([new_x, new_y]);
    }
  }

  // checks if it has reached the end or not

  if (a == x && b == y) {
    console.log("done");
    console.log(path);
    return path;
  }

  /* 
  gives the above calculated steps 
  to the function to find out which 
  has the shortest distance to the final destination
  */
  scoreSYS(steps, final, path);
};
const scoreSYS = (steps, final, path) => {
  const [x, y] = final;
  let best = null;
  // it is set to hunder to make it instantly change to the new score initially
  let BestScore = 100;
  /*
  calculates  the best score with the same idea but with better implementation 
  */
  for (const [step_x, step_y] of steps) {
    const dx = Math.abs(step_x - x);
    const dy = Math.abs(step_y - y);
    const score = Math.max(dx, dy);
    if (score < BestScore) {
      BestScore = score;
      best = [step_x, step_y];
    }
  }

  return knightMoves(best, final, [...path, best]);
};
console.log(knightMoves([2, 4], [8, 2]));
/*
movement calculations

 to move (+)ve x = ( a + 2 , b +(-1 )^n * 2) ) 
 to move (-)ve x = ( a - 2 , b +(-1 )^n * 2 ) 
 to move (+)ve y = ( a +(-1 )^n *  1 , b + 2 )
 to move (-)ve y = ( a +(-1 )^n *  1 , b - 2 )

 where a and b are the original coordinates of the knight
 */
