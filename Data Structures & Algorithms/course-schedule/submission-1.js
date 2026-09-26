class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let indegree = new Array(numCourses).fill(0);
        let adj =  Array.from({length : numCourses}, () => [])

        for(let [src, dst] of prerequisites){
            indegree[dst]++;
            adj[src].push(dst)
        }
        let queue = [];
        for(let i = 0; i < numCourses; i++){
            if(indegree[i] === 0){
                queue.push(i)
            }
        }

        let finish = 0;
        while(queue.length){
            let node = queue.shift();
            finish++;
            for(let n of adj[node]){
                indegree[n]--;
                if(indegree[n] === 0){
                    queue.push(n)
                }
            }
        }

        return finish === numCourses
    }
}
