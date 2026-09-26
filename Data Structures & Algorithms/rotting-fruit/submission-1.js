class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [[0,1], [1,0], [0,-1], [-1, 0]];
        let fresh = 0;
        const queue = new MyQueue();

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === 1){
                    fresh++;
                }

                if(grid[r][c] === 2){
                    queue.push([r, c]);
                }
            }
        }


        let minutes = 0;
        while(queue.size() && fresh > 0){
            const size = queue.size();
            minutes++;
            for(let i = 0; i < size; i++){
                const [row, col] = queue.pop();
                
                for(let [dx, dy] of directions){
                    let r = row + dx, c = col + dy;
                    if(r >= 0 && c >= 0 && r < ROWS && c < COLS &&
                        grid[r][c] === 1){
                        grid[r][c] = 2;
                        fresh--;
                        queue.push([r, c])
                    }
                }
            }
        }

        return fresh === 0 ? minutes : -1
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
        const popped = this.items[this.head];
        delete this.items[this.head];
        this.head++

        return popped;
    }

    peek() {
        return this.items[this.head];
    }

    isEmpty(){
        return this.tail === this.head;
    }

    size() {
        return this.tail - this.head;
    }
}


