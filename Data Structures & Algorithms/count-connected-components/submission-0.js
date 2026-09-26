class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let res = n;
        let parent = Array.from({length : n}, (_, i) => i);
        let rank = new Array(n).fill(1);
        for(let [u, v] of edges){
            if(union(u, v)){
                res--;
            }
        }

        return res;

        function find(n){
            let cur = n;
            while(cur !== parent[cur]){
                parent[cur] = parent[parent[cur]];
                cur = parent[cur]
            }
            return cur;
        }

        function union(u, v){
            let p1 = find(u);
            let p2 = find(v);

            if(p1 === p2){
                return false;
            }

            if(rank[p1] > rank[p2]){
                [p1, p2] = [p2, p1]
            }

            parent[p2] = p1;
            rank[p1] += rank[p2]

            return true;
        }
    }

    
}
