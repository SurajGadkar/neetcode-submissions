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
            const key = this.createUniqueChar(strs[i]);

            if(map.get(key) === undefined){
                map.set(key, [strs[i]])
            }else{
                map.get(key).push(strs[i])
            }
        }
        return [...map.values()]
    }

    createUniqueChar(word) {
        const u = new Map()
        const sorted = word.split('').sort().join('');
        
        for( let char of sorted){
            u.set(char, u.get(char) + 1 || 1)
        }
        
        let result = ""
        for (let [char, count] of u){
            result += `${char}${count}`
        }
        return sorted
    }
}
