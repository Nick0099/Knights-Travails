const Node = (value) => {
  const data = value;
  const posn = [];
};

const Graph = (initial = [a,b], final = [c,d]) => {
  let steps = [];
  let temp = [a,b];
  while (temp != final) {
    if(temp = steps.includes(temp)) return steps.length = 0

    
    steps.push([]); //  nests a new array in steps
    steps[0].push(temp); //adds the step in the newly created array
  }
};

/*
movement calculations

 to move (+)ve x = ( a + 2 , b +(-1 )^n * 2) ) 
 to move (-)ve x = ( a - 2 , b +(-1 )^n * 2 ) 
 to move (+)ve y = ( a +(-1 )^n *  1 , b + 2 )
 to move (-)ve y = ( a +(-1 )^n *  1 , b - 2 )

 where a and b are the original coordinates of the knight
 */
