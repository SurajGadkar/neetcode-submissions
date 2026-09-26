class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let ROWS = grid.length;
        let COLS = grid[0].length;

        const directions = [[0,1],[1,0],[0,-1],[-1,0]];
        const visited = Array.from({length : ROWS}, () => Array(COLS).fill(false));
        const queue = new MyQueue();

        let island = 0;

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === "1" && !visited[r][c]){
                    queue.push([r, c]);
                    visited[r][c] = true;
                    island++;
                }

                while(!queue.isEmpty()){
                    let [sr, sc] = queue.pop();
                    for(let [dx, dy] of directions){
                        let nr = sr + dx, nc = sc + dy;
                        if(nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS
                        && !visited[nr][nc] && grid[nr][nc] === "1"){
                            queue.push([nr, nc]);
                            visited[nr][nc] = true;
                        }
                    }
                }

            }
        }

    return island;

    }
}


class MyQueue {
    constructor(){
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    push(item){
        this.items[this.tail] = item;
        this.tail++;
    }

    pop(){
        if(this.isEmpty()) return undefined;
        let temp = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return temp;
    }

    isEmpty(){
        return this.head === this.tail;
    }
}