class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;

        let directions = [[0,1],[1,0],[0,-1],[-1,0]];
        let pac = Array.from({length : ROWS}, () => Array(COLS).fill(false));
        let atl = Array.from({length : ROWS}, () => Array(COLS).fill(false));

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;

            for(let [dx, dy] of directions){
                let nr = r + dx, nc = c + dy;
                if(nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS
                && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]){
                    dfs(nr,nc,ocean)
                }
            }
        }

        for(let r = 0; r < ROWS; r++){
            dfs(r, 0, pac);
            dfs(r, COLS - 1, atl)
        }

        for(let c = 0; c < COLS; c++){
            dfs(0, c, pac);
            dfs(ROWS - 1, c, atl);
        }

        let res = [];
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(pac[r][c] && atl[r][c]){
                    res.push([r, c])
                }
            }
        }
        return res
    }
}
