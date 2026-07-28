const Graph = (initial = [], final = []) => {
  let x = initial[0];
  let y = initial[1];
  let xx = final[0];
  let yy = final[1];
  let s_steps = [];
  let temp_steps =[];
  let temp = [x, y];
  let pwr = 1;
  while (temp[0] !== xx || temp[1] !== yy) {
    //DFS APPROACH
    if ((temp_steps.includes(temp)) == true) return (temp_steps.length = 0);
    switch (pwr) {
      case (1):
        temp = [temp[0] + 2, temp[1] + ((-1) ** pwr) * 2];
        pwr++;
        break;
      case (2):
        temp = [temp[0] - 2, temp[1] + ((-1) ** pwr) * 2];
        pwr++;
        break;
      case (3):
        temp = [temp[0] + ((-1) ** pwr) * 1, temp[1] + 2];
        pwr++;
        break;
      case (4):
        temp = [temp[0] + ((-1) ** pwr) * 1, temp[1] + 2];
        break;
    default:
        
        break;
    }
    temp_steps.push([]); //  nests a new array in teporary steps
    temp_steps[0].push(temp); //adds the step in the newly created array
  }
  if(temp_steps.length < s_steps.length) temp_steps = s_steps;
  return s_steps;
};

console.log(Graph([2, 4], [8, 2]));
/*
movement calculations

 to move (+)ve x = ( a + 2 , b +(-1 )^n * 2) ) 
 to move (-)ve x = ( a - 2 , b +(-1 )^n * 2 ) 
 to move (+)ve y = ( a +(-1 )^n *  1 , b + 2 )
 to move (-)ve y = ( a +(-1 )^n *  1 , b - 2 )

 where a and b are the original coordinates of the knight
 */
