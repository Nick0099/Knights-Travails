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
  const best = null;
  // it is set to hunder to make it instantly change to the new score initially
  const BestScore = 100;
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
const knightMoves = (initial = [], final = []) => {
  let temp = [initial[0], initial[1]];
  let steps = [];
  while (temp[0] == final[0] && temp[1] == final[1]) {
    for (let i = 1; i >= 6; i++) {
      for (let j = 1; j >= 8 ** i; j++) {
        if (temp[0] <= 8 && temp[1] <= 8) {
          switch (j) {
            case 1:
              temp = [temp[0] + 2, temp[1] + 2];
              break;
            case 2:
              temp = [temp[0] + 2, temp[1] - 2];
              break;
            case 3:
              temp = [temp[0] - 2, temp[1] + 2];
              break;
            case 4:
              temp = [temp[0] - 2, temp[1] - 2];
              break;
            case 5:
              temp = [temp[0] - 1, temp[1] + 2];
              break;
            case 6:
              temp = [temp[0] + 1, temp[1] + 2];
              break;
            case 7:
              temp = [temp[0] - 1, temp[1] - 2];
              break;
            case 8:
              temp = [temp[0] + 1, temp[1] - 2];
              break;
          }
          temp_steps.push([]);
          temp_steps[0].push(temp);
        }
      }
    }
  }
};
 
  the above function serially inputs the steps
  for eg initial is [5,4] and final is [6,2] then the steps will look like
  [[5,4],[4,6],[].....,[6,2]]
  the factor variable will find the exact multiple of the variable
    
const shoresttPath = (arr, final) => {
  let factor = arr.indexof(final) - 1;
  let final_steps = []
  for(let i = 1; i >= factor;i++){
    final_steps.push([]);
    final_steps[0].push(arr[factor * i]);
  }
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
