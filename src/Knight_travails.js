const knightMoves = (start, end) => {
  console.log("BFS called with:", start, end);
  // all 8 possible knight moves, as (dx, dy) offsets
  const moves = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  const key = ([x, y]) => `${x},${y}`;
  const queue = [[start]];
  const visited = new Set([key(start)]);

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) return path;

    for (const [dx, dy] of moves) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 && nx <= 7 &&
        ny >= 0 && ny <= 7 &&
        !visited.has(key([nx, ny]))
      ) {
        visited.add(key([nx, ny]));
        queue.push([...path, [nx, ny]]);
      }
    }
  }

  return null; // no path found
};
console.log(knightMoves([1, 2], [4, 3]));
export default knightMoves;