class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let visited = new Set();
        let queue = [];

        function addCell(r, c) {
            if(Math.min(r, c) < 0 || r === rows || c === cols ||
            visited.has(r + ", " + c) || grid[r][c] === -1){
                return
            }

            visited.add(r + ", " + c);
            queue.push([r, c])
        }

        for(let r = 0; r < rows; r++){
            for(let c = 0; c < cols; c++){
                if(grid[r][c] === 0){
                    queue.push([r, c]);
                    visited.add(r + ", " + c);
                }
            }
        }

        let dist = 0;
        while(queue.length){
            let size = queue.length
            for(let i = 0; i < size; i++){
                let [r, c] = queue.shift();
                grid[r][c] = dist;

                addCell(r + 1, c);
                addCell(r - 1, c);
                addCell(r, c + 1);
                addCell(r, c - 1);
            }
            dist += 1
        }
    }
}
