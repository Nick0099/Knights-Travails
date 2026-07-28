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