class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;
        const numSet = new Set(nums);
        let longest = 1;

        for(let num of nums){
            if(!numSet.has(num - 1)){
                let len = 1;
                while(numSet.has(num + len)){
                    len++;
                }
                longest = Math.max(longest, len);
            }
        }
        return longest;
    }
}
