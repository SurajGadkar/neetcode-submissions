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
        const sCounter = new Map();
        const tCounter = new Map();


        for(let i = 0; i < s.length; i++){
            const currStrFreq = sCounter.get(s[i]);
            sCounter.set(s[i],  currStrFreq !== undefined ? currStrFreq + 1 : 1)
        }

        for(let i = 0; i < t.length; i++){
            const currStrFreq = tCounter.get(t[i]);
            tCounter.set(t[i],  currStrFreq !== undefined ? currStrFreq + 1 : 1)
        }

        for(let [char, count] of sCounter){
            if(!tCounter.has(char) || tCounter.get(char) !== count){
                return false
            }
        }

        return true

        

        
        
        

    }
}
