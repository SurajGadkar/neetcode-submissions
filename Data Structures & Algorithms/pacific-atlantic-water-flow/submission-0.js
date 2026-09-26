class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;

        let pacific = false, atlantic = false;
        let directions = [ [0,1], [1,0], [0,-1], [-1,0]];

        const dfs = (r, c, prevVal) => {
            if(r < 0 || c < 0){
                pacific = true;
                return;
            }
            if(r === ROWS || c === COLS){
                atlantic = true;
                return;
            }

            if(heights[r][c] > prevVal){
                return;
            }

            let temp = heights[r][c];
            heights[r][c] = Infinity;
            for(let [dx, dy] of directions){
                dfs(r + dx, c + dy, temp);
                if(pacific && atlantic){
                    break;
                }
            }
            heights[r][c] = temp;
        }


        let res = [];
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                pacific = false;
                atlantic = false;
                dfs(r, c, Infinity);
                if(pacific && atlantic){
                    res.push([r,c])
                }
            }
        }

        return res
    }
}
