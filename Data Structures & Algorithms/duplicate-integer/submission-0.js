class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let visited = new Set();
        for(let i = 0; i < nums.length; i++){
            if(visited.has(nums[i]))
                return true
            else
                visited.add(nums[i])
        }
        return false
    }
}
