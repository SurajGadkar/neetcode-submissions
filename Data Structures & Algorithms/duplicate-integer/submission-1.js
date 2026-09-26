class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(map[nums[i]] !== undefined){
                return true
            }            
            else{
                map[nums[i]] = 1;
            }
        }
        return false
    }
}
