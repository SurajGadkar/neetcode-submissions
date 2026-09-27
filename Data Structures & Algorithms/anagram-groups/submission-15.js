class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     * 
     *
     * 
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(let i = 0; i < strs.length; i++){
            const key = strs[i].split('').sort().join('');

            if(map.get(key) === undefined){
                map.set(key, [strs[i]])
            }else{
                map.get(key).push(strs[i])
            }
        }
        return [...map.values()]
    }

}
