class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let charCount = new Array(26).fill(0);

        for(let i = 0; i < s.length; i++){
            charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1
            charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1
        }

        for(let count of charCount){
            if(count !== 0){
                return false
            }
        }

        return true
    }
}
