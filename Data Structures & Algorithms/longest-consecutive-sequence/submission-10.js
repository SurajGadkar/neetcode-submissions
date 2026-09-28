class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;

        const set = new Set(nums);
        let longest = 1;

        for(let num of set){
            if(!set.has(num - 1)){
                let max = 1;
                let curr = num;
                while(set.has(curr + 1)){
                    max += 1;
                    curr++;
                }
                longest = Math.max(max, longest)
            }   
        }
        return longest;
    }
}
