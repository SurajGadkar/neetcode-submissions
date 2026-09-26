class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char){
        return /^[a-zA-Z0-9]$/.test(char)
    }
    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        while(start < end){
            if(!this.isAlphanumeric(s[start])){
                start++;
                continue;
            }
            if(!this.isAlphanumeric(s[end])){
                end--;
                continue;
            }
                

            if( s[start]?.toLowerCase() !== s[end]?.toLowerCase())
                return false;
            
            start++;
            end--;
        }
        return true
    }
}
