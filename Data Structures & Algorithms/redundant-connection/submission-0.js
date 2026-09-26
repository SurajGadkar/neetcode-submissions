class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const parent = new Array(edges.length + 1).fill(0).map((_, i) => i);
        const rank = new Array(edges.length + 1).fill(1);

        function find(n) {
            let p = parent[n];

            while( p !== parent[p]){
                parent[p] = parent[parent[p]];
                p = parent[p];
            }

            return p;
        }

        function union(u, v){
            const p1 = find(u);
            const p2 = find(v);

            if(p1 === p2){
                return false
            }

            if(rank[p1] > rank[p2]){
                parent[p1] = p2;
                rank[p1] += rank[p2]
            } else {
                parent[p1] = p2;
                rank[p2] += rank[p1]
            }

            return true
        }

        for(const [ n1, n2] of edges){
            if(!union(n1, n2)){
                return [n1, n2]
            }
        }

    }

    
}
