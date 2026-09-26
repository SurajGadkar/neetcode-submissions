class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        
        for(let i = 0; i < strs.length; i++){
            let charCount = new Array(26).fill(0);
            
            for(let j = 0; j < strs[i].length; j++){
                charCount[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)] += 1;
            }

            if(map[charCount] === undefined){
                map[charCount] = [strs[i]]
            }else{
                map[charCount].push(strs[i])
            }

        }

        let result = [];
        
        for(let [key, value] of Object.entries(map)){
            result.push(value)
        }

        return result
    }
}
