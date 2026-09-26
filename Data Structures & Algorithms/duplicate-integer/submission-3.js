class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Set();

        for(let i = 0; i < nums.length; i++){
            if(map.has(nums[i])){
                return true
            }            
            else{
                map.add(nums[i], true)
            }
        }
        return false
    }
}
