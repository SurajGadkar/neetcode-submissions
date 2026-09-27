class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        const fc = new Map();

        for(let i = 0; i < s.length; i++){
            const curr = fc.get(s[i])
            fc.set(s[i], curr && curr + 1 || 1)
        }

        for(let i = 0; i < s.length; i++){
            const curr = fc.get(t[i])
            if(curr === 0){
                return false
            }
            fc.set(t[i], curr && curr - 1 )
        }

        for(let [char, count] of fc){
            if(count !== 0 || char === null){
                return false
            }
        }

        return true
    }
}
