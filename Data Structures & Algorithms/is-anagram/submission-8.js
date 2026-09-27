class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        const countMap = new Map();

        for (let char of s) {
            countMap.set(char, (countMap.get(char) || 0) + 1);
        }

        for (let char of t) {

            if (!countMap.get(char)) {
                return false;
            }
            countMap.set(char, countMap.get(char) - 1);
        }

        return true;
    }
}
