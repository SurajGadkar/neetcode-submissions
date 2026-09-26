class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        let ROWS = heights.length;
        let COLS = heights[0].length;

        let pac = Array.from({length : ROWS}, () => Array(COLS).fill(false));
        let atl = Array.from({length: ROWS}, () => Array(COLS).fill(false));
        let directions = [[0,1],[1,0],[0,-1],[-1,0]];
        let pacQ = new MyQueue();
        let atlQ = new MyQueue();

        for(let r = 0; r < ROWS; r++){
            pacQ.push([r, 0]);
            atlQ.push([r, COLS-1]);
        }

        for(let c = 0; c < COLS; c++){
            pacQ.push([0, c]);
            atlQ.push([ROWS-1, c])
        }

        const bfs = (queue, ocean, heights) => {
            while(!queue.isEmpty()){
                let [r, c] = queue.pop();
                ocean[r][c] = true;
                for(let [dx, dy] of directions){
                    let nr = r + dx, nc = c + dy;
                    if(nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS
                    && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]){
                        queue.push([nr, nc]);
                    }
                }
            }
        }

        bfs(pacQ, pac, heights);
        bfs(atlQ, atl, heights);

        let res = [];
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(pac[r][c] && atl[r][c]){
                    res.push([r, c])
                }
            }
        }
        return res;

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
        return this.head === this.tail
    }

    size(){
        return this.tail - this.head;
    }
}
